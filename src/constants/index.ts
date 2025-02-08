import { beforAfterDataType, NavMenuListType, ServicesRoute, TestimonialType } from "@/types/common-types";

export const servesTitle = {
  [ServicesRoute.Botulinoterapia]: "Ботулінотерапія",
  [ServicesRoute.Biorevitalizatsiya]: "Біоревтіалізація",
  [ServicesRoute.KonturnaPlastikaGubu]: "Контурна плістика губи",
  [ServicesRoute.Mezoterapia]: "Мезотерапія",
  [ServicesRoute.KonturnaPlastikaOblicha]: "Контурна плістика (обличчя)",
};

export const servicesData = [
  {
    id: 1,
    name: servesTitle[ServicesRoute.Botulinoterapia],
    price: 3200,
    imgUrl: "/services/botolin.webp",
    pageUrl: ServicesRoute.Botulinoterapia,
    description:
      "Ботулінотерапія дарує видимий омолоджуючий ефект без хірургічного втручання. Ін'єкції краси розгладжують мімічні та кисетні зморшки, знімають гіпертонус м’язів, даруючи шкірі свіжий вигляд.",
    stages: [
      {
        id: 1,
        title: "Консультація з лікарем-косметологом",
        description:
          "Під час консультації лікар оцінює стан шкіри, визначає проблемні зони та обговорює можливі результати процедури. Також обговорюються ризики та протипоказання.",
      },
      {
        id: 2,
        title: "Підготовка до введення ін'єкцій",
        description:
          "Шкіра очищується та дезінфікується, визначаються точки введення препарату, щоб забезпечити оптимальний результат.",
      },
      {
        id: 3,
        title: "Введення ін'єкцій ботулотоксину",
        description:
          "Процедура виконується за допомогою тонких голок, які вводять препарат у визначені точки. Процедура триває 10-20 хвилин і майже безболісна.",
      },
      {
        id: 4,
        title: "Рекомендації після процедури",
        description:
          "Після процедури пацієнту надаються рекомендації щодо догляду за шкірою, щоб забезпечити найкращі результати та уникнути побічних ефектів.",
      },
    ],
    priceTable: [
      {
        id: 1,
        title: "Botox (США)",
        imgUrl: "/drugs/botox.webp",
        description:
          "Botox - це сертифікований препарат, який використовується для розслаблення м'язів обличчя, що допомагає усунути зморшки та попередити їх появу.",
        prices: {
          listingPrice: [
            {
              id: 1,
              title: "Лоб - міжбрів’я",
              price: 4700,
              newPrice: null,
            },
            {
              id: 2,
              title: "Лоб - міжбрів’я - очі",
              price: 6900,
              newPrice: null,
            },
            {
              id: 3,
              title: "Міжбрів’я",
              price: 3500,
              newPrice: 2500,
            },
            {
              id: 4,
              title: "Очі",
              price: 2500,
              newPrice: null,
            },
            { id: 5, title: "Кролячі зморшки (носик)", price: 2500, newPrice: 2000 },
            { id: 6, title: "Звуження крил та серединки носика", price: 2000, newPrice: null },
            { id: 7, title: "Ясенна посмішка", price: 2500, newPrice: null },
            { id: 8, title: "Зморшки маріонетки (опущення кутів рота)", price: 2000, newPrice: null },
            { id: 9, title: "Підборіддя", price: 2000, newPrice: null },
            { id: 10, title: "Платизма (шия)", price: 6500, newPrice: null },
            { id: 11, title: "Гіпергідроз (підвищена пітливість)", price: 8300, newPrice: null },
            { id: 12, title: "Все обличчя (full face)", price: 11900, newPrice: null },
          ],
        },
      },
      {
        id: 2,
        title: "Dysport (Франція)",
        imgUrl: "/drugs/disport.webp",
        description:
          "Dysport - це високоякісний препарат, який використовується для корекції мімічних зморшок, забезпечуючи природний вигляд. Ефект триває до 6 місяців.",
        prices: {
          listingPrice: [
            {
              id: 1,
              title: "Лоб - міжбрів’я",
              price: 4700,
              newPrice: null,
            },
            {
              id: 2,
              title: "Лоб - міжбрів’я - очі",
              price: 6900,
              newPrice: null,
            },
            {
              id: 3,
              title: "Міжбрів’я",
              price: 3500,
              newPrice: 2500,
            },
            {
              id: 4,
              title: "Очі",
              price: 2500,
              newPrice: null,
            },
            { id: 5, title: "Кролячі зморшки (носик)", price: 2500, newPrice: null },
            { id: 6, title: "Звуження крил та серединки носика", price: 2000, newPrice: null },
            { id: 7, title: "Ясенна посмішка", price: 2500, newPrice: null },
            { id: 8, title: "Зморшки маріонетки (опущення кутів рота)", price: 2000, newPrice: null },
            { id: 9, title: "Підборіддя", price: 2000, newPrice: null },
            { id: 10, title: "Платизма (шия)", price: 6500, newPrice: null },
            { id: 11, title: "Гіпергідроз (підвищена пітливість)", price: 8300, newPrice: null },
            { id: 12, title: "Все обличчя (full face)", price: 11900, newPrice: null },
          ],
        },
      },
      {
        id: 3,
        title: "Xeomin (Німеччина)",
        imgUrl: "/drugs/xenomin.avif",
        description:
          "Ксеомін (Xeomin), створений компанією Merz у Німеччині, виділяється завдяки своєму високому рівню очищення. Цей препарат містить чистий ботулотоксин типу А, що забезпечує низку унікальних переваг. Саме тому Ксеомін стає вибором багатьох зірок кіно та шоу-бізнесу.",
        prices: {
          listingPrice: [
            {
              id: 1,
              title: "Лоб - міжбрів’я",
              price: 4700,
              newPrice: null,
            },
            {
              id: 2,
              title: "Лоб - міжбрів’я - очі",
              price: 6900,
              newPrice: null,
            },
            {
              id: 3,
              title: "Міжбрів’я",
              price: 3500,
              newPrice: 2500,
            },
            {
              id: 4,
              title: "Очі",
              price: 2500,
              newPrice: null,
            },
            { id: 5, title: "Кролячі зморшки (носик)", price: 2500, newPrice: null },
            { id: 6, title: "Звуження крил та серединки носика", price: 2000, newPrice: null },
            { id: 7, title: "Ясенна посмішка", price: 2500, newPrice: null },
            { id: 8, title: "Зморшки маріонетки (опущення кутів рота)", price: 2000, newPrice: null },
            { id: 9, title: "Підборіддя", price: 2000, newPrice: null },
            { id: 10, title: "Платизма (шия)", price: 6500, newPrice: null },
            { id: 11, title: "Гіпергідроз (підвищена пітливість)", price: 8300, newPrice: null },
            { id: 12, title: "Все обличчя (full face)", price: 11900, newPrice: null },
          ],
        },
      },
      {
        id: 4,
        title: "Lantox (Китай)",
        imgUrl: "/drugs/lantox.webp",
        description:
          "Lantox - доступний препарат ботулотоксину, який ефективно розгладжує зморшки та зменшує гіперактивність м'язів обличчя.",
        prices: {
          listingPrice: [
            {
              id: 1,
              title: "Лоб - міжбрів’я",
              price: 3000,
              newPrice: null,
            },
            {
              id: 2,
              title: "Лоб - міжбрів’я - очі",
              price: 4300,
              newPrice: null,
            },
            {
              id: 3,
              title: "Міжбрів’я",
              price: 1700,
              newPrice: null,
            },
            {
              id: 4,
              title: "Очі",
              price: 1700,
              newPrice: null,
            },
            { id: 5, title: "Кролячі зморшки (носик)", price: 1500, newPrice: null },
            { id: 6, title: "Звуження крил та серединки носика", price: 1500, newPrice: null },
            { id: 7, title: "Ясенна посмішка", price: 1500, newPrice: null },
            { id: 8, title: "Зморшки маріонетки (опущення кутів рота)", price: 1500, newPrice: null },
            { id: 9, title: "Підборіддя", price: 1500, newPrice: null },
            { id: 10, title: "Платизма (шия)", price: 5000, newPrice: null },
            { id: 11, title: "Гіпергідроз (підвищена пітливість)", price: 5000, newPrice: null },
            { id: 12, title: "Все обличчя (full face)", price: 9000, newPrice: null },
          ],
        },
      },
    ],
  },
  {
    id: 2,
    name: servesTitle[ServicesRoute.Biorevitalizatsiya],
    price: 3200,
    imgUrl: "/services/2.webp",
    pageUrl: ServicesRoute.Biorevitalizatsiya,
    description:
      "Біоревіталізація забезпечує глибоке зволоження шкіри, покращує її текстуру, повертає пружність та здоровий блиск. Це ідеальне рішення для боротьби з ознаками старіння",
    stages: [
      {
        id: 1,
        title: "Консультація та аналіз стану шкіри",
        description:
          "Лікар визначає потребу у процедурі та обирає відповідний препарат, виходячи зі стану шкіри та побажань клієнта.",
      },
      {
        id: 2,
        title: "Підготовка до процедури",
        description: "Очищення шкіри, дезінфекція та нанесення анестетика для зниження дискомфорту.",
      },
      {
        id: 3,
        title: "Введення препарату гіалуронової кислоти",
        description: "Ін'єкції виконуються тонкою голкою в зони, які потребують зволоження та покращення тонусу.",
      },
      {
        id: 4,
        title: "Завершення та рекомендації",
        description: "Наноситься заспокійливий крем, лікар дає рекомендації по догляду за шкірою після процедури.",
      },
    ],
    priceTable: [
      {
        id: 1,
        title: "Restylane Vital (Швеція)",
        imgUrl: "/drugs/1.png",
        description: "Restylane Vital - препарат гіалуронової кислоти для зволоження та покращення структури шкіри.",
        prices: {
          titlePrice: {
            zone: "Обличчя",
          },
          listingPrice: [
            {
              id: 1,
              title: "Щоки",
              price: 4500,
              newPrice: null,
            },
            {
              id: 2,
              title: "Шия",
              price: 4800,
              newPrice: null,
            },
            {
              id: 3,
              title: "Зона декольте",
              price: 5000,
              newPrice: null,
            },
            {
              id: 4,
              title: "Все обличчя",
              price: 12000,
              newPrice: null,
            },
          ],
        },
      },
      {
        id: 2,
        title: "Teosyal Redensity (Швейцарія)",
        imgUrl: "/drugs/1.png",
        description: "Teosyal Redensity - препарат для інтенсивного зволоження шкіри та боротьби з ознаками старіння.",
        prices: {
          titlePrice: {
            zone: "Обличчя",
          },
          listingPrice: [
            {
              id: 1,
              title: "Щоки",
              price: 4700,
              newPrice: null,
            },
            {
              id: 2,
              title: "Шия",
              price: 4900,
              newPrice: null,
            },
            {
              id: 3,
              title: "Зона декольте",
              price: 5200,
              newPrice: null,
            },
            {
              id: 4,
              title: "Все обличчя",
              price: 12500,
              newPrice: null,
            },
          ],
        },
      },
      {
        id: 3,
        title: "Juvéderm Volite (США)",
        imgUrl: "/drugs/1.png",
        description:
          "Juvéderm Volite - інноваційний препарат для довготривалого зволоження шкіри та покращення її еластичності.",
        prices: {
          titlePrice: {
            zone: "Обличчя",
          },
          listingPrice: [
            {
              id: 1,
              title: "Щоки",
              price: 5000,
              newPrice: null,
            },
            {
              id: 2,
              title: "Шия",
              price: 5300,
              newPrice: null,
            },
            {
              id: 3,
              title: "Зона декольте",
              price: 5500,
              newPrice: null,
            },
            {
              id: 4,
              title: "Все обличчя",
              price: 13000,
              newPrice: null,
            },
          ],
        },
      },
      {
        id: 4,
        title: "Filorga NCTF (Франція)",
        imgUrl: "/drugs/1.png",
        description: "Filorga NCTF - мезококтейль для інтенсивного живлення та регенерації шкіри.",
        prices: {
          titlePrice: {
            zone: "Обличчя",
          },
          listingPrice: [
            {
              id: 1,
              title: "Щоки",
              price: 4600,
              newPrice: null,
            },
            {
              id: 2,
              title: "Шия",
              price: 4900,
              newPrice: null,
            },
            {
              id: 3,
              title: "Зона декольте",
              price: 5100,
              newPrice: null,
            },
            {
              id: 4,
              title: "Все обличчя",
              price: 12300,
              newPrice: null,
            },
          ],
        },
      },
    ],
  },
  {
    id: 3,
    name: servesTitle[ServicesRoute.KonturnaPlastikaGubu],
    price: 3200,
    imgUrl: "/services/face-plastic.webp",
    pageUrl: ServicesRoute.KonturnaPlastikaGubu,
    description:
      "Контурна пластика губ допомагає створити ідеальну форму та об’єм губ, зберігаючи природність. Процедура підкреслює індивідуальну красу без надмірного втручання.",
    stages: [
      {
        id: 1,
        title: "Консультація та вибір форми губ",
        description: "Лікар допомагає обрати форму та об'єм губ, які найкраще підійдуть до рис обличчя.",
      },
      {
        id: 2,
        title: "Підготовка до процедури",
        description: "Дезінфекція та нанесення анестетика для комфортного проведення ін'єкцій.",
      },
      {
        id: 3,
        title: "Введення філера",
        description: "Ін'єкції виконуються з урахуванням обраної форми та бажаного об'єму губ.",
      },
      {
        id: 4,
        title: "Рекомендації після процедури",
        description: "Лікар надає рекомендації по догляду за губами та уникненню можливих ускладнень.",
      },
    ],
    priceTable: [
      {
        id: 1,
        title: "Juvéderm Ultra Smile (США)",
        imgUrl: "/drugs/1.png",
        description: "Juvéderm Ultra Smile - препарат для створення виразних губ із натуральним об'ємом.",
        prices: {
          titlePrice: {
            zone: "Губи",
          },
          listingPrice: [
            {
              id: 1,
              title: "Верхня губа",
              price: 4500,
              newPrice: null,
            },
            {
              id: 2,
              title: "Нижня губа",
              price: 4500,
              newPrice: null,
            },
            {
              id: 3,
              title: "Повний об'єм",
              price: 9000,
              newPrice: null,
            },
          ],
        },
      },
      {
        id: 2,
        title: "Teosyal Kiss (Швейцарія)",
        imgUrl: "/drugs/1.png",
        description: "Teosyal Kiss - інноваційний препарат для збільшення об'єму губ із довготривалим ефектом.",
        prices: {
          titlePrice: {
            zone: "Губи",
          },
          listingPrice: [
            {
              id: 1,
              title: "Верхня губа",
              price: 4600,
              newPrice: null,
            },
            {
              id: 2,
              title: "Нижня губа",
              price: 4600,
              newPrice: null,
            },
            {
              id: 3,
              title: "Повний об'єм",
              price: 9200,
              newPrice: null,
            },
          ],
        },
      },
      {
        id: 3,
        title: "Restylane Lip Volume (Швеція)",
        imgUrl: "/drugs/1.png",
        description: "Restylane Lip Volume - препарат для створення об'єму та чітких контурів губ.",
        prices: {
          titlePrice: {
            zone: "Губи",
          },
          listingPrice: [
            {
              id: 1,
              title: "Верхня губа",
              price: 4400,
              newPrice: null,
            },
            {
              id: 2,
              title: "Нижня губа",
              price: 4400,
              newPrice: null,
            },
            {
              id: 3,
              title: "Повний об'єм",
              price: 8800,
              newPrice: null,
            },
          ],
        },
      },
    ],
  },
  {
    id: 4,
    name: servesTitle[ServicesRoute.Mezoterapia],
    price: 3500,
    imgUrl: "/services/mezoterapia.webp",
    pageUrl: ServicesRoute.Mezoterapia,
    description:
      "Мезотерапія відновлює шкіру на клітинному рівні, насичуючи її необхідними вітамінами та мінералами. Це чудовий спосіб покращити тонус та колір шкіри, роблячи її більш здоровою та сяючою.",
    stages: [
      {
        id: 1,
        title: "Консультація",
        description: "Огляд шкіри лікарем, визначення необхідного коктейлю для мезотерапії відповідно до типу шкіри.",
      },
      {
        id: 2,
        title: "Підготовка шкіри",
        description: "Очищення та антисептична обробка, нанесення місцевого анестетика для комфорту пацієнта.",
      },
      {
        id: 3,
        title: "Введення коктейлю",
        description: "Ін'єкційне введення поживного коктейлю у необхідні ділянки шкіри.",
      },
      {
        id: 4,
        title: "Післяпроцедурний догляд",
        description: "Рекомендації по догляду за шкірою та уникненню сонця після процедури.",
      },
    ],
    priceTable: [
      {
        id: 1,
        title: "Filorga (Франція)",
        imgUrl: "/drugs/1.png",
        description:
          "Філорга – поживний коктейль із гіалуроновою кислотою для регенерації шкіри. Ефективний для боротьби зі зморшками та сухістю.",
        prices: {
          titlePrice: {
            zone: "Обличчя",
          },
          listingPrice: [
            {
              id: 1,
              title: "Щоки",
              price: 4500,
              newPrice: null,
            },
            {
              id: 2,
              title: "Шия",
              price: 4800,
              newPrice: null,
            },
            {
              id: 3,
              title: "Зона декольте",
              price: 5000,
              newPrice: null,
            },
            {
              id: 4,
              title: "Все обличчя",
              price: 12000,
              newPrice: null,
            },
          ],
        },
      },
      {
        id: 2,
        title: "Revitacare (Франція)",
        imgUrl: "/drugs/1.png",
        description:
          "Коктейль Revitacare призначений для відновлення пружності шкіри та зменшення проявів пігментації.",
        prices: {
          titlePrice: {
            zone: "Обличчя",
          },
          listingPrice: [
            {
              id: 1,
              title: "Щоки",
              price: 4700,
              newPrice: null,
            },
            {
              id: 2,
              title: "Шия",
              price: 4900,
              newPrice: null,
            },
            {
              id: 3,
              title: "Зона декольте",
              price: 5200,
              newPrice: null,
            },
            {
              id: 4,
              title: "Все обличчя",
              price: 12500,
              newPrice: null,
            },
          ],
        },
      },
    ],
  },
  {
    id: 5,
    name: servesTitle[ServicesRoute.KonturnaPlastikaOblicha],
    price: 5500,
    imgUrl: "/services/konturna_leaps.webp",
    pageUrl: ServicesRoute.KonturnaPlastikaOblicha,
    description:
      "Контурна пластика обличчя дозволяє скоригувати риси обличчя, підкреслюючи їхню гармонію та індивідуальність. Процедура дарує чіткі контури та омолоджений вигляд без скальпеля.",
    stages: [
      {
        id: 1,
        title: "Консультація та аналіз форми обличчя",
        description: "Лікар проводить аналіз пропорцій обличчя та визначає необхідні зони корекції.",
      },
      {
        id: 2,
        title: "Підготовка до процедури",
        description: "Очищення шкіри, дезінфекція, нанесення місцевого анестетика для зниження дискомфорту.",
      },
      {
        id: 3,
        title: "Введення філера",
        description: "Ін'єкції проводяться у необхідні зони для створення чітких контурів та об'єму.",
      },
      {
        id: 4,
        title: "Рекомендації після процедури",
        description: "Поради лікаря щодо догляду за шкірою після процедури для досягнення найкращого результату.",
      },
    ],
    priceTable: [
      {
        id: 1,
        title: "Juvederm Voluma (США)",
        imgUrl: "/drugs/1.png",
        description: "Juvederm Voluma - ідеальний філер для відновлення об'єму та корекції форми обличчя.",
        prices: {
          titlePrice: {
            zone: "Обличчя",
          },
          listingPrice: [
            {
              id: 1,
              title: "Скулова зона",
              price: 6500,
              newPrice: null,
            },
            {
              id: 2,
              title: "Підборіддя",
              price: 5800,
              newPrice: null,
            },
            {
              id: 3,
              title: "Лінія нижньої щелепи",
              price: 7200,
              newPrice: null,
            },
            {
              id: 4,
              title: "Все обличчя",
              price: 19000,
              newPrice: null,
            },
          ],
        },
      },
      {
        id: 2,
        title: "Restylane Lyft (Швеція)",
        imgUrl: "/drugs/1.png",
        description: "Restylane Lyft - філер для чітких контурів та відновлення об'єму.",
        prices: {
          titlePrice: {
            zone: "Обличчя",
          },
          listingPrice: [
            {
              id: 1,
              title: "Скулова зона",
              price: 6300,
              newPrice: null,
            },
            {
              id: 2,
              title: "Підборіддя",
              price: 5700,
              newPrice: null,
            },
            {
              id: 3,
              title: "Лінія нижньої щелепи",
              price: 7100,
              newPrice: null,
            },
            {
              id: 4,
              title: "Все обличчя",
              price: 18500,
              newPrice: null,
            },
          ],
        },
      },
    ],
  },
];

