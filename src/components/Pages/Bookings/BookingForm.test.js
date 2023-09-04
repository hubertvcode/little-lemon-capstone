import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import userEvent from '@testing-library/user-event';
import BookingForm from './BookingForm';
import { FormContext } from '../../BookingMainLayout';

let  date, availableTimes, numberDiners, tablesType, occasions ;

const mockSubmitForm = jest.fn();
const currentDate = new Date();
const formattedCurrentDate = currentDate.toLocaleDateString('en-us');

const myFormData = {
  date: currentDate,
  time: '17:00',
  diners: 2,
  tableLocation: 'Indoor',
  occasion: 'Birthday',
  specialRequest: 'Test special request'
};

const setMyFormData = jest.fn((newData) => {
  myFormData = { ...myFormData, ...newData };
});

date= currentDate,
availableTimes= ['17:00', '17:30', '18:00']
numberDiners= [1, 2, 4],
tablesType= ['Indoor', 'Outdoor'],
occasions= ['Birthday', 'Anniversary'],
handleDateChange= jest.fn(),

test('BookingForm renders correctly and submits form', async () => {
    render(
      <Router> {/* Wrap with BrowserRouter */}
        <FormContext.Provider value={{ myFormData, setMyFormData, availableTimes, date, numberDiners, tablesType, occasions, handleDateChange}}>
          <BookingForm />
        </FormContext.Provider>
      </Router>
    );
  

  // Test form rendering
  const dateInput = screen.getByLabelText('Date *');
  const timeSelect = screen.getByLabelText('Time of Reservation *');
  const dinersSelect = screen.getByLabelText('Number of Guests *');
  const tableLocationSelect = screen.getByLabelText('Table Location (optional)');
  const occasionSelect = screen.getByLabelText('Special occasion? (optional)');
  const specialRequestTextarea = screen.getByLabelText('Special requests');
  const continueButton = screen.getByText('Continue');

  
  act (() => {
    // Simulate user input
    userEvent.type(dateInput, currentDate); // Adjust date format as needed
    userEvent.selectOptions(timeSelect, '17:00');
    userEvent.selectOptions(dinersSelect, '2');
    userEvent.selectOptions(tableLocationSelect, 'Indoor');
    userEvent.selectOptions(occasionSelect, 'Birthday');
    userEvent.type(specialRequestTextarea, 'Test special request');
  });
  
  // Log form state to console
  console.log('Mock My Form Data after fireEvents:', myFormData);

  act (() => {
  // Submit the form
  fireEvent.click(continueButton);
});

  // ASSERTIONS

  // Verify that the handleDateChange function was called
  expect(setMyFormData).toHaveBeenCalled();

  // Verify that the form context function setMyFormData was called with the correct values
  expect(setMyFormData).toHaveBeenCalledWith({
    date: currentDate,
    time: '17:00',
    diners: 2,
    tableLocation: 'Indoor',
    occasion: 'Birthday',
    specialRequest: 'Test special request',
  });

});
