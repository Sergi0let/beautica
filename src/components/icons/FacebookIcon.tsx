import { SvgProps } from "@/types/common-types";

export const FacebookIcon = ({ className }: SvgProps) => {
  return (
    <svg className={className} fill="none" viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg">
      <rect height="32" width="33" fill="#fff" rx="6" />
      <g clipPath="url(#a)">
        <path
          d="M17.626 32H1.821C.815 32 0 31.21 0 30.234V1.766C0 .791.815 0 1.821 0H31.18C32.185 0 33 .79 33 1.766v28.468c0 .975-.816 1.766-1.821 1.766h-8.41V19.608h4.29l.642-4.83H22.77v-3.083c0-1.398.4-2.351 2.468-2.351l2.637-.001v-4.32c-.456-.058-2.022-.19-3.843-.19-3.802 0-6.406 2.25-6.406 6.384v3.561h-4.3v4.83h4.3V32z"
          fill="#4460A0"
          fillRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <rect height="32" width="33" fill="#fff" rx="6" />
        </clipPath>
      </defs>
    </svg>
  );
};
