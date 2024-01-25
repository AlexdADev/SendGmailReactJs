import React from 'react';
import './mails.css';
import emailjs from 'emailjs-com';

export default function Mails() {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_aul6qng', 'template_z3craoj', e.target, 'Kt3nYHc5Bws0FINDo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };




    return (
        <div className='container-border'>
            <form className='row' onSubmit={sendEmail}>
                <div className='box'>
                    <label>Name</label>
                    <input type='text' name='name' className='form-control' />
                </div>
                <div className='box'>
                    <label>Email</label>
                    <input type='email' name='user_email' className='form-control' />
                </div>
                <div className='box'>
                    <label>Messege</label>
                    <textarea name='message' rows='4' className='form-control' />
                </div>
                <br />
                <input type='submit' value='Send' className='form-control btn btn-primary' />
            </form>
        </div>
    )
}
