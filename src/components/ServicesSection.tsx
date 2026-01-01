"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServicesSection() {
    const [hoveredService, setHoveredService] = useState<number | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            setSubmitStatus(response.ok ? "success" : "error");
            if (response.ok) form.reset();
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const services = [
        {
            id: "5.1",
            title: "UX/UI Design",
            items: [
                "/ User Flows",
                "/ Wireframes",
                "/ Prototype",
                "/ Design Systems",
                "/ Product Design"
            ],
            description: "I design digital products that are simple, intuitive, and user-focused from research and wireframes to polished interfaces and prototypes."
        },
        {
            id: "5.2",
            title: "Creative Design",
            items: [
                "/ Visual Design",
                "/ Social Media Design",
                "/ Branding",
                "/ Design Systems",
                "/ Presentations"
            ],
            description: "I craft visual identities, pitch decks, and design assets that bring your brand’s personality to life and make it memorable."
        },
        {
            id: "5.3",
            title: "Development",
            items: [
                "/ Frontend",
                "/ Backend",
                "/ No Code",
                "/ Optimazation",
            ],
            description: "I create modern, responsive websites and landing pages that not only look great but also drive engagement and results."
        }
    ];

    return (
        <section
            id="section-4"
            aria-labelledby="services-heading"
            className="min-h-screen bg-white px-6 md:px-40 py-12 md:py-20"
        >
            {/* Section Heading */}
            <h2 id="services-heading" className="font-helvetica font-[500] text-3xl md:text-5xl mb-12 md:mb-20 text-black">
                <span className="font-denton font-medium italic">(5)</span> Services
            </h2>

            {/* Services Accordion - Desktop Horizontal */}
            <div className="hidden md:flex gap-0 mb-32">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className={`border-l ${index === services.length - 1 ? "border-r" : ""} border-black-mantle pl-6 pr-6 cursor-pointer`}
                        animate={{
                            flex: hoveredService === index ? 2 : 0.5
                        }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                        onMouseEnter={() => setHoveredService(index)}
                        onMouseLeave={() => setHoveredService(null)}
                    >
                        {/* Header - ID and Title */}
                        <motion.div
                            className="flex mb-6"
                            animate={{
                                flexDirection: hoveredService === index ? "row" : "column",
                                justifyContent: hoveredService === index ? "space-between" : "flex-start",
                                alignItems: hoveredService === index ? "flex-start" : "stretch"
                            }}
                            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        >
                            <p className="font-denton italic text-sm text-black">
                                ({service.id})
                            </p>
                            <motion.h3
                                className="font-helvetica font-[500] text-3xl text-black"
                                animate={{ marginTop: hoveredService === index ? 0 : 16 }}
                                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                            >
                                {service.title}
                            </motion.h3>
                        </motion.div>

                        {/* Expanded Content - Shows on Hover */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: hoveredService === index ? 1 : 0,
                            }}
                            transition={{
                                duration: 0.3,
                                delay: hoveredService === index ? 0.2 : 0,
                                ease: [0.4, 0, 0.2, 1]
                            }}
                            className={hoveredService === index ? "" : "pointer-events-none"}
                        >
                            {/* Items and Image in Same Row with Space Between */}
                            <div className="flex justify-between items-start mb-6">
                                {/* Service Items */}
                                <ul className="space-y-1 flex-shrink-0">
                                    {service.items.map((item, idx) => (
                                        <li key={idx} className="font-helvetica font-[500] text-lg text-black">
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                {/* Service Image */}
                                <div className="w-[150px] h-[150px] flex-shrink-0 overflow-hidden">
                                    <img
                                        src={
                                            index === 0
                                                ? "/assets/services/UX_UI.jpg"
                                                : index === 1
                                                ? "/assets/services/Creative.jpg"
                                                : "/assets/services/Development.jpg"
                                        }
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <p className="font-helvetica font-[300] text-xl text-black leading-tight max-w-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Services Accordion - Mobile Vertical */}
            <div className="md:hidden space-y-0 mb-12">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="border-b border-black-mantle cursor-pointer"
                        onClick={() => setHoveredService(hoveredService === index ? null : index)}
                    >
                        {/* Header */}
                        <div className="flex items-center py-6">
                            <div className="flex w-full justify-between items-baseline gap-3">
                                <p className="font-denton italic text-sm text-black">
                                    ({service.id})
                                </p>
                                <h3 className="font-helvetica font-[500] text-xl text-black">
                                    {service.title}
                                </h3>
                            </div>
                        </div>

                        {/* Expanded Content */}
                        <AnimatePresence initial={false}>
                            {hoveredService === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                    className="overflow-hidden"
                                >
                                    <div className="pb-6">
                                        {/* Service Items */}
                                        <ul className="space-y-1 mb-4">
                                            {service.items.map((item, idx) => (
                                                <li key={idx} className="font-helvetica font-[500] text-sm text-black">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Service Image */}
                                        <div className="w-full aspect-[16/9] mb-4 overflow-hidden">
                                            <img
                                                src={
                                                    index === 0
                                                        ? "/assets/services/UX_UI.jpg"
                                                        : index === 1
                                                        ? "/assets/services/Creative.jpg"
                                                        : "/assets/services/Development.jpg"
                                                }
                                                alt={service.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Description */}
                                        <p className="font-helvetica text-sm text-black leading-tight">
                                            {service.description}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
                <h3 className="font-helvetica text-2xl md:text-5xl text-black text-center mb-12 md:mb-16">
                    Have something in mind?
                </h3>

                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6 md:space-y-8" aria-label="Contact form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name *"
                        required
                        aria-label="Your name"
                        className="w-full px-0 py-3 border-0 border-b border-black-mantle font-helvetica text-sm md:text-base text-black focus:outline-none focus:border-black bg-transparent"
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone *"
                        required
                        aria-label="Your phone number"
                        className="w-full px-0 py-3 border-0 border-b border-black-mantle font-helvetica text-sm md:text-base text-black focus:outline-none focus:border-black bg-transparent"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email *"
                        required
                        aria-label="Your email address"
                        className="w-full px-0 py-3 border-0 border-b border-black-mantle font-helvetica text-sm md:text-base text-black focus:outline-none focus:border-black bg-transparent"
                    />

                    <textarea
                        name="message"
                        placeholder="How can I help you *"
                        rows={4}
                        required
                        aria-label="Your message"
                        className="w-full px-0 py-3 border-0 border-b border-black-mantle font-helvetica text-sm md:text-base text-black focus:outline-none focus:border-black bg-transparent resize-none"
                    />

                    {submitStatus === "success" && (
                        <p className="text-center text-green-mantle font-helvetica text-sm md:text-base">Thank you! Your message has been sent.</p>
                    )}
                    {submitStatus === "error" && (
                        <p className="text-center text-tangerine font-helvetica text-sm md:text-base">Something went wrong. Please try again.</p>
                    )}

                    <div className="text-center pt-6 md:pt-8">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="cursor-pointer font-helvetica font-[500] text-black text-base md:text-xl relative inline-block pb-1 disabled:opacity-50 transition-all hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 after:w-0"
                        >
                            {isSubmitting ? "Sending..." : "Let's Discuss it"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
