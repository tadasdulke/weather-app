import SearchService, { Searchable } from "./SearchService";
import regexMatch from "~utils/regexMatch";

export interface City {
  id: number;
  name: string;
}

class CitySearchService extends SearchService<City> {
  constructor(maxCollectedElementsLength: number, collection: City[]) {
    super(maxCollectedElementsLength, collection);
  }

  override search(valueToMatch: string): Searchable<City>[] {
    for (let i = 0; i < this.fullCollection.length; i++) {
      if (this.isFull()) {
        break;
      }

      const city = this.fullCollection[i];
      const regex = regexMatch(
        valueToMatch.toLowerCase(),
        city.name.toLowerCase()
      );

      if (!!regex) {
        this.addElement({
          match: regex,
          ...city,
        });
      }
    }

    return this.collectedElements;
  }
}

export default CitySearchService;
