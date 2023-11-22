import { useState } from 'react';
import InputField from '~components/InputField';
import useSearchCitiesService from '~hooks/useSearchCitiesService';
import { CitySearchConfig } from 'src/types/enums';
import CityList from '~components/CityList';
import useLocationContext from '~hooks/useLocationContext';
import './index.scss';

const LocationPicker = () => {
  const { setLocation } = useLocationContext();
  const [searchValue, setSearchValue] = useState<string>('');
  const cities = useSearchCitiesService(
    searchValue,
    CitySearchConfig.MaxAmountOfCitiesToDisplay
  );

  return (
    <div>
      <div className="LocationPicker__input-field-wrapper">
        <InputField
          value={searchValue}
          onChange={(e) => { setSearchValue(e.target.value); }}
          onClear={() => { setSearchValue(''); }}
        />
      </div>

      <CityList onLocationSelect={setLocation} cities={cities} />
    </div>
  );
};

export default LocationPicker;
