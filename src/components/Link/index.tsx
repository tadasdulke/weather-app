import { LinkProps, Link as ReactRouterLink } from 'react-router-dom';

import './index.scss';

const Link = (props: LinkProps) => (
  <ReactRouterLink className="Link" {...props} />
);

export default Link;
