import { Errors } from 'src/types/enums';

export type Searchable<T> = T & {
  match: RegExpExecArray;
};

interface ISearchService<T> {
  collectedElements: T[];
  fullCollection: T[];
  maxCollectedElementsLength: number;
  search: (valueToMatch: string) => Array<Searchable<T>>;
  isFull: () => boolean;
  addElement: (element: Searchable<T>) => void;
  handleError: (error: string) => void;
}

abstract class SearchService<T> implements ISearchService<T> {
  collectedElements: Array<Searchable<T>>;
  fullCollection: T[];
  maxCollectedElementsLength: number;
  handleError: (error: string) => void;

  constructor(
    maxCollectedElementsLength: number,
    collection: T[],
    handleError: (error: string) => void
  ) {
    this.collectedElements = [];
    this.fullCollection = collection;
    this.maxCollectedElementsLength = maxCollectedElementsLength;
    this.handleError = handleError;
  }

  isFull() {
    return this.collectedElements.length === this.maxCollectedElementsLength;
  }

  addElement(element: Searchable<T>) {
    if (this.isFull()) {
      this.handleError(Errors.CollectionFull);
    }

    this.collectedElements = [...this.collectedElements, element];
  }

  abstract search(valueToMatch: string): Array<Searchable<T>>;
}

export default SearchService;
