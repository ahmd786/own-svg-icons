import { Home } from '../src/icons/Home';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Home Icon Component', () => {
  it('should render the SVG icon correctly', () => {
    render(<Home />);
    const svgElement = screen.getByRole('img', { hidden: true });
    expect(svgElement).toBeInTheDocument();
  });

  it('should apply container and svg classes from the className prop', () => {
    const classes = 'h-10 w-10 text-blue-500';
    render(<Home className={classes} />);
    const svgElement = screen.getByRole('img', { hidden: true });
    const containerElement = svgElement.parentElement;
    expect(containerElement).toHaveClass('h-10 w-10');
    expect(svgElement).toHaveClass('text-blue-500');
  });
});
