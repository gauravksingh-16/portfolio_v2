"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import { MagnifyingGlassMinus, MagnifyingGlassPlus, ShareNetwork, Check, X } from "@phosphor-icons/react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFPopoverProps {
    pdfUrl: string;
    experimentId: string;
    onClose: () => void;
    title?: string;
}

export default function PDFPopover({ pdfUrl, experimentId, onClose, title }: PDFPopoverProps) {
    const [numPages, setNumPages] = useState<number>(0);
    const [scale, setScale] = useState<number>(1.0);
    const [copied, setCopied] = useState(false);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    const zoomIn = () => setScale(prev => Math.min(2.0, prev + 0.2));
    const zoomOut = () => setScale(prev => Math.max(0.5, prev - 0.2));

    const handleShare = async () => {
        const shareUrl = `${window.location.origin}/experiments/${experimentId}`;
        console.log('Sharing URL:', shareUrl); // Debug log
        try {
            await navigator.clipboard.writeText(shareUrl);
            console.log('URL copied successfully!'); // Debug log
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        } catch (err) {
            console.error('Failed to copy:', err);
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = shareUrl;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                console.log('URL copied using fallback method!'); // Debug log
                setCopied(true);
                setTimeout(() => setCopied(false), 2500);
            } catch (fallbackErr) {
                console.error('Fallback copy failed:', fallbackErr);
            }
            document.body.removeChild(textArea);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="relative bg-white rounded-lg w-full max-w-5xl h-[95vh] md:h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-4 md:px-8 py-3 md:py-6 border-b border-black-mantle">
                    <h3 className="font-helvetica text-base md:text-2xl font-[500] truncate pr-2">
                        <span className="font-denton font-medium italic">(pdf)</span> {title || 'Document'}
                    </h3>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
                        aria-label="Close PDF viewer"
                    >
                        <X size={20} weight="bold" />
                    </button>
                </div>

                {/* Custom Controls */}
                <div className="flex items-center justify-between px-4 md:px-8 py-2 md:py-3 border-b border-black-mantle bg-white">
                    <span className="font-helvetica text-xs md:text-sm">
                        <span className="font-denton italic">({numPages}</span> pages<span className="font-denton italic">)</span>
                    </span>

                    <div className="flex items-center gap-1 md:gap-4">
                        {/* Share Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleShare();
                            }}
                            className="flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 md:py-2 hover:bg-gray-100 transition-all"
                            aria-label="Share"
                        >
                            {copied ? (
                                <Check size={14} weight="bold" className="md:w-4 md:h-4" />
                            ) : (
                                <ShareNetwork size={14} weight="bold" className="md:w-4 md:h-4" />
                            )}
                            <span className="font-helvetica text-xs md:text-sm hidden sm:inline">
                                {copied ? (
                                    <>COPIED</>
                                ) : (
                                    <>SHARE</>
                                )}
                            </span>
                        </button>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-6 bg-black-mantle" />

                        {/* Zoom Controls */}
                        <button
                            onClick={zoomOut}
                            disabled={scale <= 0.5}
                            className="p-1 md:p-2 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            aria-label="Zoom out"
                        >
                            <MagnifyingGlassMinus size={16} weight="bold" className="md:w-5 md:h-5" />
                        </button>
                        <span className="font-helvetica text-xs md:text-sm min-w-[40px] md:min-w-[60px] text-center">
                            {Math.round(scale * 100)}%
                        </span>
                        <button
                            onClick={zoomIn}
                            disabled={scale >= 2.0}
                            className="p-1 md:p-2 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            aria-label="Zoom in"
                        >
                            <MagnifyingGlassPlus size={16} weight="bold" className="md:w-5 md:h-5" />
                        </button>
                    </div>
                </div>

                {/* PDF Viewer - Scrollable */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-100">
                    <div className="flex flex-col items-center gap-2 md:gap-4">
                        <Document
                            file={pdfUrl}
                            onLoadSuccess={onDocumentLoadSuccess}
                            loading={
                                <div className="font-helvetica text-xs md:text-sm text-black-mantle py-8">
                                    <span className="font-denton italic">(loading)</span> Loading PDF...
                                </div>
                            }
                            error={
                                <div className="font-helvetica text-xs md:text-sm text-tangerine py-8">
                                    <span className="font-denton italic">(error)</span> Failed to load PDF
                                </div>
                            }
                        >
                            {Array.from(new Array(numPages), (_, index) => (
                                <Page
                                    key={`page_${index + 1}`}
                                    pageNumber={index + 1}
                                    width={typeof window !== 'undefined' && window.innerWidth < 768 ? window.innerWidth - 48 : undefined}
                                    scale={scale}
                                    renderTextLayer={true}
                                    renderAnnotationLayer={true}
                                    className="shadow-sm md:shadow-lg !max-w-full"
                                />
                            ))}
                        </Document>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
