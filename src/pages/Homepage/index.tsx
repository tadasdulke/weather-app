import './index.scss';

import Spinner from '~common/Spinner';
import Separator from '~components/Separator';
import WeatherForecast from '~components/WeatherForecast';
import useLocationContext from '~hooks/useLocationContext';
import useWeatherForecast from '~hooks/useWeatherForecast';
import WeatherIcon from '~utils/findWeatherIcon';

const Homepage = () => {
  const { location } = useLocationContext();
  const { currentWeather, weeksForecast, isLoading } = useWeatherForecast(
    location.coord.lat,
    location.coord.lon
  );

  const loading =
    isLoading || currentWeather === null || weeksForecast === null;

  return (
    <>
      <div className="Homepage__background-image" />
      <div className="Homepage__wrapper">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Separator text="Day Forecast">
              <div>
                <span className="Homepage__forecast-temp Homepage__forecast-temp--high">
                  {Math.round(currentWeather.main.temp_max)}
                </span>
                <span className="Homepage__forecast-temp Homepage__forecast-temp--low">
                  {Math.round(currentWeather.main.temp_min)}
                </span>
              </div>
            </Separator>
            <div className="Homepage__main">
              <span className="Homepage__current-degrees">
                {Math.round(currentWeather.main.temp)}
                &deg;
              </span>
              <span className="Homepage__location">{location.name}</span>
              <div className="Homepage__weather-type-container">
                <span className="Homepage__weather-type">
                  {currentWeather.weather[0].main}
                </span>
                <WeatherIcon code={currentWeather.weather[0].icon} />
              </div>
            </div>
            <Separator text="Week Forecast" />
            <WeatherForecast weeksForecast={weeksForecast} />
          </>
        )}
      </div>
    </>
  );
};

export default Homepage;
