import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { FormContext } from '../../BookingMainLayout';
import BookingContactInfo from './BookingContactInfo';
import { waitFor } from '@testing-library/react';

describe('BookingContactInfo', () => {
  let setMyFormData, setErrorM, myFormData, errorM, confOptions, setConfOptions;

  beforeEach(() => {
    setMyFormData = jest.fn();
    setErrorM = jest.fn();
    setConfOptions = jest.fn();
    myFormData = {
      fname: '',
      lname: '',
      email: '',
      phone: ''
    };
    errorM = {};
    confOptions = { emailOption: "Email" };

    render(
      <MemoryRouter initialEntries={['/bookings/bookingcontactinfo']}>
        <FormContext.Provider value={{ myFormData, setMyFormData, setErrorM, errorM, confOptions, setConfOptions }}>
          <Routes>
            <Route path="/bookings/bookingcontactinfo" element={<BookingContactInfo />} />
          </Routes>
        </FormContext.Provider>
      </MemoryRouter>
    );
  });

  test('should render input fields correctly', () => {
    expect(screen.getByLabelText(/First Name */i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name */i)).toBeInTheDocument();
    expect(screen.getByLabelText('mail*')).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone */i)).toBeInTheDocument();
  });

  test('should disable the continue button if there are errors', async () => {
    act(() => {
      fireEvent.change(screen.getByLabelText(/First Name */i), { target: { value: 'John1' } });
      fireEvent.change(screen.getByLabelText(/Last Name */i), { target: { value: '' } });
      fireEvent.change(screen.getByLabelText('mail*'), { target: {value: 'notAnEmail'} });
      fireEvent.change(screen.getByLabelText(/Phone */i), { target: { value: '123' } });
    });

    const button = screen.getByText(/Continue/i);
    expect(button).toBeDisabled();
  });

  test('should enable the continue button if there are no errors', async () => {
    act(() => {
      fireEvent.change(screen.getByLabelText(/First Name */i), { target: { value: 'John' } });
      fireEvent.change(screen.getByLabelText(/Last Name */i), { target: { value: 'Dole' } });
      fireEvent.change(screen.getByLabelText('mail*'), { target: { value: 'jhon@hotmail.com' } });
      fireEvent.change(screen.getByLabelText(/Phone */i), { target: { value: '3054500000' } });
    });

    const button = screen.getByRole('button');
    expect(button.getAttribute("disabled")).toBe('')
 
  });

  test('should navigate back to /bookings when clicking on the Back button', () => {
    const backLink = screen.getByText(/Back/i);
    expect(backLink.getAttribute('href')).toBe('/bookings');
  });
});

