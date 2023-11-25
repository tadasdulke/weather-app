import useLocationContext from '~hooks/useLocationContext';
import WeatherForecast from '~components/WeatherForecast';
import WeatherIcon from '~utils/findWeatherIcon';
import Separator from '~components/Separator';
import useWeatherForecast from '~hooks/useWeatherForecast';

import './index.scss';

const Homepage = () => {
  const { location } = useLocationContext();
  const { currentWeather, weeksForecast } = useWeatherForecast(
    location.coord.lat,
    location.coord.lon
  );

  return (
    <>
      <div className="Homepage__background-image" />
      <div className="Homepage__wrapper">
        <Separator text="Day Forecast">
          <div>
            <span className="Homepage__forecast-temp Homepage__forecast-temp--high">
              {currentWeather !== null &&
                Math.round(currentWeather.main.temp_max)}
            </span>
            <span className="Homepage__forecast-temp Homepage__forecast-temp--low">
              {currentWeather !== null &&
                Math.round(currentWeather.main.temp_min)}
            </span>
          </div>
        </Separator>
        <div className="Homepage__main">
          <span className="Homepage__current-degrees">
            {currentWeather !== null && Math.round(currentWeather.main.temp)}
            &deg;
          </span>
          <span className="Homepage__location">{location.name}</span>
          <div className="Homepage__weather-type-container">
            <span className="Homepage__weather-type">
              {currentWeather?.weather[0].main}
            </span>
            {currentWeather !== null && (
              <WeatherIcon code={currentWeather.weather[0].icon} />
            )}
          </div>
        </div>
        <Separator text="Week Forecast" />
        {weeksForecast !== null && (
          <WeatherForecast weeksForecast={weeksForecast} />
        )}
      </div>
    </>
  );
};

export default Homepage;
