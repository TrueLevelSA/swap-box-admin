import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Box } from 'grommet'

import { Header } from 'components'
import Routes from 'routes'
import { Wrapper } from 'components'

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Box>
        <Wrapper>
          <Switch>
            <Route exact path={Routes.root.path} component={Routes.root.component}/>
            <Route exact path={Routes.home.path} component={Routes.home.component}/>
            <Route exact path={Routes.deploy.path} component={Routes.deploy.component}/>
            <Route exact path={Routes.connect.path} component={Routes.connect.component}/>
          </Switch>
        </Wrapper>
      </Box>
    </React.Fragment>
  );
}

export default App;
