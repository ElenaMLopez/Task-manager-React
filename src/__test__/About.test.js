import { render, screen } from '@testing-library/react';
import About from '../components/About';
import { MemoryRouter } from 'react-router-dom';


test('Page is render', () => { 
  render(<About/>, {wrapper: MemoryRouter});

  const title = screen.getByText(/About/i);
  expect(title).toBeInTheDocument()
})