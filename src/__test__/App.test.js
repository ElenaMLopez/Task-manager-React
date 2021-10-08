import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('renders title Task Manager', () => {
  render(<App />);
  const title = screen.getByText(/Task Manager/i);
  expect(title).toBeInTheDocument();
});
test('There is a button to add a task', () =>{
  render(<App />);
  const button = screen.getByText(/Add/i);
  expect(button).toBeInTheDocument();
})
test('There is a button to close the form', async () =>{
  render(<App />);
  const button = screen.getByText(/Add/i);
  userEvent.click(button)
  const closeButton = await screen.getByText(/Close/i);
  expect(closeButton).toBeInTheDocument();
})
test('There is a button to save a task in the form', async()=> {
  render(<App />);
  const button = screen.getByText(/Add/i);
  userEvent.click(button);
  const saveButton = await screen.getByText(/Save Task/i)
  expect(saveButton).toBeInTheDocument();
})

test('If user can add info for a new task', async() => {
  render(<App />);
  const button = screen.getByText(/Add/i);
  userEvent.click(button);
  const taskNameInput = await screen.getByPlaceholderText(/Add Task/i)
  userEvent.type(taskNameInput, 'Test');
  expect(taskNameInput).toHaveValue('Test')
})
test('If user can add a date for a new task', async () => {
  render(<App />);
  const button = screen.getByText(/Add/i);
  userEvent.click(button);
  const taskNameInput = await screen.getByPlaceholderText(/Add Day & Time/i)
  userEvent.type(taskNameInput, '3 January 2025');
  expect(taskNameInput).toHaveValue('3 January 2025')
})