import React from "react";
import { cn } from "../../lib/utils";

export const ShimmerButton = React.forwardRef(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "100px",
      background = "rgba(0, 0, 0, 1)",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        style={{
          "--spread": "90deg",
          "--shimmer-color": shimmerColor,
          "--radius": borderRadius,
          "--speed": shimmerDuration,
          "--cut": shimmerSize,
          "--bg": background,
        }}
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white transition-all transform-gpu [background:var(--bg)] [border-radius:var(--radius)]",
          "hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(124,58,237,0.3)] duration-300",
          className
        )}
        ref={ref}
        {...props}
      >
        <div
          className={cn(
            "-z-30 blur-[2px]",
            "absolute inset-0 overflow-visible [container-type:size]"
          )}
        >
          <div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
            <div className="absolute inset-[-100%] w-auto rotate-0 group-hover:animate-spin [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0] group-hover:[animate:spin_2s_linear_infinite]" />
          </div>
        </div>
        <div
           className="absolute inset-[var(--cut)] -z-20 rounded-[calc(var(--radius)-var(--cut))] bg-slate-900 shadow-[inset_0_0_20px_rgba(139,92,246,0.3)]"
        />
        <div className="relative z-10 font-medium">{children}</div>
      </button>
    );
  }
);
ShimmerButton.displayName = "ShimmerButton";
