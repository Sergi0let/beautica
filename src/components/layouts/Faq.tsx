export const Faq = () => {
  return (
    <section className="wrap-primary mb-[var(--64-80)]">
      <div>
        <h2 id="faq" className="mb-[var(--24-50)] scroll-mt-16 text-center text-title text-secondary md:scroll-mt-20">
          Поширені питання
        </h2>

        <ul className="border-t border-secondary-75">
          <li className="accordion border-b border-secondary-75">
            <span className="accordion-count">01</span>
            <details className="accordion-details" name="faq-1" open>
              <summary className="accordion-summary">
                <span className="accordion-title" role="term" aria-details="faq-1">
                  Біоревіталізація шкіри гіалуроновою кислотою - базова процедура?
                </span>
              </summary>
            </details>
            <div className="accordion-content" role="definition">
              <p className="accordion-content-body">
                Інєкційна процедура біоревіталізація гіалуроновою кислотою ефективна, безпечна, а головне універсальна.
                Проводити маніпуляції можна як на обличчі, так і на тілі.
              </p>
            </div>
          </li>
          <li className="accordion border-b border-secondary-75">
            <span className="accordion-count">02</span>
            <details className="accordion-details" name="faq-1" open>
              <summary className="accordion-summary">
                <span className="accordion-title" role="term" aria-details="faq-1">
                  Натуральне омолодження. Активні компоненти?
                </span>
              </summary>
            </details>
            <div className="accordion-content" role="definition">
              <p className="accordion-content-body">
                Натуральне омолодження - це процес, який включає в себе надання допомоги тілінам, щоб відновити її
                функціонування. Активні компоненти - це компоненти, які використовуються для надання допомоги тілінам.
                Наприклад, вода, водяний пар, мікроелементи, мікроорганизми, мікрофлора, мікрофузи, мікрохлориди,
                мікроциклічні вещества, натуральні витамині, натуральні масла, натуральні міграції, натуральні порошки,
                натуральні солодкі, натуральні таблетки, натуральні угри, натуральні інгредіенти
              </p>
            </div>
          </li>
          <li className="accordion border-b border-secondary-75">
            <span className="accordion-count">03</span>
            <details className="accordion-details" name="faq-1" open>
              <summary className="accordion-summary">
                <span className="accordion-title" role="term" aria-details="faq-1">
                  Швидке відновлення. У місцях проколів можуть з&apos;явитися?
                </span>
              </summary>
            </details>
            <div className="accordion-content" role="definition">
              <p className="accordion-content-body">
                Швидке відновлення - це процес, який включає в себе надання допомоги тілінам, щоб відновити її
                функціонування. У місцях проколів можуть з&apos;явитися, але вони повинні бути виправлені в майбутньому.
                Процедура відновлення шкіри гіалуроновою кислотою включає в себе надання допомоги тілінам, використання
                активних компонентів, відновлення інтенсивності тіла, відновлення функціонування мозку, відновлення
                повітря, відновлення іншого функціонування тіла.
              </p>
            </div>
          </li>
          <li className="accordion border-b border-secondary-75">
            <span className="accordion-count">04</span>
            <details className="accordion-details" name="faq-1" open>
              <summary className="accordion-summary">
                <span className="accordion-title" role="term" aria-details="faq-1">
                  Біоревіталізація шкіри гіалуроновою кислотою - базова процедура?
                </span>
              </summary>
            </details>
            <div className="accordion-content" role="definition">
              <p className="accordion-content-body">
                Інєкційна процедура біоревіталізація гіалуроновою кислотою ефективна, безпечна, а головне універсальна.
                Проводити маніпуляції можна як на обличчі, так і на тілі.
              </p>
            </div>
          </li>
          <li className="accordion border-b border-secondary-75">
            <span className="accordion-count">05</span>
            <details className="accordion-details" name="faq-1" open>
              <summary className="accordion-summary">
                <span className="accordion-title" role="term" aria-details="faq-1">
                  Натуральне омолодження. Активні компоненти?
                </span>
              </summary>
            </details>
            <div className="accordion-content" role="definition">
              <p className="accordion-content-body">
                Натуральне омолодження - це процес, який включає в себе надання допомоги тілінам, щоб відновити її
                функціонування. Активні компоненти - це компоненти, які використовуються для надання допомоги тілінам.
                Наприклад, вода, водяний пар, мікроелементи, мікроорганизми, мікрофлора, мікрофузи, мікрохлориди,
                мікроциклічні вещества, натуральні витамині, натуральні масла, натуральні міграції, натуральні порошки,
                натуральні солодкі, натуральні таблетки, натуральні угри, натуральні інгредіенти.
              </p>
            </div>
          </li>
        </ul>

        {/* <div className="accordion">
          <details className="accardion-details" name="faq-1">
            <summary className="accardion-summary">
              <span className="accardion-title" role="term" aria-details="faq-1">
                Question 1
              </span>
            </summary>
          </details>

          <div className="accardion-content" id="faq-1" role="definition">
            <div className="accardion-body">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo ratione ipsa cum! Enim unde saepe
                eligendi, magnam quos ab sequi suscipit explicabo nihil? Nam officiis nobis debitis repudiandae, optio
                suscipit.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};
