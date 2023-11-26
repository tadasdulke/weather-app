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
const WeatherIcon = ({ code, ...restProps }: WeatherIconProps) => {
  let IconElement = RainIcon;

  if (code === '01n') {
    IconElement = SunnyIcon;
  }

  if (code === '02n') {
    IconElement = SunnyWithClouds;
  }

  if (['03n', '04n'].includes(code)) {
    IconElement = CloudsIcon;
  }

  return <IconElement {...restProps} />;
};

export default WeatherIcon;
