import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
    it('renders without crashing', () => {
        render(<App />);
    });

    it('renders a div with the class App-header', () => {
        const { container } = render(<App />);
        const header = container.querySelector('.App-header');
        expect(header).toBeInTheDocument();
    });

    it('renders a div with the class App-body', () => {
        const { container } = render(<App />);
        const body = container.querySelector('.App-body');
        expect(body).toBeInTheDocument();
    });

    it('renders a div with the class App-footer', () => {
        const { container } = render(<App />);
        const footer = container.querySelector('.App-footer');
        expect(footer).toBeInTheDocument();
    });
});
