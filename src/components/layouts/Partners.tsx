import { BtnOrLink, StarIcon } from "@/components";
import Image from "next/image";
import Link from "next/link";

export const Partners = () => {
  return (
    <section className="wrap-primary mb-[var(--64-120)]">
      <div>
        <header className="flex-center mb-[var(--24-35)] flex-col-reverse gap-4 md:grid md:grid-cols-3 md:gap-5">
          <div className="flex-between md:flex-center w-full md:gap-[var(--8-16)] md:justify-self-start">
            <StarIcon className="size-6" />
            <p className="text-center text-txt-16-20 font-semibold leading-tight text-secondary">
              У своїй роботі я використовую
              <br /> косметику цих брендів
            </p>
            <StarIcon className="size-6" />
          </div>
          <div className="flex-center">
            <h2 id="partners" className="scroll-mt-16 text-center text-title text-secondary md:scroll-mt-20">
              Наші партнери
            </h2>
          </div>
          <div className="md:flex-center hidden w-4/5 justify-self-end">
            <BtnOrLink title="В магазин" />
          </div>
        </header>

        <ul className="partners-list">
          {Array.from({ length: 8 }).map((_, index) => (
            <li key={index} className="partners-list_item">
              {index === 3 || index === 5 ? (
                <div className="partners-list_deco" />
              ) : (
                <Link href="#" className="partners-list_link">
                  <Image
                    className="partners-list_img"
                    src="/products/product_placeholder.png"
                    alt="product placehoder"
                    width={234}
                    height={64}
                  />
                </Link>
              )}
            </li>
          ))}
        </ul>

        <footer className="flex-center mt-6 md:hidden">
          <BtnOrLink title="В магазин" />
        </footer>
      </div>
    </section>
  );
};
