import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications Component', () => {
    it('renders without crashing', () => {
        render(<Notifications />);
    });

    it('renders three list items', () => {
        const { container } = render(<Notifications />);
        const listItems = container.querySelectorAll('li');
        expect(listItems.length).toBe(3);
    });

    it('renders the text "Here is the list of notifications"', () => {
        const { getByText } = render(<Notifications />);
        expect(getByText('Here is the list of notifications')).toBeInTheDocument();
    });
});
