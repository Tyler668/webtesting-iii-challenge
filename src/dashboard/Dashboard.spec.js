// Test away
import React from 'react';
import { render } from '@testing-library/react';
import DashBoard from './Dashboard';




test('Should render dashboard component correctly', () => {
    render(<DashBoard />)
});

test('Default state is open and unlocked', () => {
    const { getByText } = render(<DashBoard />)
    expect(getByText(/open/i))
    expect(getByText(/unlocked/i))
})




