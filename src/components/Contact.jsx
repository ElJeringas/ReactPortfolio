import { Paper, TextField } from '@mui/material';
import contact_icon from '../assets/images/contact.svg'
import '../styles/contact.css';
import background from'../assets/images/form-backgorund.svg'
function Contact() {
  return (
    <div className='contact-container'>
      <div className='contact-background'>
        <img className='contact-background' src={background}/>
      </div>
      <form className='contact-form' action=''>
      <div className='form-title'>
        <h1>Contact Me</h1>
        <img src={contact_icon} alt=''/>
      </div>
      <div className='label'>
        <label className='label-text'>Your Name:</label>
        <input className="input-form" type='text' id='name' placeholder='Type here...' />
      </div>
      <div className='label'>
        <label className='label-text'>Your Email:</label><br/>
        <input className="input-form" type='mail' id='mail' placeholder='hello@example.com'></input>
      </div>
      <div className='label'>
        <label className='label-text'>Subject:</label><br/>
        <input className="input-form" type='text' id='subject' placeholder='Type here...'></input>
      </div>
      <div className='label'>
      <label className='label-text'>Type a message...</label><br/>
      <textarea className="input-message" type='text' id='message' placeholder='Type here...' rows={4}></textarea>
      </div>
      <input className='submit-button' type='submit' value='Submit'></input>
      </form>

    </div>
  );
}

export default Contact;