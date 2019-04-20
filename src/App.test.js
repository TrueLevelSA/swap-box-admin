import React from 'react';
import ReactDOM from 'react-dom';
// import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import App from './App';

describe('App.js', () => {
  const mockStore = configureMockStore();
  const store = mockStore({});

  it('renders without crashing', () => {
    const div = document.createElement('div')
    const TestProvider = () => (
      <Provider store={store}>
        <App />
      </Provider>
    )

    ReactDOM.render(<TestProvider />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
