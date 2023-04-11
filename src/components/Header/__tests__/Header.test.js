import { render, screen } from '@testing-library/react';
import Header from '../Header';

// it('should render same text passed into title prop', () => {
//   render(<Header title="My header"/>);
//   const headingElement = screen.getByText(/my header/i);
//   expect(headingElement).toBeInTheDocument();
// });

it('should render same text passed into title prop', () => {
  render(<Header title="My Header"/>);
  const headingElement = screen.getByRole("heading", { name: "My Header"});
  expect(headingElement).toBeInTheDocument();
});

it('should have a title Header', () => {
  render(<Header title="My Header"/>);
  const headingElement = screen.getByTitle("Header");
  expect(headingElement).toBeInTheDocument();
});

it('tested headers should be in the document', () => {
  render(<Header title="My Header"/>);
  const headingElement = screen.getByTestId("header-2");
  expect(headingElement).toBeInTheDocument();
});

// Find by

it('should be in the document', async () => {
  render(<Header title="My header"/>);
  const headingElement = await screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// Query by

it('should not be on the screen', () => {
  render(<Header title="My header"/>);
  const headingElement = screen.queryByText(/dogs/i);
  expect(headingElement).not.toBeInTheDocument();
});

it('check if there is two headings', () => { 
  render(<Header title="My header"/>);
  const headingElements = screen.getAllByRole("heading");
  expect(headingElements.length).toBe(2);
});