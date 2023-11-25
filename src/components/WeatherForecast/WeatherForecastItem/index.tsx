import './index.scss';

import WeatherIcon, { type WeatherIconProps } from '~utils/findWeatherIcon';

interface WeatherForecastItemProps extends WeatherIconProps {
  dayName: string;
  maxTemp: number;
  minTemp: number;
  maxTempBarHeightPercentage: number;
  minTempBarHeightPercentage: number;
}

const WeatherForecastItem = ({
  dayName,
  maxTemp,
  minTemp,
  maxTempBarHeightPercentage,
  minTempBarHeightPercentage,
  code,
}: WeatherForecastItemProps) => {
  return (
    <div className="WeatherForecastItem__container">
      <div className="WeatherForecastItem__day-name">{dayName}</div>
      <WeatherIcon className="WeatherForecastItem__icon" code={code} />
      <div>
        <span className="WeatherForecastItem__temp WeatherForecastItem__temp--max">
          {maxTemp}
        </span>
        <span className="WeatherForecastItem__temp">{minTemp}</span>
      </div>
      <div className="WeatherForecastItem__bar-container">
        <div
          style={{ height: `${maxTempBarHeightPercentage}%` }}
          className="WeatherForecastItem__bar WeatherForecastItem__bar--high"
        />
        <div
          style={{ height: `${minTempBarHeightPercentage}%` }}
          className="WeatherForecastItem__bar WeatherForecastItem__bar--low"
        />
      </div>
    </div>
  );
};

export default WeatherForecastItem;
