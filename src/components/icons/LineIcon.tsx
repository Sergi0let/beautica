import { SvgProps } from "@/types/common-types";

export const LineIcon = ({ className }: SvgProps) => {
  return (
    <svg className={className} fill="none" stroke="#1D1D1D" viewBox="0 0 24 2" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.336 1h21.333" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
};
