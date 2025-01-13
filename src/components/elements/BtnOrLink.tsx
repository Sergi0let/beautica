"use client";

import { StarIcon } from "@/components";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRef } from "react";

type MouseEventProps = React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>;
type MouseEventHandler = (e: MouseEventProps) => void;

type BtnOrLinkProps = {
  title?: string;
  className?: string;
  to?: string;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler;
};

export const BtnOrLink = ({
  title = "Текст кнопки",
  className = "",
  to = "",
  onClick,
  type = "button",
}: BtnOrLinkProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleRippleEffect = (e: MouseEventProps) => {
    if (!buttonRef || !linkRef) {
      return;
    }
    const button = to ? linkRef.current : buttonRef.current;
    const rect = button!.getBoundingClientRect();
    const ripple = document.createElement("span");

    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = "ripple-effect";

    button!.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 300);
  };

  const handleClick = (e: MouseEventProps) => {
    if (onClick) {
      onClick(e);
    }
    handleRippleEffect(e);
  };

  const baseStyles = cn("btn relative overflow-hidden group duration-500 ease-in-out", className);

  const content = (
    <>
      <StarIcon className="size-[var(--16-24)] fill-primary transition-transform group-hover:-translate-x-2 group-hover:-rotate-180" />
      <span className="md:ml-[10:px] ml-2 text-btn">{title}</span>
    </>
  );

  if (to) {
    return (
      <Link
        data-delay-four
        data-fade
        href={to || ""}
        aria-label={to || ""}
        className={baseStyles}
        onClick={handleClick}
        ref={linkRef}
      >
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={baseStyles} onClick={handleClick} ref={buttonRef}>
      {content}
    </button>
  );
};
