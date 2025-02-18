export interface CatFacts {
  name: string;
  description: string;
  main: string;
  authors: Author[];
  license: string;
  homepage: string;
  directory: string;
  ignore: string[];
  dependencies: Dependencies;
}

export interface Author {
  name: string;
  email: string;
}

export interface Dependencies {
  [key: string]: string; 
}