import React from 'react';
import QRCode from 'qrcode.react';
import { Link } from 'react-router-dom';
import { defaultProps } from 'grommet';
import styled from 'styled-components';

import { theme } from 'theme';
import { pathByName, routes } from 'routes';

const SContainer = styled('div')`
  border: 1px solid
    ${props => props.borderColor || defaultProps.theme.global.colors.brand};
  height: ${theme.qrCode.size}px;
  width: ${theme.qrCode.size}px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const SQRCode = styled(QRCode)``;

export default ({ address, borderColor }) => {
  const paths = pathByName(routes);
  return (
    <SContainer borderColor={borderColor}>
      {address ? (
        <SQRCode
          value={address}
          includeMargin
          renderAs="svg"
          size={theme.qrCode.size}
        />
      ) : (
        <Link to={paths.deploy}>Deploy a new contract</Link>
      )}
    </SContainer>
  );
};