export const socials: Array<{ id: number; name: string; href: string }> = [
  {
    id: 1,
    name: "instagram",
    href: "https://www.instagram.com/beautica.co/",
  },
];

export const faqs = {
  "main-faq": [
    {
      id: 1,
      question: "Біоревіталізація шкіри гіалуроновою кислотою - базова процедура?",
      answer:
        "Інєкційна процедура біоревіталізація гіалуроновою кислотою ефективна, безпечна, а головне універсальна. Проводити маніпуляції можна як на обличчі, так і на тілі.",
    },
    {
      id: 2,
      question: "Натуральне омолодження. Активні компоненти?",
      answer:
        " Натуральне омолодження - це процес, який включає в себе надання допомоги тілінам, щоб відновити їїфункціонування. Активні компоненти - це компоненти, які використовуються для надання допомоги тілінам. Наприклад, вода, водяний пар, мікроелементи, мікроорганизми, мікрофлора, мікрофузи, мікрохлориди, мікроциклічні вещества, натуральні витамині, натуральні масла, натуральні міграції, натуральні порошки, натуральні солодкі, натуральні таблетки, натуральні угри, натуральні інгредіенти",
    },
    {
      id: 3,
      question: "Швидке відновлення. У місцях проколів можуть з'явитися?",
      answer:
        "Швидке відновлення - це процес, який включає в себе надання допомоги тілінам, щоб відновити її функціонування. У місцях проколів можуть з&apos;явитися, але вони повинні бути виправлені в майбутньому. Процедура відновлення шкіри гіалуроновою кислотою включає в себе надання допомоги тілінам, використання активних компонентів, відновлення інтенсивності тіла, відновлення функціонування мозку, відновлення повітря, відновлення іншого функціонування тіла.",
    },
    {
      id: 4,
      question: "Біоревіталізація шкіри гіалуроновою кислотою - базова процедура?",
      answer:
        "Інєкційна процедура біоревіталізація гіалуроновою кислотою ефективна, безпечна, а головне універсальна. Проводити маніпуляції можна як на обличчі, так і на тілі.",
    },
  ],
};

