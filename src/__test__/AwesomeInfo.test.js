import { render, screen } from '@testing-library/react';
import AwesomeInfo from '../components/AwesomeInfo';
import { MemoryRouter } from 'react-router-dom';


test('Page is render', () => { 
  render(<AwesomeInfo/>, {wrapper: MemoryRouter});

  const title = screen.getByText(/Awesome Info/i);
  expect(title).toBeInTheDocument()
})