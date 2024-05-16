import React from 'react';

const EmailTemplate = ({ name, email, message }) => (
  <div>
    <h1>Hello, you have got a new message</h1> <br />
    <p>Name: {name}</p>
    <p>Email address: {email}</p>
    <p>Message: {message}</p>

  </div>
);

export default EmailTemplate;