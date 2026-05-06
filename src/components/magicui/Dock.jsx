import React, { useRef } from "react";
import { cva } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

const DEFAULT_SIZE = 40;
const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

export const dockVariants = cva(
  "supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto mt-8 flex h-[58px] w-max items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-md",
);

export const Dock = React.forwardRef(function Dock(
  {
    className,
    children,
    iconSize = DEFAULT_SIZE,
    iconMagnification = DEFAULT_MAGNIFICATION,
    disableMagnification = false,
    iconDistance = DEFAULT_DISTANCE,
    direction = "middle", // "top" | "middle" | "bottom"
    ...props
  },
  ref,
) {
  const mouseX = useMotionValue(Infinity);

  const renderChildren = () =>
    React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.type === DockIcon) {
        return React.cloneElement(child, {
          ...child.props,
          mouseX,
          size: iconSize,
          magnification: iconMagnification,
          disableMagnification,
          distance: iconDistance,
        });
      }
      return child;
    });

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      {...props}
      className={cn(
        dockVariants(),
        direction === "top" && "items-start",
        direction === "middle" && "items-center",
        direction === "bottom" && "items-end",
        className,
      )}
    >
      {renderChildren()}
    </motion.div>
  );
});

export function DockIcon({
  size = DEFAULT_SIZE,
  magnification = DEFAULT_MAGNIFICATION,
  disableMagnification = false,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  ...props
}) {
  const ref = useRef(null);
  const defaultMouseX = useMotionValue(Infinity);

  const padding = Math.max(6, size * 0.2);
  const targetSize = disableMagnification ? size : magnification;

  const distanceCalc = useTransform(mouseX ?? defaultMouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return Infinity;
    return val - bounds.x - bounds.width / 2;
  });

  const sizeTransform = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [size, targetSize, size],
  );

  const scaleSize = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{
        width: scaleSize,
        height: scaleSize,
        padding,
      }}
      className={cn(
        "flex items-center justify-center rounded-2xl bg-white/10 text-white",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
DockIcon.displayName = "DockIcon";
Dock.displayName = "Dock";
