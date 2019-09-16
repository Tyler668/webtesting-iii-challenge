// Test away!
import React from 'react';
import { render, fireEvent, getByText } from '@testing-library/react';
import Controls from './Controls';
import Display from '../display/Display';


test('Should render Display component successfully', () => {
    render(<Controls />)
})


