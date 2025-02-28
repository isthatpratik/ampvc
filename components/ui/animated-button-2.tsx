import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}
const AnimatedButtonTwo = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative flex items-center gap-4 rounded-full bg-[#414947] px-1 py-1 transition-all duration-300 hover:bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] hover:from-[#FCEC3B] hover:via-[#FFAFDF] hover:to-[#99DBE0]",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-4 transition-transform duration-300">
          <span className="h-11 w-11 flex-shrink-0 rounded-full bg-white group-hover:bg-black flex items-center justify-center transition-all duration-300 group-hover:translate-x-[calc(100%+6.2rem)]">
            <ArrowUpRight 
              className="h-5 w-5 transition-all duration-300 group-hover:rotate-45 text-black group-hover:text-white" 
              strokeWidth={2}
            />
          </span>
          <span className="z-999 text-body-3 lg:text-body-2 -translate-x-[0.5rem] font-medium group-hover:-translate-x-[calc(40%)] transition-all group-hover:text-black duration-300">{children}</span>
        </div>
      </button>
    );
  }
);

AnimatedButtonTwo.displayName = 'AnimatedButton';

export default AnimatedButtonTwo;