import { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timeout)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_3944zlo', 'template_4l13o12', form.current, 'P_6bzSbIHWbsHcI1z')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        (error) => {
          console.error('Failed to send email:', error.text)
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="content-zone">
          <div className="text-content">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
            I am actively seeking internship opportunities that align with my passion for technology, innovation, and problem-solving. My interests span full-stack development, backend engineering, and data-driven fields like data science and machine learning.<br></br>
            </p>
            <p>
            I enjoy building scalable systems, analyzing complex datasets, and applying technical expertise to create impactful solutions. Whether developing robust applications or extracting insights from data, I am always eager to learn, adapt, and tackle challenging problems.
            </p>
          </div>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact