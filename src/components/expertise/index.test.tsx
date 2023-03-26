import { render, screen } from '@testing-library/react';

import Expertise from './Expertise';
import React from 'react';

describe('Expertise component', () => {
  it('renders the title', () => {
    render(<Expertise />);
    const titleElement = screen.getByText(/expertise/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders all the cards', () => {
    render(<Expertise />);
    const cardElements = screen.getAllByRole('article');
    expect(cardElements.length).toBe(3);
  });

  it('renders the card title and description', () => {
    render(<Expertise />);
    const cardElements = screen.getAllByRole('article');

    cardElements.forEach((cardElement, index) => {
      const titleElement = screen.getByText(cards[index].title);
      const descriptionElement = screen.getByText(cards[index].description);
      expect(titleElement).toBeInTheDocument();
      expect(descriptionElement).toBeInTheDocument();
    });
  });
});