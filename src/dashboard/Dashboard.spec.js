// Test away
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DashBoard from './Dashboard';
import Display from '../display/Display';
import Controls from '../controls/Controls';



test('Should render dashboard component correctly', () => {
    render(<DashBoard />)
});

test('Should render display and controls correctly', () => {
    render(<Display />)
    render(<Controls/>)
});


test('Default state is open and unlocked', () => {
    const { getByText } = render(<DashBoard />)
    expect(getByText(/open/i))
    expect(getByText(/unlocked/i))
})


test('Cannot be closed or opened if it is locked', () => {
    const toggleLocked = jest.fn();
    const toggleClosed = jest.fn();

    const { getByText } = render(<Display
        locked={true}
        closed={true}
    />)

    render(<Controls
        locked={true}
        closed={true}
        toggleClosed={toggleClosed}
        toggleLocked={toggleLocked}
    />)
  
    const toggleOpenButton = getByText(/open gate/i);


    if(getByText('Locked')){
        fireEvent.click(toggleOpenButton)
        expect(toggleClosed).not.toHaveBeenCalled()
    }

})