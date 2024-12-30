import { FacebookIcon, FacebookSmallIcon, InstagramSmallIcon } from "@/components";
import contactsData from "@/data/contacts.json";
import { cn } from "@/lib/utils";
import Image from "next/image";

type SocialsProps = {
  className?: string;
  type: "primary" | "secondary";
};

export const Socials = ({ className, type }: SocialsProps) => {
  if (type === "primary") {
    return (
      <div className={cn(className, "flex gap-4")}>
        <a
          href={contactsData.social.facebookUrl}
          aria-label="Посилання на Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon className="size-8 overflow-hidden" />
        </a>
        <a
          href={contactsData.social.instagramUrl}
          aria-label="Посилання на Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <InstagramIcon className="size-8" /> */}
          <Image src="/icons/instagram.png" alt="Instagram" width={32} height={32} />
        </a>
      </div>
    );
  }

  if (type === "secondary") {
    return (
      <div className={cn(className, "flex flex-col gap-3 md:flex-row md:gap-4")}>
        <a
          href={contactsData.social.facebookUrl}
          className="flex items-center gap-2"
          aria-label="Посилання на Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon className="hidden size-8 overflow-hidden md:block" />
          <FacebookSmallIcon className="size-5 md:hidden" />
          <span className="text-md uppercase md:hidden">facebook</span>
        </a>
        <a
          href={contactsData.social.instagramUrl}
          className="flex items-center gap-2"
          aria-label="Посилання на Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <InstagramIcon className="hidden size-8 md:block" /> */}
          <Image src="/icons/instagram.png" alt="Instagram" className="hidden size-8 md:block" width={32} height={32} />

          <InstagramSmallIcon className="size-5 md:hidden" />
          <span className="text-md uppercase md:hidden">INSTAGRAM</span>
        </a>
      </div>
    );
  }
};
