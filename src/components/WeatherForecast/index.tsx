import WeatherForecastItem from './WeatherForecastItem';

import './index.scss';

const WeatherForecast = () => {
  return (
    <div className="WeatherForecast__container">
      {[
        {
          dayName: 'FRI',
          maxTemp: 6,
          minTemp: 3,
        },
        {
          dayName: 'SAT',
          maxTemp: 6,
          minTemp: 3,
        },
        {
          dayName: 'SAT',
          maxTemp: 6,
          minTemp: 3,
        },
        {
          dayName: 'SAT',
          maxTemp: 6,
          minTemp: 3,
        },
        {
          dayName: 'SAT',
          maxTemp: 6,
          minTemp: 3,
        },
        {
          dayName: 'SAT',
          maxTemp: 6,
          minTemp: 3,
        },
        {
          dayName: 'SAT',
          maxTemp: 6,
          minTemp: 3,
        },
      ].map(({ dayName, maxTemp, minTemp }) => (
        <WeatherForecastItem
          key={dayName}
          dayName={dayName}
          maxTemp={maxTemp}
          minTemp={minTemp}
        />
      ))}
    </div>
  );
};

export default WeatherForecast;
