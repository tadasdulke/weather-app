import './index.scss';

import {
  type Location,
  type SearchableLocation,
} from 'src/services/LocationSearchService';

import Button from '~components/Button';
import HighlightedText from '~components/HighlightedText';

interface LocationListProps {
  locations: SearchableLocation[];
  onLocationSelect: (location: Location) => void;
}

const LocationList = ({ locations, onLocationSelect }: LocationListProps) => {
  return (
    <ul className="LocationList__list">
      {locations.map((location, index) => {
        return (
          <li key={index} className="LocationList__list-item">
            <Button
              key={location.id}
              onClick={() => {
                onLocationSelect(location);
              }}
              className="LocationList__button"
            >
              <HighlightedText
                from={location.match.index}
                to={location.match[0].length}
                className="LocationList__name"
                highlightedClassName="LocationList__name--white"
              >
                {location.name}
              </HighlightedText>
            </Button>
            {index < locations.length - 1 && (
              <div className="LocationList__divider" />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default LocationList;
