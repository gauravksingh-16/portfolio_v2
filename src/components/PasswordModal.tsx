"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { type Project } from "@/data/projects";

interface PasswordModalProps {
    project: Project;
    onClose: () => void;
}

export default function PasswordModal({ project, onClose }: PasswordModalProps) {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handlePasswordSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await fetch("/api/verify-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });

            if (response.ok && project.link) {
                window.location.href = project.link;
            } else {
                setError("Incorrect password");
            }
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="bg-white p-8 md:p-12 rounded-lg max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
            >
                <h3 className="font-helvetica text-xl md:text-2xl mb-2 text-black">
                    {project.title}
                </h3>
                <p className="font-helvetica text-xs md:text-sm text-black-mantle mb-6 md:mb-8">
                    This project is password protected
                </p>

                <form onSubmit={handlePasswordSubmit}>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        className="w-full px-0 py-3 border-0 border-b border-black-mantle font-helvetica text-sm md:text-base text-black mb-4 focus:outline-none focus:border-black bg-transparent"
                        autoFocus
                    />

                    {error && (
                        <p className="text-tangerine text-xs md:text-sm font-helvetica mb-4">{error}</p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full cursor-pointer bg-black text-white py-3 font-helvetica text-sm md:text-base mb-4 hover:bg-black-mantle transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Verifying..." : "Submit"}
                    </button>
                </form>

                <div className="text-center">
                    <a
                        href="mailto:gauravkumarsingh3360@gmail.com?subject=Request Access to Project"
                        className="text-xs md:text-sm font-helvetica text-black-mantle inline-block"
                    >
                        Request access
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
}
