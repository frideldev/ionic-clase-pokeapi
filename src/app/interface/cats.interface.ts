interface CatFact {
  _id: string;
  text: string;
  type: string;
  user?: string;
  upvotes?: number;
}

interface CatFactsResponse {
  all: CatFact[];
}
