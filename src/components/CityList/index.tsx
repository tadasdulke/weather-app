import { Searchable } from 'src/services/SearchService';
import { City } from 'src/services/CitySearchService';
import Button from '~components/Button';
import HighlightedText from '~components/HighlightedText';

import './index.scss';

interface CityListProps {
  cities: Searchable<City>[];
}

const CityList = ({ cities }: CityListProps) => (
  <ul className="CityList__list">
    {cities.map(({ name, id, match }, index) => {
      return (
        <li key={index} className="CityList__list-item">
          <Button key={id} className="CityList__button">
            <HighlightedText
              from={match.index}
              to={match[0].length}
              className="CityList__name"
              highlightedClassName="CityList__name--white"
            >
              {name}
            </HighlightedText>
          </Button>
          {index < cities.length - 1 && <div className="CityList__divider" />}
        </li>
      );
    })}
  </ul>
);

export default CityList;
