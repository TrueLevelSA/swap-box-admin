import React, { PureComponent } from 'react'
import styled from 'styled-components'
import theme from 'theme'

const Wrapped = styled.div`
  width: ${theme.maxWidth};
  margin: 0 auto
`
class Wrapper extends PureComponent {
  render() {
    return (
      <Wrapped>
      { this.props.children }
      </Wrapped>
    )
  }
}

export default Wrapper
