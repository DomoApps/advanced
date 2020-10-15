import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'reducers';
import App from '.';

describe('When rendering the App', () => {
  it('should render the learn react link', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(getByText(/learn/i)).toBeInTheDocument();
  });
});
