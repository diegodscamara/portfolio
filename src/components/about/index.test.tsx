import { fireEvent, render, waitFor } from '@testing-library/react';

import About from './index';
import React from 'react';

describe('About component', () => {
  test('should copy email to clipboard when button is clicked', async () => {
    const { getByRole, getByText } = render(<About />);

    // Click the copy email button
    const copyButton = getByRole('button', { name: 'Copy email address' });
    fireEvent.click(copyButton);

    // Wait for the tooltip to appear
    const tooltip = await waitFor(() => getByText('E-mail copied to clipboard!'));

    // Verify that the tooltip appears
    expect(tooltip).toBeVisible();
  });
});