import { useState } from 'react';
import InputField from '~components/InputField';
import useSearchCitiesService from '~hooks/useSearchCitiesService';
import { CitySearchConfig } from 'src/types/enums';
import { type City } from 'src/services/CitySearchService';
import CityList from '~components/CityList';
import useLocationContext from '~hooks/useLocationContext';
import { redirect } from 'react-router-dom';
import './index.scss';
import { Routes } from '~components/Router';

const LocationPicker = () => {
  const { setLocation } = useLocationContext();
  const [searchValue, setSearchValue] = useState<string>('');
  const cities = useSearchCitiesService(
    searchValue,
    CitySearchConfig.MaxAmountOfCitiesToDisplay
  );

  const onLocationSelect = (location: City) => {
    setLocation(location);
    redirect(Routes.Homepage);
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
