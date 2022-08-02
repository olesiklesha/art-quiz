import { FC, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: JSX.Element | JSX.Element[];
}

const Portal: FC<PortalProps> = ({ children }) => {
  const el = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(el);

    return () => {
      document.body.removeChild(el);
    };
  });
  return ReactDOM.createPortal(children, el);
};

export default Portal;
