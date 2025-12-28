"use client"
import React, { ReactNode, MouseEventHandler, useState } from 'react';
import { useRipple } from '@/components/helper/RippleEffect';

type Variant = 'primary' | 'secondary' | 'third';
type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
type ButtonType = 'button' | 'submit' | 'reset';
interface CustomButtonProps {
    children: ReactNode;
    variant?: Variant;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    loading?: boolean;
    disabled?: boolean;
    className?: string;
    title?: string;
    tooltipPosition?: TooltipPosition;
    tooltipDelay?: number;
    enableRipple?: boolean;
    rippleColor?: string;
    rippleDuration?: number;
    type?: ButtonType; 
}

const variants: Record<Variant, string> = {
    primary: "bg-[#fd6f00] border-none px-2 py-2 rounded-md text-white font-semibold cursor-pointer transition-all duration-300 ease-in-out shadow-[0_4px_15px_rgba(253,111,0,0.3)] flex items-center justify-center gap-2 min-w-[100px] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(253,111,0,0.4)]",
    secondary: "bg-cards  border border-[rgba(255,255,255,0.2)] px-2 py-2 rounded-md font-semibold cursor-pointer transition-all duration-300 ease-in-out flex items-center justify-center gap-2 min-w-[150px] hover:bg-[rgba(102,126,234,0.3)] hover:-translate-y-0.5",
    third: "bg-[rgba(102,126,234,0.2)] text-[#667eea] border border-[rgba(102,126,234,0.3)] px-2 py-2 rounded-md font-semibold cursor-pointer transition-all duration-300 ease-in-out flex items-center justify-center gap-2 min-w-[100px] hover:bg-[rgba(102,126,234,0.3)] hover:-translate-y-0.5"
};

const tooltipPositions: Record<TooltipPosition, string> = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
};

const tooltipArrows: Record<TooltipPosition, string> = {
    top: 'top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800',
    bottom: 'bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-gray-800',
    left: 'left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800',
    right: 'right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-800'
};

const CustomButton: React.FC<CustomButtonProps> = ({
    children,
    variant = 'primary',
    type = 'button', 
    title,
    tooltipPosition = 'top',
    tooltipDelay = 500,
    onClick,
    loading = false,
    disabled = false,
    className = '',
    enableRipple = true,
    rippleColor = 'rgba(255, 255, 255, 0.3)',
    rippleDuration = 600,
    ...rest
}) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    const createRipple = useRipple({
        color: rippleColor,
        duration: rippleDuration
    });

    const handleMouseEnter = () => {
        if (title) {
            const id = setTimeout(() => {
                setShowTooltip(true);
            }, tooltipDelay);
            setTimeoutId(id);
        }
    };

    const handleMouseLeave = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
        setShowTooltip(false);
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!loading && !disabled) {
            // Create ripple effect if enabled
            if (enableRipple) {
                createRipple(e);
            }

            // Call the original onClick handler
            if (onClick) {
                onClick(e);
            }
        }
    };

    return (
        <>
            {/* Add global styles for ripple animation */}
            <style jsx global>{`
                @keyframes ripple-animation {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `}</style>

            <div className={`relative ${className}`}>
                <button
                    onClick={handleClick}
                    type={type}
                    disabled={disabled || loading}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className={`
                        py-1 px-3 rounded-md text-white font-semibold cursor-pointer relative overflow-hidden
                        ${variants[variant] || variants.primary}
                        hover:brightness-110
                        ${loading || disabled ? 'cursor-not-allowed opacity-70' : ''}
                        ${className}
                    `}
                    {...rest}
                >
                    {loading ? (
                        <div className="button-loader !relative !top-0 w-[24px] h-[24px] border-[3px] border-t-white rounded-full animate-spin"></div>
                    ) : (
                        children
                    )}
                </button>

                {/* Custom Tooltip */}
                {title && showTooltip && (
                    <div className={`
                        absolute ${tooltipPositions[tooltipPosition]} 
                        px-2 py-1 text-xs text-white bg-gray-800 rounded 
                        transition-opacity duration-200 pointer-events-none 
                        whitespace-nowrap z-50 shadow-lg
                    `}>
                        {title}
                        <div className={`absolute ${tooltipArrows[tooltipPosition]}`}></div>
                    </div>
                )}
            </div>
        </>
    );
};

export default CustomButton;