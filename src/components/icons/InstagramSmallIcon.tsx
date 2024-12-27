import { SvgProps } from "@/types/common-types";

export const InstagramSmallIcon = ({ className }: SvgProps) => {
  return (
    <svg className={className} fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.58 5.417h.01m-8.76-3.75h8.334a4.167 4.167 0 014.167 4.166v8.334a4.167 4.167 0 01-4.167 4.166H5.831a4.167 4.167 0 01-4.167-4.166V5.832a4.167 4.167 0 014.167-4.167zm7.5 7.808a3.333 3.333 0 11-6.593.978 3.333 3.333 0 016.594-.978z"
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
};
