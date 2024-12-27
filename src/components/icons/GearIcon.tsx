import { SvgProps } from "@/types/common-types";

export const GearIcon = ({ className }: SvgProps) => {
  return (
    <svg
      className={className}
      width="180"
      height="180"
      viewBox="0 0 180 180"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="85" width="10" height="180" />
      <rect y="85" width="180" height="10" />
      <rect
        x="29.8984"
        y="22.825"
        width="180"
        height="10"
        transform="rotate(45 29.8984 22.825)"
      />
      <rect
        x="157.18"
        y="29.896"
        width="180"
        height="10"
        transform="rotate(135 157.18 29.896)"
      />
    </svg>
  );
};
