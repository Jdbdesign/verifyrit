"use client";

import { CSSProperties, ElementType, ComponentPropsWithoutRef, useState } from "react";

type HoverableOwnProps<T extends ElementType> = {
  as?: T;
  style?: CSSProperties;
  hoverStyle?: CSSProperties;
};

type HoverableProps<T extends ElementType> = HoverableOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof HoverableOwnProps<T>>;

/** Translates the source tool's `style-hover="..."` attribute into real React hover state. */
export default function Hoverable<T extends ElementType = "div">({
  as,
  style,
  hoverStyle,
  onMouseEnter,
  onMouseLeave,
  children,
  ...rest
}: HoverableProps<T>) {
  const [hover, setHover] = useState(false);
  const Tag = (as || "div") as ElementType;
  return (
    <Tag
      style={hover && hoverStyle ? { ...style, ...hoverStyle } : style}
      onMouseEnter={(e: React.MouseEvent) => {
        setHover(true);
        (onMouseEnter as ((e: React.MouseEvent) => void) | undefined)?.(e);
      }}
      onMouseLeave={(e: React.MouseEvent) => {
        setHover(false);
        (onMouseLeave as ((e: React.MouseEvent) => void) | undefined)?.(e);
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
