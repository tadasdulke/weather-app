import SearchService, { type Searchable } from './SearchService';
import regexMatch from '~utils/regexMatch';

export interface City {
  id: number;
  name: string;
  coord: {
    lon: number;
    lat: number;
  };
}

export type SearchableCity = Searchable<City>;

class CitySearchService extends SearchService<City> {
  override search(valueToMatch: string): SearchableCity[] {
    for (let i = 0; i < this.fullCollection.length; i++) {
      if (this.isFull()) {
        break;
      }

      const city = this.fullCollection[i];
      const regex = regexMatch(
        valueToMatch.toLowerCase(),
        city.name.toLowerCase()
      );

      if (regex !== null) {
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
