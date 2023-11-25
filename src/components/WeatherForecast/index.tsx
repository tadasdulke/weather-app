import WeatherForecastItem from './WeatherForecastItem';
import { type WeeksForecastList } from '~api/types';
import getNameOfTheDay from '~utils/getNameOfTheDay';
import './index.scss';

interface WeatherForecastProps {
  weeksForecast: WeeksForecastList;
}

const WeatherForecast = ({ weeksForecast }: WeatherForecastProps) => {
  const highestTemps = weeksForecast.list.map(({ temp }) => temp.max);
  const highestTemperature = Math.max(...highestTemps);

  return (
    <div className="WeatherForecast__container">
      {weeksForecast.list.map(({ dt, temp, weather }) => (
        <WeatherForecastItem
          key={dt}
          dayName={getNameOfTheDay(new Date(dt)).slice(0, 3).toUpperCase()}
          maxTemp={temp.max}
          minTemp={temp.min}
          maxTempBarHeightPercentage={(temp.max / highestTemperature) * 100}
          minTempBarHeightPercentage={(temp.min / highestTemperature) * 100}
          code={weather[0].icon}
        />
      ))}
    </div>
  );
};

export default WeatherForecast;
