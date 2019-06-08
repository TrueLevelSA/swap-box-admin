import React, { Component } from 'react';
import styled from 'styled-components';
import copy from 'copy-to-clipboard';
import ReactTooltip from 'react-tooltip';
import { Box, Text, defaultProps } from 'grommet';

const SContainer = styled(Box)`
  display: inline;
  &:hover {
    background: ${props =>
      props.invertStyle
        ? 'white'
        : defaultProps.theme.global.colors['light-3']};
  }
`;
const SText = styled(Text)`
  letter-spacing: -0.15em;
  margin-right: 0.1em;
`;

const addrLength = 42;
const visible = 10;

const addressStart = address =>
  `${address.substr(0, Math.ceil(visible / 2) + 2)}`;

const addressEnd = address =>
  `${address.substr(addrLength - Math.floor(visible / 2), addrLength)}`;

class EthAddress extends Component {
  constructor() {
    super();
    this.hoverTipRef = React.createRef();
  }

  render() {
    const {
      size = 'medium',
      address = '',
      invertStyle = false,
      bold = false,
      inline = false,
    } = this.props;

    return (
      <>
        <SContainer
          data-tip
          data-for="copyToClipboard"
          ref={this.hoverTipRef}
          invertStyle={invertStyle}
          pad={inline ? 'small' : 'xsmall'}
          round="xsmall"
          onClick={async () => {
            await copy(address);
            const node = this.hoverTipRef.current;
            ReactTooltip.show(node);
            setTimeout(() => ReactTooltip.hide(node), 800);
          }}
        >
          <Text size={size} weight={bold ? 'bold' : 'normal'}>
            {addressStart(address)}
          </Text>
          <SText size={size} weight={bold ? 'bold' : 'normal'}>
            ...
          </SText>
          <Text size={size} weight={bold ? 'bold' : 'normal'}>
            {addressEnd(address)}
          </Text>
        </SContainer>
        <ReactTooltip id="copyToClipboard" place="bottom" event="none">
          <Text size="xsmall">Copied!</Text>
        </ReactTooltip>
      </>
    );
  }
}

export default EthAddress;
