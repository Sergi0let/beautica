import { LocationIcon, PhoneIcon } from "@/components";
import contactsData from "@/data/contacts.json";
import { cn } from "@/lib/utils";

type ContactsProps = {
  type: "primary" | "secondary";
  classsName?: string;
};

export const Contacts = ({ type = "primary", classsName }: ContactsProps) => {
  const isPrimary = type === "primary";
  const classText = isPrimary ? "text-primary" : "text-white";
  const classIcon = isPrimary ? "fill-secondary" : "fill-white";

  return (
    <div className={cn(classsName, classText, "flex md:gap-8")}>
      <a
        href={`tel:${contactsData.contacts.phone
          .split("")
          .filter((char) => !("-" === char || ")" === char || "(" === char || " " === char))
          .join("")}`}
        className="group relative flex items-center gap-2 overflow-hidden"
        aria-label="Перезвони нам"
      >
        <PhoneIcon className={cn(classIcon, "size-5")} />
        <span className={cn("text-nowrap", type === "primary" && "transition-all group-hover:text-secondary")}>
          {contactsData.contacts.phone}
        </span>
        {type === "secondary" && (
          <div className="absolute bottom-0 right-full h-px w-full transition-all group-hover:right-0"></div>
        )}
      </a>
      <div className="flex items-center gap-2">
        <LocationIcon className={cn(classIcon, "size-5")} />
        <span className="text-nowrap">{contactsData.contacts.address}</span>
      </div>
    </div>
  );
};
