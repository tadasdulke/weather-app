import regexMatch from '~utils/regexMatch';

import SearchService, { type Searchable } from './SearchService';

export interface Location {
  id: number;
  name: string;
  coord: {
    lon: number;
    lat: number;
  };
}

export type SearchableLocation = Searchable<Location>;

class LocationSearchService extends SearchService<Location> {
  override search(valueToMatch: string): SearchableLocation[] {
    for (let i = 0; i < this.fullCollection.length; i++) {
      if (this.isFull()) {
        break;
      }

      const location = this.fullCollection[i];
      const regex = regexMatch(
        valueToMatch.toLowerCase(),
        location.name.toLowerCase()
      );

      if (regex !== null) {
        this.addElement({
          match: regex,
          ...location,
        });
      }
    }

    return this.collectedElements;
  }
}

export default LocationSearchService;
