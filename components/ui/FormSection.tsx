import * as React from "react"

export function FormSection({ title, children, className }: { title: React.ReactNode, children: React.ReactNode, className?: string }) {
    return (
        <div className={`mb-10 ${className || ''}`}>
            <h2 className="text-xl text-[#000080] font-bold bg-blue-100 p-2 rounded-lg px-4 mb-6">{title}</h2>
            {children}
        </div>
    )
}
