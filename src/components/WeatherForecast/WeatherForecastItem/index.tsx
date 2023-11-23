import WeatherIcon from '~utils/findWeatherIcon';

import './index.scss';

interface WeatherForecastItemProps {
  dayName: string;
  maxTemp: number;
  minTemp: number;
}

const WeatherForecastItem = ({
  dayName,
  maxTemp,
  minTemp,
}: WeatherForecastItemProps) => {
  return (
    <div className="WeatherForecastItem__container">
      <div className="WeatherForecastItem__day-name">{dayName}</div>
      <WeatherIcon className="WeatherForecastItem__icon" code="01n" />
      <div>
        <span className="WeatherForecastItem__temp WeatherForecastItem__temp--max">
          {maxTemp}
        </span>
        <span className="WeatherForecastItem__temp">{minTemp}</span>
      </div>
      <div className="WeatherForecastItem__bar-container">
        <div
          style={{ height: '40px' }}
          className="WeatherForecastItem__bar WeatherForecastItem__bar--high"
        />
        <div
          style={{ height: '30px' }}
          className="WeatherForecastItem__bar WeatherForecastItem__bar--low"
        />
      </div>
    </div>
  );
};

export default WeatherForecastItem;
