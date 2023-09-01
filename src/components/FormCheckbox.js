import React from 'react';

function FormCheckbox(props) {

  const { labelText, labelId, htmlFor, onChange, id, name, value, ...inputProps } = props;
  
  return (
    <>
      <label id={labelId} htmlFor={htmlFor}>{labelText}
      <input
        {...inputProps}
        id={id}
        onChange={onChange}
        name={name}
        value={value}
    
      />
      </label>
    </>
    
  );
}

export default FormCheckbox;
