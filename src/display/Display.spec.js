// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Display from './Display';
// import {props} from './Display';
import '@testing-library/jest-dom/extend-expect';




test('Should render Display component successfully', () => {
    render(<Display />)
})

test('Display default state is open and unlocked', () => {
    render(<Display />)
    expect(Display.defaultProps.closed).toBe(false)
    expect(Display.defaultProps.locked).toBe(false)
})

test('If gate is locked, display locked', () => {
    const { getByText } = render(<Display locked={true} />)
    expect(getByText('Locked'))
})

test('If gate is unlocked, display unlocked', () => {
    const { getByText } = render(<Display locked={false} />)
    expect(getByText('Unlocked'))
})

test('If gate is closed, display closed', () => {
    const { getByText } = render(<Display closed = {true} />)
    expect(getByText('Closed'))
})

test('If gate is open, display open', () => {
    const { getByText } = render(<Display closed = {false} />)
    expect(getByText('Open'))
})

test('If gate is locked, display className should be red-led', () => {
   const {getByTestId} =  render(<Display locked={true} />)
    const displayElement = getByTestId('disp1');
    expect(displayElement).toHaveClass('red-led');
})


test('If gate is locked, display className should be green-led', () => {
    const {getByTestId} =  render(<Display locked={true} />)
     const displayElement = getByTestId('disp2');
     expect(displayElement).toHaveClass('green-led');
 })