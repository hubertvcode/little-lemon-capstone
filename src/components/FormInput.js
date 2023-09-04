import { useState } from "react";
import { useContext} from 'react';
import { FormContext } from './BookingMainLayout';
// import "./formInput.css";

const FormInput = (props) => {

  const { errorM } = useContext(FormContext);
  const [focused, setFocused] = useState(false);
  const { labelText, labelId, htmlFor, onChange, id, testId, name, ...inputProps } = props;

  
  const handleFocus = (e) => {
    setFocused(true);
 
    // console.log(`Is the input ${e.target.id} focused?: ${focused}`)

    const inputRed = document.getElementById(e.target.id)
    if (errorM[e.target.id]){
      inputRed.classList.add("invalid")
    } else {
      inputRed.classList.remove("invalid")
    }

  };
  

  return (
    <>
      <label id={labelId} htmlFor={htmlFor}>{labelText}
      <input
        {...inputProps}
        id={id}
        data-testid={testId}
        name={name}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          name === "phone" && setFocused(true)
        }
        focused={focused.toString()}
        aria-errormessage={focused && errorM[name] ? true : false}
        aria-label={labelText}
      />
      { focused && errorM[name] ? <p className="errormessage">{errorM[name]}</p> : null}
      </label>
    </>
  );
};

export default FormInput;
