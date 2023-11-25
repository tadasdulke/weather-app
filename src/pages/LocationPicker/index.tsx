import './index.scss';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { type City } from 'src/services/CitySearchService';
import { CitySearchConfig } from 'src/types/enums';

import CityList from '~components/CityList';
import InputField from '~components/InputField';
import { Routes } from '~components/Router';
import useLocationContext from '~hooks/useLocationContext';
import useSearchCitiesService from '~hooks/useSearchCitiesService';

const LocationPicker = () => {
  const { setLocation } = useLocationContext();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState<string>('');
  const cities = useSearchCitiesService(
    searchValue,
    CitySearchConfig.MaxAmountOfCitiesToDisplay
  );

  const onLocationSelect = (location: City) => {
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

      <CityList onLocationSelect={onLocationSelect} cities={cities} />
    </div>
  );
};

export default LocationPicker;
