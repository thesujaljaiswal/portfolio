import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

const Dock = React.forwardRef(({ className, children, direction = "middle", ...props }, ref) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      {...props}
      className={cn(
        "mx-auto flex h-16 items-end gap-4 rounded-2xl bg-slate-900/50 glass px-4 pb-3 sticky bottom-4 z-50",
        className
      )}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { mouseX });
        }
        return child;
      })}
    </motion.div>
  );
});
Dock.displayName = "Dock";

const DockIcon = ({ size = 40, magnification = 60, distance = 140, mouseX, className, children, ...props }) => {
  const ref = useRef(null);

  const distanceCalc = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distanceCalc, [-distance, 0, distance], [size, magnification, size]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full bg-slate-800/80 transition-colors hover:bg-slate-700/80 hover:text-purple-400 text-slate-400",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
DockIcon.displayName = "DockIcon";

export { Dock, DockIcon };
