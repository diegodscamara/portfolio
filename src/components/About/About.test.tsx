import { fireEvent, render } from '@testing-library/react';

import About from './About';
import React from 'react';

describe('About component', () => {
  test('should copy email to clipboard when button is clicked', async () => {
    const { getByRole, getByText } = render(<About />);

    // Click the copy email button
    const copyButton = getByRole('button', { name: 'Copy email address' });
    fireEvent.click(copyButton);

    // Verify that the tooltip appears
    const tooltip = await waitFor(() => getByText('E-mail copied to clipboard!'));
    expect(tooltip).toBeVisible();
  });
});