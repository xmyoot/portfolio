import Loader from 'react-loaders'
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_04ltwdq', 'template_bc1mh34', form.current, {
        publicKey: 'iow8Ystrqg20vJ83A',
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text)
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        (error) => {
          console.log('FAILED...', error)
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" placeholder="Name" name="from_name" required />
              <label>Email</label>
              <input
                type="email"
                name="to_name"
                placeholder="example@domain.com"
                required
              />
              <label>Phone Number</label>
              <input
                type="tel"
                name="to_phone"
                placeholder="123-456-7890"
                required
              />
              <label>Message</label>
              <textarea name="message" placeholder="Message" required />
              <input type="submit" className="flat-button" value="Send" />
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default Contact
