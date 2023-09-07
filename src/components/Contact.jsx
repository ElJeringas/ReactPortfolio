import { Paper, TextField } from '@mui/material';
import '../styles/contact.css';
import background from'../assets/images/form-backgorund.svg'
function Contact() {
  return (
    <div className='contact-container'>
      <div className='contact-background'>
        <img className='contact-background' src={background}/>
      </div>
      <form className='contact-form' action=''>
      <h1>Contact Me</h1>
      <label>Your Name:</label><br/>
      <input  className="input-form" type='text' id='name' placeholder='Type here...'></input>
      <label>Your Email:</label><br/>
      <input className="input-form" type='mail' id='mail' placeholder='hello@example.com'></input>
      <label>Subject:</label><br/>
      <input className="input-form" type='text' id='subject' placeholder='Type here...'></input>
      <label>Type a message...</label><br/>
      <input className="input-message" type='text' id='message' placeholder='Type here...'></input>
      <input className='submit-button' type='submit' value='Submit'></input>
      </form>

    </div>
  );
}

export default Contact;