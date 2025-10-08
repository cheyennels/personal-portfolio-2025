'use client'

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import Divider from '../components/Divider'

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact - Cheyenne Smith'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Get in touch with Cheyenne Smith for design and development opportunities. Currently seeking full-time positions in UX/UI design and development.'
      )
    }
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('https://formspree.io/f/xpwyjbrr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 3000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <div className="whole-page-wrapper">
      <div className="page-container w-full h-full">
        <div className="page-wrapper">
          <div className="page-header">
            <h1>Let&apos;s Connect</h1>
          </div>
          <Divider />
          <div className="contact-page-content">
            <div className="grid lg:grid-cols-[40%_60%] items-start">
              {/* Contact Methods */}
              <div className="contact-methods">
                <div className="contact-method">
                  <FaEnvelope className="contact-icon" />
                  <div className="contact-method-details">
                    <a href="mailto:cheyenneleesmith@gmail.com">
                      Send me an email
                    </a>
                  </div>
                </div>
                <div className="contact-method">
                  <FaLinkedin className="contact-icon" />
                  <div className="contact-method-details">
                    <a
                      href="https://www.linkedin.com/in/cheyenne-smith-4309a2194/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
                <div className="contact-method">
                  <FaGithub className="contact-icon" />
                  <div className="contact-method-details">
                    <a
                      href="https://github.com/cheyennels"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View my GitHub
                    </a>
                  </div>
                </div>
                <p className="contact-intro">
                  I&apos;m always interested in new opportunities,
                  collaborations, and conversations about design and
                  development. I&apos;m currently looking for a full time
                  position in design, UX/UI, or development. Feel free to reach
                  out!
                </p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="input-field"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="input-field"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project or opportunity..."
                    className="input-field"
                  />
                </div>

                <button
                  type="submit"
                  className="submit-button"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <p className="form-message success">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="form-message error">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
