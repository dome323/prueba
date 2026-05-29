export interface Country {

  name: {
    common: string;
    official: string;
  };

  flags: {
    png: string;
    alt: string;
  };

  capital: string[];

  maps?: {
    googleMaps: string;
  };

  population?: number;

}