import { SvgProps } from "@/types/common-types";

export const GearSmIcon = ({ className }: SvgProps) => {
  return (
    <svg className={className} fill="#ffffff" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
      <path d="M29.75.5h6.5v65h-6.5z" />
      <path d="M.5 29.75h65v6.5H.5z" />
      <path d="M7.719 53.683L53.68 7.72l4.596 4.596L12.315 58.28z" />
      <path d="M12.32 7.72l45.962 45.963-4.596 4.596L7.724 12.317z" />
    </svg>
  );
};
