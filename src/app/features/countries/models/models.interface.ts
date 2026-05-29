export interface Country {

  id: number;

  name: {
    common: string;
    official: string;
  };

  flags: {
    png: string;
    alt: string;
  };

  capital: string[];

  population: number;

  region: string;
}