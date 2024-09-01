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
          form.current.reset()
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
            I am interested in electrical engineering opportunities at
            innovative startups or large organizations. I am particularly drawn
            to roles that allow me to leverage my skills in a dynamic and
            challenging environment. If you have any opportunities or questions,
            please don't hesitate to contact me.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="contact-name-email">
                <input
                  type="text"
                  placeholder="Name"
                  name="from_name"
                  required
                />
                <input
                  type="email"
                  name="to_name"
                  placeholder="Email"
                  required
                />
              </div>
              <input
                type="tel"
                name="to_phone"
                placeholder="Phone Number"
                required
              />
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
