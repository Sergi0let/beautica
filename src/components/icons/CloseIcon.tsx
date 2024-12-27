import { SvgProps } from "@/types/common-types";

export const CloseIcon = ({ className }: SvgProps) => {
  return (
    <svg className={className} fill="#B62121" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.75 3.328a1 1 0 00-1.415 0l-7.295 7.295-7.294-7.295a1 1 0 10-1.414 1.415l7.294 7.294-7.294 7.294a1 1 0 001.414 1.415l7.294-7.295 7.295 7.295a1 1 0 001.414-1.415l-7.294-7.294 7.294-7.294a1 1 0 000-1.415z" />
    </svg>
  );
};
