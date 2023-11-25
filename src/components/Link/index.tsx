import './index.scss';

import { Link as ReactRouterLink,type LinkProps } from 'react-router-dom';

const Link = (props: LinkProps) => (
  <ReactRouterLink className="Link" {...props} />
);

export default Link;
