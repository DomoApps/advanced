import React from 'react';
import { render } from '@testing-library/react';
import App from '.';

describe('When rendering App', () => {
  it('should render', () => {
    const { getAllByRole } = render(
        <App />,
    );

    expect(getAllByRole('generic')).toBeTruthy();
  });
});
