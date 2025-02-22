import { servicesData } from "@/constants";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CustomCursor } from "../elements";

export const Services = () => {
  return (
    <section className="relative my-8">
      <div className="wrap-primary">
        <h2
          id="services"
          className="scroll-mt-16 text-center text-title leading-none md:scroll-mt-20 lg:flex lg:text-left"
        >
          <span className="hidden w-1/3 lg:block"></span>
          <span className="block -translate-x-4 text-secondary lg:translate-x-2">Ми робимо</span>
        </h2>
      </div>
      <CustomCursor />
      <ul id="services-section" className="mt-[var(--20-26)] border-b border-secondary-75">
        {servicesData.map((service, index) => (
          <li key={index} className="service-item group">
            <Link href={service.pageUrl}>
              <div className="service-item-link-mob">
                <ArrowUpRight size={16} />
              </div>
              <div className="wrap-primary">
                <div className="flex border-t border-secondary-75">
                  <div className="service-icon md:group-hover:scale-100">
                    <figure>
                      <Image src={service.imgUrl} alt={service.name} width={372} height={448} />
                    </figure>
                  </div>

                  <div className="service-content">
                    <h3 className="md:group-hover:text-white">{service.name}</h3>
                    <p className="md:md:group-hover:text-white">від {service.price}грн</p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
