import { SvgProps } from "@/types/common-types";

export const FacebookSmallIcon = ({ className }: SvgProps) => {
  return (
    <svg className={className} fill="none" viewBox="0 0 12 20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.003 1.667h-2.5a4.167 4.167 0 00-4.167 4.166v2.5h-2.5v3.333h2.5v6.667h3.333v-6.666h2.5l.834-3.334H7.669v-2.5A.833.833 0 018.503 5h2.5V1.667z"
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
};