export const sertificateData = {
  amouts: [
    {
      id: 1,
      name: "Років досвіду",
      value: 5,
    },
    {
      id: 2,
      name: "Дипломів та сертифікатів",
      value: 20,
    },
  ],
  diploms: [
    {
      id: 1,
      title: "Диплом на вищу освіту",
      imgUrl: "/sertification/s1.png",
    },
    {
      id: 2,
      title: "Диплом на вищу освіту",
      imgUrl: "/sertification/s1.png",
    },
    {
      id: 3,
      title: "Диплом на вищу освіту",
      imgUrl: "/sertification/s2.png",
    },
    {
      id: 4,
      title: "Диплом на вищу освіту",
      imgUrl: "/sertification/s2.png",
    },
    {
      id: 5,
      title: "Диплом на вищу освіту",
      imgUrl: "/sertification/s1.png",
    },
    {
      id: 6,
      title: "Диплом на вищу освіту",
      imgUrl: "/sertification/s1.png",
    },
    {
      id: 7,
      title: "Диплом на вищу освіту",
      imgUrl: "/sertification/s2.png",
    },
  ],
};

// Відгуки з доданими полями serves
export const testimonialsData: TestimonialType[] = [
  {
    id: 1,
    name: "Olivia Johnson",
    avatar: "https://i.pravatar.cc/200?img=11",
    comment:
      "Довго шукала хорошого косметолога, і нарешті знайшла! Процедури проходять комфортно, а результат просто чудовий. Особливо задоволена контурною пластикою губ — виглядає дуже природно.",
    date: "2025-01-20",
    serves: [ServicesRoute.KonturnaPlastikaGubu, ServicesRoute.Biorevitalizatsiya],
  },
  {
    id: 2,
    name: "Liam Smith",
    avatar: "https://i.pravatar.cc/200?img=21",
    comment:
      "The team at Beatica is so professional and friendly. I felt comfortable throughout my entire visit. Thank you!",
    date: "2025-01-18",
    serves: [ServicesRoute.Botulinoterapia, ServicesRoute.Mezoterapia],
  },
  {
    id: 3,
    name: "Emma Brown",
    avatar: "https://i.pravatar.cc/200?img=31",
    comment: "Amazing service and incredible results! My skin feels rejuvenated and fresh. Will definitely be back.",
    date: "2025-01-15",
    serves: [ServicesRoute.Biorevitalizatsiya],
  },
  {
    id: 4,
    name: "Noah Williams",
    avatar: "https://i.pravatar.cc/200?img=41",
    comment: "A top-notch experience from start to finish. Beatica truly exceeded my expectations. Highly recommended!",
    date: "2025-01-12",
    serves: [ServicesRoute.KonturnaPlastikaOblicha],
  },
  {
    id: 5,
    name: "Sophia Garcia",
    avatar: "https://i.pravatar.cc/200?img=51",
    comment:
      "The attention to detail and care at Beatica is unmatched. My skin has never looked this good. Thank you so much!",
    date: "2025-01-10",
    serves: [ServicesRoute.Botulinoterapia, ServicesRoute.KonturnaPlastikaGubu],
  },
  {
    id: 6,
    name: "James Martinez",
    avatar: "https://i.pravatar.cc/200?img=61",
    comment:
      "Beatica offers exceptional services, and their team is incredibly knowledgeable. I trust them with all my skincare needs.",
    date: "2025-01-08",
    serves: [ServicesRoute.Mezoterapia],
  },
];

