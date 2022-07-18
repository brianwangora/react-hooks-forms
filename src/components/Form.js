import React, { useState } from "react";


//Updating State via Forms

/* function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  

  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
} */



//Form Element Types

// Form elements include <input>, <textarea>, <select>, and <form> itself. When we talk about inputs in this lesson, we broadly mean the form elements (<input>, <textarea>, <select>) and not always specifically just <input>.

// To control the value of these inputs, we use a prop specific to that type of input:

// For <input>, <textarea>, and <option>, we use value, as we have seen.

// For a checkbox (<input type="checkbox">), we use checked:

/* function Form() {
  const [newsletter, setNewsletter] = useState(false);

  function handleNewsletterChange(event) {
    // .checked, not .value!
    setNewsletter(event.target.checked);
  }

  return (
    <form>
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input
        type="checkbox"
        id="newsletter"
        onChange={handleNewsletterChange}
        // checked instead of value //
        checked={newsletter}
      />
      <button type="submit">Submit</button>
    </form>
  );
} */


// Using Controlled Forms

function Form(props) {
  return (
    <form>
      <input
        type="text"
        onChange={props.handleFirstNameChange}
        value={props.firstName}
      />
      <input
        type="text"
        onChange={props.handleLastNameChange}
        value={props.lastName}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
