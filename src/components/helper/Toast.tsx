'use client'
import React, { useEffect, useState, useRef } from 'react'
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react'

export type ToastType = 'success' | 'error' | 'neutral'

interface ToastProps {
    message: string
    type: ToastType
    onClose: () => void
    duration?: number
}

const Toast = ({ message, type, onClose, duration = 3000 }: ToastProps) => {
    const [progress, setProgress] = useState(100)
    const [isPaused, setIsPaused] = useState(false)
    const timerRef = useRef<NodeJS.Timeout | null>(null)
    const startTimeRef = useRef<number>(Date.now())
    const remainingTimeRef = useRef<number>(duration)

    const colors = {
        success: 'border-green-500/50 bg-[#1a1a1a] text-green-500',
        error: 'border-red-500/50 bg-[#1a1a1a] text-red-500',
        neutral: 'border-orange-500/50 bg-[#1a1a1a] text-orange-500',
    }

    const barColors = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        neutral: 'bg-orange-500',
    }

    useEffect(() => {
        if (!isPaused) {
            const step = 10 // Update every 10ms
            timerRef.current = setInterval(() => {
                remainingTimeRef.current -= step
                const newProgress = (remainingTimeRef.current / duration) * 100
                setProgress(newProgress)

                if (remainingTimeRef.current <= 0) {
                    onClose()
                }
            }, step)
        } else {
            if (timerRef.current) clearInterval(timerRef.current)
        }

        return () => {
            if (timerRef.current) clearInterval(timerRef.current)
        }
    }, [isPaused, onClose, duration])

    return (
        <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className={`fixed top-10 right-5 z-[100] min-w-[320px] overflow-hidden rounded-xl border shadow-2xl transition-all duration-300 animate-in slide-in-from-right-full ${colors[type]}`}
        >
            {/* Progress Bar - Moving Right to Left */}
            <div
                className={`absolute top-0 right-0 h-[3px] transition-none ${barColors[type]}`}
                style={{ width: `${progress}%` }}
            />

            <div className="flex items-center gap-4 p-5">
                {type === 'success' && <CheckCircle2 size={24} />}
                {type === 'error' && <AlertCircle size={24} />}
                {type === 'neutral' && <Info size={24} />}

                <div className="flex-1">
                    {/* <p className="text-sm font-bold text-white uppercase tracking-wider">{type}</p> */}
                    <p className="text-sm font-bold text-white uppercase tracking-wider"></p>
                    <p className="text-gray-400 text-sm">{message}</p>
                </div>

                <button onClick={onClose} className="hover:rotate-90 transition-transform">
                    <X size={18} className="text-gray-500" />
                </button>
            </div>
        </div>
    )
}

export default Toast