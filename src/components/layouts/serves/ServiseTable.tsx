import { InfoIcon } from "@/components/icons";
import { discountPercentage, formatPrice } from "@/lib/utils";
import { PriceTable } from "@/types/common-types";
import { ChevronDown, MoveDown } from "lucide-react";
import Image from "next/image";

type ServiseTableProps = {
  priceTable: PriceTable[];
  name: string;
};

export const ServiseTable = ({ priceTable, name }: ServiseTableProps) => {
  const priceName = {
    Ботулінотерапія: "Ботулінотерапію",
    Біоревіталізація: "Біоревіталізацію",
    "Контурна пластика губ": "Контурну пластику губ",
    Мезотерапія: "Мезотерапію",
    "Контурна пластика обличчя": "Контурну пластику обличчя",
  };

  return (
    <section className="wrap-primary mb-10 md:mb-20">
      <div className="md:translate-x-[50px]">
        <h2 id="pricing" className="scroll-mt-16 text-center text-title leading-none text-secondary md:scroll-mt-20">
          Ціни на {priceName[name as keyof typeof priceName]}
        </h2>
      </div>
      <div>
        <ul className="mt-[var(--24-35)] border-t border-secondary-75">
          {priceTable.map(({ id, title, imgUrl, description, prices }, index) => (
            <li
              key={id}
              data-fade
              style={{ animationDelay: `0.${(index + 1) * 5}s` }}
              className="accordion-service group border-b border-secondary-75"
            >
              <details name="service-1" className="peer">
                <summary>
                  <span className="block py-6 group-hover:text-secondary" role="term" aria-details="service-1">
                    {title}
                  </span>
                  <MoveDown className="accordion-service-arrow" />
                </summary>
              </details>
              <div className="accordion-service-content" role="definition">
                <div className="accordion-service-content-body">
                  <div className="accardion-drug mb-4 lg:mx-auto lg:p-5">
                    <details className="" name="drug-1">
                      <summary className="flex justify-start">
                        <InfoIcon className="w-5" />
                        <span className="!px-2 !text-base font-semibold" role="term" aria-details="drug-1">
                          Про препарат {title}
                        </span>
                        <ChevronDown className="accardion-drug-arrow text-secondary" />
                      </summary>
                    </details>
                    <div
                      className="accardion-drug_content mx-auto mt-2 flex max-w-[335px] flex-col bg-secondary-50"
                      role="definition"
                    >
                      <div className="accardion-drug_content-body">
                        <figure className="px-4 pt-4">
                          <div>
                            <Image
                              src={imgUrl}
                              alt={title}
                              className="size-full object-cover"
                              width={303}
                              height={160}
                            />
                          </div>
                          <figcaption className="mt-5 text-2xl font-bold">{title}</figcaption>
                        </figure>
                        <p className="p-4 pt-2">{description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="table-price">
                    <table>
                      <thead>
                        <tr>
                          <th>Зона обличчя</th>
                          <th>Ціна, грн</th>
                        </tr>
                      </thead>
                      <tbody>
                        {prices.listingPrice.map(({ id, title, price, newPrice }) => (
                          <tr key={id}>
                            <td>
                              {title}{" "}
                              {newPrice && (
                                <span className="ml-3 rounded bg-accent px-[10px] py-[6px] text-base font-bold">{`-${discountPercentage(price, newPrice)}%`}</span>
                              )}
                            </td>
                            <td>
                              {formatPrice(newPrice ? newPrice : price)}{" "}
                              {newPrice && <span>{formatPrice(newPrice)}</span>}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
