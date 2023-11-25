import './index.scss';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { type Location } from 'src/services/LocationSearchService';
import { LocationSearchConfig } from 'src/types/enums';

import InputField from '~components/InputField';
import LocationList from '~components/LocationList';
import { Routes } from '~components/Router';
import useLocationContext from '~hooks/useLocationContext';
import useSearchLocationService from '~hooks/useSearchLocationService';

const LocationPicker = () => {
  const { setLocation } = useLocationContext();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState<string>('');
  const locations = useSearchLocationService(
    searchValue,
    LocationSearchConfig.MaxAmountOfLocationsToDisplay
  );

  const onLocationSelect = (location: Location) => {
    setLocation(location);
    navigate(Routes.Homepage);
  };

  return (
    <div>
      <div className="LocationPicker__input-field-wrapper">
        <InputField
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onClear={() => {
            setSearchValue('');
          }}
        />
      </div>

      <LocationList onLocationSelect={onLocationSelect} locations={locations} />
    </div>
  );
};

export default LocationPicker;
