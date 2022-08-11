import styled from 'styled-components';
import { Wrapper } from '../../components/Game-dialog/styles';

export const SettingsWrapper = styled(Wrapper)`
  max-width: 1440px;
  margin: 0 auto;
  @media (min-width: 600px) {
    padding: 40px 30px 0;
  }

  @media (min-width: 1024px) {
    padding: 40px 70px 0;
  }
`;