export const beforAfterData: beforAfterDataType[] = [
  {
    id: 1,
    name: servesTitle[ServicesRoute.Biorevitalizatsiya],
    imgUrl: `before-after/${ServicesRoute.Biorevitalizatsiya}/1.jpg`,
    mainView: true,
    slug: ServicesRoute.Biorevitalizatsiya,
  },
  {
    id: 2,
    name: servesTitle[ServicesRoute.Biorevitalizatsiya],
    imgUrl: `before-after/${ServicesRoute.Biorevitalizatsiya}/lorem-2.png`,
    mainView: true,
    slug: ServicesRoute.Biorevitalizatsiya,
  },
  {
    id: 3,
    name: servesTitle[ServicesRoute.Biorevitalizatsiya],
    imgUrl: `before-after/${ServicesRoute.Biorevitalizatsiya}/lorem.jpg`,
    mainView: false,
    slug: ServicesRoute.Biorevitalizatsiya,
  },
  {
    id: 4,
    name: servesTitle[ServicesRoute.Biorevitalizatsiya],
    imgUrl: `before-after/${ServicesRoute.Biorevitalizatsiya}/lorem.jpg`,
    mainView: false,
    slug: ServicesRoute.Biorevitalizatsiya,
  },
  {
    id: 5,
    name: servesTitle[ServicesRoute.Biorevitalizatsiya],
    imgUrl: `before-after/${ServicesRoute.Biorevitalizatsiya}/lorem.jpg`,
    mainView: false,
    slug: ServicesRoute.Biorevitalizatsiya,
  },
  {
    id: 6,
    name: servesTitle[ServicesRoute.Biorevitalizatsiya],
    imgUrl: `before-after/${ServicesRoute.Biorevitalizatsiya}/lorem.jpg`,
    mainView: false,
    slug: ServicesRoute.Biorevitalizatsiya,
  },
  {
    id: 7,
    name: servesTitle[ServicesRoute.Biorevitalizatsiya],
    imgUrl: `before-after/${ServicesRoute.Biorevitalizatsiya}/lorem.jpg`,
    mainView: false,
    slug: ServicesRoute.Biorevitalizatsiya,
  },
  {
    id: 8,
    name: servesTitle[ServicesRoute.Biorevitalizatsiya],
    imgUrl: `before-after/${ServicesRoute.Biorevitalizatsiya}/lorem.jpg`,
    mainView: false,
    slug: ServicesRoute.Biorevitalizatsiya,
  },
  {
    id: 9,
    name: servesTitle[ServicesRoute.Biorevitalizatsiya],
    imgUrl: `before-after/${ServicesRoute.Biorevitalizatsiya}/lorem.jpg`,
    mainView: false,
    slug: ServicesRoute.Biorevitalizatsiya,
  },
  {
    id: 10,
    name: servesTitle[ServicesRoute.Biorevitalizatsiya],
    imgUrl: `before-after/${ServicesRoute.Biorevitalizatsiya}/lorem.jpg`,
    mainView: false,
    slug: ServicesRoute.Biorevitalizatsiya,
  },
  {
    id: 11,
    name: servesTitle[ServicesRoute.KonturnaPlastikaGubu],
    imgUrl: `before-after/${ServicesRoute.KonturnaPlastikaGubu}/1.png`,
    mainView: true,
    slug: ServicesRoute.KonturnaPlastikaGubu,
  },
  {
    id: 12,
    name: servesTitle[ServicesRoute.KonturnaPlastikaGubu],
    imgUrl: `before-after/${ServicesRoute.KonturnaPlastikaGubu}/lorem.jpg`,
    mainView: false,
    slug: ServicesRoute.KonturnaPlastikaGubu,
  },
  {
    id: 13,
    name: servesTitle[ServicesRoute.KonturnaPlastikaGubu],
    imgUrl: `before-after/${ServicesRoute.KonturnaPlastikaGubu}/lorem.jpg`,
    mainView: false,
    slug: ServicesRoute.KonturnaPlastikaGubu,
  },
  {
    id: 14,
    name: servesTitle[ServicesRoute.KonturnaPlastikaGubu],
    imgUrl: `before-after/${ServicesRoute.KonturnaPlastikaGubu}/lorem.jpg`,
    mainView: false,
    slug: ServicesRoute.KonturnaPlastikaGubu,
  },
  {
    id: 15,
    name: servesTitle[ServicesRoute.KonturnaPlastikaGubu],
    imgUrl: `before-after/${ServicesRoute.KonturnaPlastikaGubu}/lorem.jpg`,
    mainView: false,
    slug: ServicesRoute.KonturnaPlastikaGubu,
  },
  {
    id: 16,
    name: servesTitle[ServicesRoute.KonturnaPlastikaGubu],
    imgUrl: `before-after/${ServicesRoute.KonturnaPlastikaGubu}/lorem.jpg`,
    mainView: false,
    slug: ServicesRoute.KonturnaPlastikaGubu,
  },
  {
    id: 17,
    name: servesTitle[ServicesRoute.KonturnaPlastikaGubu],
    imgUrl: `before-after/${ServicesRoute.KonturnaPlastikaGubu}/lorem.jpg`,
    mainView: false,
    slug: ServicesRoute.KonturnaPlastikaGubu,
  },
  {
    id: 18,
    name: servesTitle[ServicesRoute.KonturnaPlastikaGubu],
    imgUrl: `before-after/${ServicesRoute.KonturnaPlastikaGubu}/lorem.jpg`,
    mainView: false,
    slug: ServicesRoute.KonturnaPlastikaGubu,
  },
  {
    id: 19,
    name: servesTitle[ServicesRoute.KonturnaPlastikaGubu],
    imgUrl: `before-after/${ServicesRoute.KonturnaPlastikaGubu}/lorem.jpg`,
    mainView: false,
    slug: ServicesRoute.KonturnaPlastikaGubu,
  },
  {
    id: 20,
    name: servesTitle[ServicesRoute.KonturnaPlastikaGubu],
    imgUrl: `before-after/${ServicesRoute.KonturnaPlastikaGubu}/1.png`,
    mainView: true,
    slug: ServicesRoute.KonturnaPlastikaGubu,
  },
  {
    id: 21,
    name: servesTitle[ServicesRoute.Mezoterapia],
    imgUrl: `before-after/${ServicesRoute.Mezoterapia}/1.png`,
    mainView: true,
    slug: ServicesRoute.Mezoterapia,
  },
  {
    id: 22,
    name: servesTitle[ServicesRoute.Mezoterapia],
    imgUrl: `before-after/${ServicesRoute.Mezoterapia}/lorem-3.png`,
    mainView: false,
    slug: ServicesRoute.Mezoterapia,
  },
  {
    id: 23,
    name: servesTitle[ServicesRoute.Mezoterapia],
    imgUrl: `before-after/${ServicesRoute.Mezoterapia}/lorem.jpeg`,
    mainView: false,
    slug: ServicesRoute.Mezoterapia,
  },
  {
    id: 24,
    name: servesTitle[ServicesRoute.Mezoterapia],
    imgUrl: `before-after/${ServicesRoute.Mezoterapia}/lorem.jpeg`,
    mainView: false,
    slug: ServicesRoute.Mezoterapia,
  },
  {
    id: 25,
    name: servesTitle[ServicesRoute.Mezoterapia],
    imgUrl: `before-after/${ServicesRoute.Mezoterapia}/lorem.jpeg`,
    mainView: false,
    slug: ServicesRoute.Mezoterapia,
  },
  {
    id: 26,
    name: servesTitle[ServicesRoute.Mezoterapia],
    imgUrl: `before-after/${ServicesRoute.Mezoterapia}/lorem.jpeg`,
    mainView: false,
    slug: ServicesRoute.Mezoterapia,
  },
  {
    id: 27,
    name: servesTitle[ServicesRoute.Mezoterapia],
    imgUrl: `before-after/${ServicesRoute.Mezoterapia}/lorem.jpeg`,
    mainView: false,
    slug: ServicesRoute.Mezoterapia,
  },
  {
    id: 28,
    name: servesTitle[ServicesRoute.Mezoterapia],
    imgUrl: `before-after/${ServicesRoute.Mezoterapia}/lorem.jpeg`,
    mainView: false,
    slug: ServicesRoute.Mezoterapia,
  },
  {
    id: 29,
    name: servesTitle[ServicesRoute.Mezoterapia],
    imgUrl: `before-after/${ServicesRoute.Mezoterapia}/lorem.jpeg`,
    mainView: false,
    slug: ServicesRoute.Mezoterapia,
  },

  {
    id: 30,
    name: servesTitle[ServicesRoute.Mezoterapia],
    imgUrl: `before-after/${ServicesRoute.KonturnaPlastikaOblicha}/1.png`,
    mainView: true,
    slug: ServicesRoute.Mezoterapia,
  },
  {
    id: 31,
    name: servesTitle[ServicesRoute.KonturnaPlastikaOblicha],
    imgUrl: `before-after/${ServicesRoute.KonturnaPlastikaOblicha}/lorem-4.png`,
    mainView: true,
    slug: ServicesRoute.KonturnaPlastikaOblicha,
  },
  {
    id: 32,
    name: servesTitle[ServicesRoute.KonturnaPlastikaOblicha],
    imgUrl: `before-after/${ServicesRoute.KonturnaPlastikaOblicha}/lorem.jpg`,
    mainView: true,
    slug: ServicesRoute.KonturnaPlastikaOblicha,
  },
  {
    id: 33,
    name: servesTitle[ServicesRoute.KonturnaPlastikaOblicha],
    imgUrl: `before-after/${ServicesRoute.KonturnaPlastikaOblicha}/lorem.jpg`,
    mainView: false,
    slug: ServicesRoute.KonturnaPlastikaOblicha,
  },
  {
    id: 34,
    name: servesTitle[ServicesRoute.KonturnaPlastikaOblicha],
    imgUrl: `before-after/${ServicesRoute.KonturnaPlastikaOblicha}/lorem.jpg`,
    mainView: false,
    slug: ServicesRoute.KonturnaPlastikaOblicha,
  },
  {
    id: 35,
    name: servesTitle[ServicesRoute.KonturnaPlastikaOblicha],
    imgUrl: `before-after/${ServicesRoute.KonturnaPlastikaOblicha}/lorem.jpg`,
    mainView: false,
    slug: ServicesRoute.KonturnaPlastikaOblicha,
  },
  {
    id: 36,
    name: servesTitle[ServicesRoute.KonturnaPlastikaOblicha],
    imgUrl: `before-after/${ServicesRoute.KonturnaPlastikaOblicha}/lorem.jpg`,
    mainView: false,
    slug: ServicesRoute.KonturnaPlastikaOblicha,
  },
  {
    id: 37,
    name: servesTitle[ServicesRoute.KonturnaPlastikaOblicha],
    imgUrl: `before-after/${ServicesRoute.KonturnaPlastikaOblicha}/lorem.jpg`,
    mainView: false,
    slug: ServicesRoute.KonturnaPlastikaOblicha,
  },
  {
    id: 38,
    name: servesTitle[ServicesRoute.KonturnaPlastikaOblicha],
    imgUrl: `before-after/${ServicesRoute.KonturnaPlastikaOblicha}/lorem.jpg`,
    mainView: false,
    slug: ServicesRoute.KonturnaPlastikaOblicha,
  },
  {
    id: 39,
    name: servesTitle[ServicesRoute.KonturnaPlastikaOblicha],
    imgUrl: `before-after/${ServicesRoute.KonturnaPlastikaOblicha}/lorem.jpg`,
    mainView: false,
    slug: ServicesRoute.KonturnaPlastikaOblicha,
  },
  {
    id: 40,
    name: servesTitle[ServicesRoute.KonturnaPlastikaOblicha],
    imgUrl: `before-after/${ServicesRoute.KonturnaPlastikaOblicha}/lorem.jpg`,
    mainView: false,
    slug: ServicesRoute.KonturnaPlastikaOblicha,
  },
  {
    id: 41,
    name: servesTitle[ServicesRoute.Botulinoterapia],
    imgUrl: `before-after/${ServicesRoute.Botulinoterapia}/1.png`,
    mainView: true,
    slug: ServicesRoute.Botulinoterapia,
  },
  {
    id: 42,
    name: servesTitle[ServicesRoute.Botulinoterapia],
    imgUrl: `before-after/${ServicesRoute.Botulinoterapia}/lorem-5.png`,
    mainView: true,
    slug: ServicesRoute.Botulinoterapia,
  },
  {
    id: 43,
    name: servesTitle[ServicesRoute.Botulinoterapia],
    imgUrl: `before-after/${ServicesRoute.Botulinoterapia}/lorem-1.png`,
    mainView: false,
    slug: ServicesRoute.Botulinoterapia,
  },
  {
    id: 44,
    name: servesTitle[ServicesRoute.Botulinoterapia],
    imgUrl: `before-after/${ServicesRoute.Botulinoterapia}/lorem-1.png`,
    mainView: false,
    slug: ServicesRoute.Botulinoterapia,
  },
  {
    id: 45,
    name: servesTitle[ServicesRoute.Botulinoterapia],
    imgUrl: `before-after/${ServicesRoute.Botulinoterapia}/lorem-1.png`,
    mainView: false,
    slug: ServicesRoute.Botulinoterapia,
  },
  {
    id: 46,
    name: servesTitle[ServicesRoute.Botulinoterapia],
    imgUrl: `before-after/${ServicesRoute.Botulinoterapia}/lorem-1.png`,
    mainView: false,
    slug: ServicesRoute.Botulinoterapia,
  },
  {
    id: 47,
    name: servesTitle[ServicesRoute.Botulinoterapia],
    imgUrl: `before-after/${ServicesRoute.Botulinoterapia}/lorem-1.png`,
    mainView: false,
    slug: ServicesRoute.Botulinoterapia,
  },
  {
    id: 48,
    name: servesTitle[ServicesRoute.Botulinoterapia],
    imgUrl: `before-after/${ServicesRoute.Botulinoterapia}/lorem-1.png`,
    mainView: false,
    slug: ServicesRoute.Botulinoterapia,
  },
  {
    id: 49,
    name: servesTitle[ServicesRoute.Botulinoterapia],
    imgUrl: `before-after/${ServicesRoute.Botulinoterapia}/lorem-1.png`,
    mainView: false,
    slug: ServicesRoute.Botulinoterapia,
  },
  {
    id: 50,
    name: servesTitle[ServicesRoute.Botulinoterapia],
    imgUrl: `before-after/${ServicesRoute.Botulinoterapia}/lorem-1.png`,
    mainView: false,
    slug: ServicesRoute.Botulinoterapia,
  },
];

