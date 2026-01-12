import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-slate-900 border border-orange-500/30 rounded-lg p-6 max-w-lg w-full shadow-2xl relative"
                onClick={e => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold text-orange-500 mb-4 uppercase tracking-wider">
                    {title}
                </h2>

                <div className="text-slate-300">
                    {children}
                </div>

                <button
                    onClick={onClose}
                    className="mt-6 w-full py-2 bg-orange-600 hover:bg-orange-500 text-white rounded font-bold uppercase transition-colors"
                >
                    Close
                </button>
            </div>
        </div>
    );
}
