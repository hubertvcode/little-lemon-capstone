import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingReview from './BookingReview';
import { FormContext } from '../../BookingMainLayout';  // Import the actual FormContext here
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

describe('BookingReview', () => {
  
  const mockSubmitForm = jest.fn();
  const currentDate = new Date();
  const formattedCurrentDate = currentDate.toLocaleDateString('en-us');

  const mockFormData = {
    date: currentDate,
    time: '18:00',
    diners: 2,
    tableLocation: 'Outdoor',
    occasion: 'Birthday',
    fname: 'John',
    lname: 'Doe',
    email: 'john.doe@example.com',
    phone: '1234567890',
    specialRequest: 'Window Seat'
  };


  const mockConfOptions = {
    emailOption: 'Email',
    textOption: 'Text'
  };

  beforeEach(() => {
    render(
      <Router>
        <FormContext.Provider value={{
          myFormData: mockFormData,
          confOptions: mockConfOptions,
          submitForm: mockSubmitForm
        }}>
          <BookingReview />
        </FormContext.Provider>
      </Router>
    );
  });


  it('displays correct date', () => {
  
    expect(screen.getByText(formattedCurrentDate)).toBeInTheDocument(); 

  });

  it('displays correct time', () => {
   
    expect(screen.getByText('18:00')).toBeInTheDocument();

  });

  it('displays correct number of diners', () => {
   
    expect(screen.getByText('2')).toBeInTheDocument();

  });

  it('displays correct occasion', () => {
  
    expect(screen.getByText('Birthday')).toBeInTheDocument();
 
  });

  // ... More tests for other form fields
  
  it('displays correct confirmation options', () => {
   
    expect(screen.getByText('Email and Text')).toBeInTheDocument();

  });

  it('calls submitForm function when Reserve button is clicked', () => {
    // act(() => {
      
    userEvent.click(screen.getByText('Reserve'));
  // })

    expect(mockSubmitForm).toHaveBeenCalledTimes(1);
  });

  test('should navigate back to /bookings/bookingcontactinfo when clicking on the Back button', () => {

    const backLink = screen.getByText(/Back/i);
    expect(backLink.getAttribute('href')).toBe('/bookings/bookingcontactinfo');

  });

});
