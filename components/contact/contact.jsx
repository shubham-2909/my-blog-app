import conntactStyled from './contactStyle.module.css'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
export default function ContactForm() {
  const [email, setEmail] = useState('')
  const [name, setname] = useState('')
  const [message, setMessage] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/contact', {
        name,
        email,
        message,
      })
      toast.success('Thanks for giving your message!')
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <section className={conntactStyled.contact}>
      <h1>How Can I help You?</h1>
      <form className={conntactStyled.form} onSubmit={handleSubmit}>
        <div className={conntactStyled.controls}>
          <div className={conntactStyled.control}>
            <label htmlFor='email'>Your Email</label>
            <input
              type='email'
              id='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={conntactStyled.control}>
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
              required
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
        </div>
        <div className={conntactStyled.control}>
          <label htmlFor='message'>Your Message</label>
          <textarea
            id='message'
            rows='5'
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className={conntactStyled.actions}>
          <button type='submut'>Submit</button>
        </div>
      </form>
    </section>
  )
}
