import { faqs } from "@/constants";

export const Faq = () => {
  return (
    <section className="wrap-primary mb-[var(--64-80)]">
      <div>
        <h2 id="faq" className="mb-[var(--24-50)] scroll-mt-16 text-center text-title text-secondary md:scroll-mt-20">
          Поширені питання
        </h2>

        <ul className="border-t border-secondary-75">
          {faqs["main-faq"].map(({ id, question, answer }) => (
            <li key={id} className="accordion group border-b border-secondary-75">
              <span className="accordion-count">{id < 10 ? `0${id}` : id}</span>
              <details className="accordion-details" name="faq-1">
                <summary className="accordion-summary">
                  <span className="accordion-title group-hover:text-secondary" role="term" aria-details="faq-1">
                    {question}
                  </span>
                </summary>
              </details>
              <div className="accordion-content" role="definition">
                <p className="accordion-content-body">{answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
