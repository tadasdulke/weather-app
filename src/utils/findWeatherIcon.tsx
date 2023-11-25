import CloudsIcon from '~images/weater-icons/clouds.svg';
import RainIcon from '~images/weater-icons/rain.svg';
import SunnyIcon from '~images/weater-icons/sunny.svg';
import SunnyWithClouds from '~images/weater-icons/sunny-with-clouds.svg';

export enum WeatherIconCodeEnum {
  ClearSky = '01n',
  FewClouds = '02n',
  ScatteredClouds = '03n',
  BrokenClouds = '04n',
  ShowerRain = '09n',
  Rain = '10n',
  Thunderstorm = '11n',
  Snow = '13n',
  Mist = '50n',
}

export type WeatherIconCode = `${WeatherIconCodeEnum}`;

export interface WeatherIconProps extends React.SVGAttributes<SVGElement> {
  code: WeatherIconCode;
}

/// / transfer this
const WeatherIcon = ({ code, ...restProps }: WeatherIconProps) => {
  if (code === '01n') {
    return <SunnyIcon {...restProps} />;
  }

  if (code === '02n') {
    return <SunnyWithClouds {...restProps} />;
  }

  if (['03n', '04n'].includes(code)) {
    return <CloudsIcon {...restProps} />;
  }

  return <RainIcon {...restProps} />;
};

export default WeatherIcon;
