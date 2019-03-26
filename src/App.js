import React from 'react'
import { renderRoutes } from "react-router-config"
import { Grommet, Box } from 'grommet'

import { GrommetTheme } from './theme'
import { Header, Wrapper } from 'components'

const App = ({ route }) => {
  return (
    <Grommet theme={GrommetTheme} full>
      <Box fill>
        <Header />
        <Box>
          <Wrapper>
            { renderRoutes(route.routes) }
          </Wrapper>
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
