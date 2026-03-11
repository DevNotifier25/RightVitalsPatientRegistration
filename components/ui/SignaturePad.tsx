"use client"

import React, { useRef, useState, useImperativeHandle, forwardRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Button } from './Button';

export interface SignaturePadHandle {
    clear: () => void;
    getSignature: () => string | null;
    isEmpty: () => boolean;
}

interface SignaturePadProps {
    onEnd?: () => void;
}

export const SignaturePad = forwardRef<SignaturePadHandle, SignaturePadProps>(({ onEnd }, ref) => {
    const sigCanvas = useRef<SignatureCanvas>(null);
    const [hasStarted, setHasStarted] = useState(false);

    useImperativeHandle(ref, () => ({
        clear: () => {
            sigCanvas.current?.clear();
            setHasStarted(false);
        },
        getSignature: () => {
            if (sigCanvas.current?.isEmpty()) return null;
            return sigCanvas.current?.getTrimmedCanvas().toDataURL('image/png') || null;
        },
        isEmpty: () => {
            return sigCanvas.current?.isEmpty() ?? true;
        }
    }));

    return (
        <div className="flex flex-col items-start gap-2 w-full max-w-lg">
            <div className="relative w-full border-2 border-slate-300 rounded-lg bg-white overflow-hidden shadow-sm">
                <SignatureCanvas
                    ref={sigCanvas}
                    canvasProps={{
                        className: 'w-full h-40 cursor-crosshair touch-none',
                    }}
                    onBegin={() => setHasStarted(true)}
                    onEnd={onEnd}
                    penColor="#0f172a"
                />
                {!hasStarted && (
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-slate-300 font-light select-none">
                        Draw your signature here
                    </div>
                )}
            </div>
            <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => {
                    sigCanvas.current?.clear();
                    setHasStarted(false);
                }}
                className="rounded-full h-8 px-4 text-xs font-semibold text-slate-500 hover:bg-slate-100 border-none bg-slate-50 shadow-sm"
            >
                <span className="mr-1">↺</span> Clear
            </Button>
        </div>
    );
});

SignaturePad.displayName = 'SignaturePad';
