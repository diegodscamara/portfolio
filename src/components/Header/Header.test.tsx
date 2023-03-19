import { render, screen } from '@testing-library/react';

import Header from '../Header';

describe('Header component', () => {
  test('renders all nav links', () => {
    render(<Header />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(7);
  });
});
