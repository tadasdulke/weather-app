import useLocationContext from '~hooks/useLocationContext';
import WeatherForecast from '~components/WeatherForecast';

import './index.scss';
import WeatherIcon from '~utils/findWeatherIcon';
import Separator from '~components/Separator';
import useWeatherForecast from '~hooks/useWeatherForecast';

const Homepage = () => {
  const { location } = useLocationContext();
  const { weatherForecast } = useWeatherForecast(location);

  return (
    <>
      <div className="Homepage__background-image" />
      <div className="Homepage__wrapper">
        <Separator text="Day Forecast">
          <div>
            <span className="Homepage__forecast-temp Homepage__forecast-temp--high">
              {weatherForecast !== null &&
                Math.round(weatherForecast.main.temp_max)}
            </span>
            <span className="Homepage__forecast-temp Homepage__forecast-temp--low">
              {weatherForecast !== null &&
                Math.round(weatherForecast.main.temp_min)}
            </span>
          </div>
        </Separator>
        <div className="Homepage__main">
          <span className="Homepage__current-degrees">
            {weatherForecast !== null && Math.round(weatherForecast.main.temp)}
            &deg;
          </span>
          <span className="Homepage__location">{location.name}</span>
          <div className="Homepage__weather-type-container">
            <span className="Homepage__weather-type">
              {weatherForecast?.weather[0].main}
            </span>
            {weatherForecast !== null && (
              <WeatherIcon code={weatherForecast.weather[0].icon} />
            )}
          </div>
        </div>
        <Separator text="Week Forecast" />
        <WeatherForecast />
      </div>
    </>
  );
};

export default Homepage;