export const navMenuList: NavMenuListType = {
  mainPage: [
    {
      name: "Про мене",
      link: "#about",
    },
    {
      name: "Послуги",
      link: "#services",
    },
    {
      name: "До та Після",
      link: "#before-after",
    },
    {
      name: "Відгуки",
      link: "#reviews",
    },
    {
      name: "Партнери",
      link: "#partners",
    },
    {
      name: "ЧАСТІ ПИТАННЯ",
      link: "#faq",
    },
  ],
  servesPage: [
    {
      name: "Про процедуру",
      link: "#procedure",
    },
    {
      name: "Етапи проведення",
      link: "#stages",
    },
    {
      name: "Ціни",
      link: "#pricing",
    },
    {
      name: "Відгуки",
      link: "#reviews",
    },
    {
      name: "Питання",
      link: "#faq",
    },
  ],
};
type MetadataItem = {
  title: string;
  description: string;
  image: string;
};
export const metadataObj: Record<string, MetadataItem> = {
  botulinoterapia: {
    title: "Ботулінотерапія",
    description:
      "Ботулінотерапія дарує видимий омолоджуючий ефект без хірургічного втручання. Ін'єкції краси розгладжують мімічні та кисетні зморшки, знімають гіпертонус м’язів, даруючи шкірі свіжий вигляд.",
    image: "botolin.jpg",
  },
  biorevitalizatsiya: {
    title: "Біоревіталізація",
    description:
      "Біоревіталізація забезпечує глибоке зволоження шкіри, покращує її текстуру, повертає пружність та здоровий блиск. Це ідеальне рішення для боротьби з ознаками старіння",
    image: "2.webp",
  },
  ["konturna-plastika-gubu"]: {
    title: "Контурна плістика губ",
    description:
      "Контурна плістика губ - це дієтина, яка дозволяє змінювати тіло та збільшувати масу тіла. Це дієтина, яка дозволяє збільшити масу тіла та збільшити відносні ваги. Це дієтина, яка дозволяє збільшити відносні ваги тіла. Це дієтина, яка дозволяє збільшити масу тіла та збільшити відносні ваги.",
    image: "konturna_leaps.webp",
  },
  ["mezoterapia"]: {
    title: "Мезотерапія",
    description:
      "Мезотерапія - це процедура, яка дозволяє змінювати тіло та збільшувати масу тіла. Це дієтина, яка дозволяє збільшити масу тіла та збільшити відносні ваги. Це дієтина, яка дозволяє збільшити відносні ваги тіла. Це дієтина, яка дозволяє збільшити масу тіла та збільшити відносні ваги.",
    image: "mezoterapia.webp",
  },
  ["konturna-plastika-oblicha"]: {
    title: "Контурна плістика обличчя",
    description:
      "Контурна плістика обличчя - це дієтина, яка дозволяє змінювати тіло та збільшувати масу тіла. Це дієтина, яка дозволяє збільшити масу тіла та збільшити відносні ваги. Це дієтина, яка дозволяє збільшити відносні ваги тіла. Це дієтина, яка дозволяє збільшити масу тіла та збільшити відносні ваги.",
    image: "face-plastic.jpg",
  },
} as const;
