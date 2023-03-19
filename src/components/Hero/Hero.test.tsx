import { render, screen } from '@testing-library/react';

import Hero from './Hero';
import React from 'react';

describe('Hero', () => {
  test('renders title, subtitle, and link', () => {
    render(<Hero />);
    const title = screen.getByText(/Diego Câmara/i);
    const subtitle = screen.getByText(/Front End Developer/i);
    const link = screen.getByText(/Get in touch/i);

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#Contact');
  });
});
