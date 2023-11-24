import CloudsIcon from '~images/weater-icons/clouds.svg';
import RainIcon from '~images/weater-icons/rain.svg';
import SunnyIcon from '~images/weater-icons/sunny.svg';
import SunnyWithClouds from '~images/weater-icons/sunny-with-clouds.svg';

export type WeatherIconCode =
  | '01n'
  | '02n'
  | '03n'
  | '04n'
  | '09n'
  | '10n'
  | '11n'
  | '13n'
  | '50n';

interface WeatherIconProps extends React.SVGAttributes<SVGElement> {
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
