import './index.scss';

import { type City,type SearchableCity } from 'src/services/CitySearchService';

import Button from '~components/Button';
import HighlightedText from '~components/HighlightedText';

interface CityListProps {
  cities: SearchableCity[];
  onLocationSelect: (location: City) => void;
}

const CityList = ({ cities, onLocationSelect }: CityListProps) => {
  return (
    <ul className="CityList__list">
      {cities.map((city, index) => {
        return (
          <li key={index} className="CityList__list-item">
            <Button
              key={city.id}
              onClick={() => { onLocationSelect(city); }}
              className="CityList__button"
            >
              <HighlightedText
                from={city.match.index}
                to={city.match[0].length}
                className="CityList__name"
                highlightedClassName="CityList__name--white"
              >
                {city.name}
              </HighlightedText>
            </Button>
            {index < cities.length - 1 && <div className="CityList__divider" />}
          </li>
        );
      })}
    </ul>
  );
};

export default CityList;
