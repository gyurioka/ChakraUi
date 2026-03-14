// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChakraUiReact title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChakraUiReact/i);
    expect(titleElement).toBeInTheDocument();
});
