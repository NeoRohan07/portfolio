import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
 const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "be5f5374-3e33-4e3c-a20c-d4ce5efbd368");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
        alert("Form submitted successfully");
    }
  };
  return (
    <div id='contact' className="contact">
        <div className="contact-title">
              <h1>Get In Touch</h1>
            <img src={theme_pattern} alt="pattern" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eveniet fuga eum similique ducimus possimus, eius culpa illo sequi quo dicta. Ducimus similique ipsam accusamus cumque ipsa quod non possimus?</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="mail_icon" />
                        <p>cnkhwalrohan111@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="call_icon" />
                        <p>+977 9861437189</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="location_icon" />
                        <p>Bhaktapur, Nepal</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your Email' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className='contact-submit'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact