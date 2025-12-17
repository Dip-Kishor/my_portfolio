import { useCallback } from 'react';

interface RippleOptions {
    color?: string;
    duration?: number;
}

export const useRipple = (options: RippleOptions = {}) => {
    const { color = 'rgba(255, 255, 255, 0.3)', duration = 600 } = options;

    const createRipple = useCallback((event: React.MouseEvent<HTMLElement>) => {
        const button = event.currentTarget;
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        const ripple = document.createElement('span');
        ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      border-radius: 50%;
      background: ${color};
      transform: scale(0);
      pointer-events: none;
      z-index: 1;
      animation: ripple-animation ${duration}ms linear;
    `;

        // Ensure button has relative positioning and overflow hidden
        button.style.position = 'relative';
        button.style.overflow = 'hidden';

        // Add ripple to button
        button.appendChild(ripple);

        // Remove ripple after animation
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, duration);
    }, [color, duration]);

    return createRipple;
};

// CSS-in-JS styles for the ripple animation
export const rippleStyles = `
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;

// Alternative: Ripple component wrapper
interface RippleWrapperProps {
    children: React.ReactNode;
    color?: string;
    duration?: number;
    className?: string;
}

export const RippleWrapper: React.FC<RippleWrapperProps> = ({
    children,
    color = 'rgba(255, 255, 255, 0.3)',
    duration = 600,
    className = ''
}) => {
    const createRipple = useRipple({ color, duration });

    return (
        <div
            className={`relative overflow-hidden ${className}`}
            onClick={createRipple}
            style={{ display: 'inline-block' }}
        >
            {children}
            <style jsx>{`
        @keyframes ripple-animation {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
        </div>
    );
};