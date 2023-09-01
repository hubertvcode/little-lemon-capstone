import { render, screen } from "@testing-library/react";
import BookingContactInfo from "./BookingContactInfo";

test('Renders the BookingContactInfo', () => {
    render(<BookingContactInfo />);
    const continueBtn = screen.getByRole('button');
    expect(continueBtn).toBeInTheDocument();
})


// describe('Booking form', () => {
//   const availableTimes = ['17:00', '17:30']
//   const today = new Date()


//   test('should correctly render all fields and their default values', async () => {
//     render(
//     //   <BookingForm availableTimes={availableTimes}  />
//       <BookingForm  />
//     );

//     const numberOfGuestsSelect = await screen.findAllByTestId('diners-option');
//     const dateInput = screen.getByLabelText(/Date */);
//     const timeSelect = screen.getByLabelText(/Time */);
//     const timeOptions = await screen.findAllByTestId('booking-time');
//     const occasionOptions = screen.findAllByTestId(`occasion-option`);
//     const occasionSelect = screen.getByLabelText(/Special occasion? (optional)/);
//     const continueLink = screen.getByRole('NavLink');

//     expect(dateInput).toBeInTheDocument();
//     expect(dateInput).toHaveAttribute('name', 'date');
//     expect(dateInput).toHaveAttribute('id', 'date');
//     expect(dateInput).toHaveValue(today);

//     expect(timeSelect).toBeInTheDocument();
//     expect(timeSelect).toHaveAttribute('id', 'reserved-time');
//     expect(timeOptions.length).toBe(2);

//     expect(numberOfGuestsSelect).toBeInTheDocument();
//     expect(numberOfGuestsSelect).toHaveAttribute('id', 'diners');
//     expect(numberOfGuestsSelect.length).toBe(10);

//     expect(occasionSelect).toBeInTheDocument();
//     expect(occasionSelect).toHaveAttribute('id', 'special-occasion');
//     expect(occasionOptions.length).toBe(4);

 
//   });

//   test('should successfully submit form with default values', () => {
//     render(
//       <BookingForm availableTimes={availableTimes} submitData={submitData} />
//     );

//     const submitButton = screen.getByRole('button');
//     fireEvent.click(submitButton);

//     expect(submitData).toHaveBeenCalledWith({ 
//       date: today, 
//       time: availableTimes[0], 
//       numberOfGuests: 1, 
//       occasion: 'Birthday', 
//     });
//   });

//   test(
//     `should display an error message and disable sumbit button when date 
//     field's value is empty`, () => {
//     render(
//       <BookingForm 
//         availableTimes={availableTimes} 
//         dispatchOnDateChange={dispatchOnDateChange} 
//         submitData={submitData} 
//       />
//     );

//     const dateInput = screen.getByLabelText(/Date/);
//     fireEvent.change(dateInput, { target: { value: '' } });
//     fireEvent.blur(dateInput);
//     const errorMessage = screen.getByTestId('error-message');
//     const submitButton = screen.getByRole('button');

//     expect(errorMessage).toBeInTheDocument();
//     expect(errorMessage).toHaveTextContent('Please choose a valid date');
//     expect(submitButton).toBeDisabled();
//   });

//   test(
//     `should display an error message and disable sumbit button when number of  
//     guests field's value is empty`, () => {
//     render(
//       <BookingForm 
//         availableTimes={availableTimes} 
//         dispatchOnDateChange={dispatchOnDateChange} 
//         submitData={submitData} 
//       />
//     );

//     const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
//     fireEvent.change(numberOfGuestsInput, { target: { value: '' } });
//     fireEvent.blur(numberOfGuestsInput);
//     const errorMessage = screen.getByTestId('error-message');
//     const submitButton = screen.getByRole('button');

//     expect(errorMessage).toBeInTheDocument();
//     expect(errorMessage).toHaveTextContent('Please enter a number between 1 and 10');
//     expect(submitButton).toBeDisabled();
//   });
// });