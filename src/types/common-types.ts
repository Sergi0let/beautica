export type SvgProps = {
  className?: string;
  color?: string;
};

export interface ServiceStage {
  id: number;
  title: string;
  description: string;
}

export interface PriceListing {
  id: number;
  title: string;
  price: number;
  newPrice: number | null;
}

export interface PriceTable {
  id: number;
  title: string;
  imgUrl: string;
  description: string;
  prices: {
    listingPrice: PriceListing[];
  };
}

export interface Service {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  pageUrl: string;
  description: string;
  stages: ServiceStage[];
  priceTable: PriceTable[];
}

export enum ServicesRoute {
  Botulinoterapia = "botulinoterapia",
  Biorevitalizatsiya = "biorevitalizatsiya",
  KonturnaPlastikaGubu = "konturna-plastika-gubu",
  Mezoterapia = "mezoterapia",
  KonturnaPlastikaOblicha = "konturna-plastika-oblicha",
}

export type TestimonialType = {
  id: number;
  name: string;
  avatar: string;
  comment: string;
  date: string;
  serves: ServicesRoute[];
};

export type beforAfterDataType = {
  id: number;
  name: string;
  imgUrl: string;
  mainView: boolean;
  slug: string;
};

export type NavMenuItemType = {
  name: string;
  link: string;
};

export type NavMenuListType = {
  mainPage: NavMenuItemType[];
  servesPage: NavMenuItemType[];
};
