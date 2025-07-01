import { describe, it, expect } from 'vitest';
import { parseIconClasses } from '../src/lib/parser';

describe('parseIconClasses', () => {
  it('should return empty strings if no className is provided', () => {
    const { containerClasses, svgClasses } = parseIconClasses();
    expect(containerClasses).toBe('');
    expect(svgClasses).toBe('');
  });

  it('should separate container and svg classes correctly', () => {
    const className = 'h-10 w-10 bg-red-500 text-white';
    const { containerClasses, svgClasses } = parseIconClasses(className);
    expect(containerClasses).toBe('h-10 w-10 bg-red-500');
    expect(svgClasses).toBe('text-white');
  });

  it('should handle only container classes', () => {
    const className = 'h-12 w-12 rounded-full';
    const { containerClasses, svgClasses } = parseIconClasses(className);
    expect(containerClasses).toBe('h-12 w-12 rounded-full');
    expect(svgClasses).toBe('');
  });

  it('should handle only svg classes', () => {
    const className = 'text-green-500';
    const { containerClasses, svgClasses } = parseIconClasses(className);
    expect(containerClasses).toBe('');
    expect(svgClasses).toBe('text-green-500');
  });

  it('should handle multiple svg class prefixes', () => {
    const className = 'h-8 w-8 text-blue-300';
    const { containerClasses, svgClasses } = parseIconClasses(className);
    expect(containerClasses).toBe('h-8 w-8');
    expect(svgClasses).toBe('text-blue-300');
  });

  it('should handle empty input', () => {
    const { containerClasses, svgClasses } = parseIconClasses('');
    expect(containerClasses).toBe('');
    expect(svgClasses).toBe('');
  });
});
