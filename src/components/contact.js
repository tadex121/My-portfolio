import React from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com'

const contact = () => {
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_qdq8778',
        'template_x1dajgc',
        e.target,
        'user_yxlY8TtyBmoOCDC3IwvBC'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }
  return (
    <Wrapper>
      <div className='container'>
        <form onSubmit={sendEmail}>
          <div className='row pt-5 mx-auto'>
            <div className='col-8 form-group mx-auto'>
              <input
                type='text'
                className='form-control'
                placeholder='Name'
                name='name'
                required
              />
            </div>
            <div className='col-8 form-group mx-auto'>
              <input
                type='email'
                className='form-control'
                placeholder='Email Address'
                name='email'
                required
              />
            </div>
            <div className='col-8 form-group mx-auto'>
              <input
                type='text'
                className='form-control'
                placeholder='Subject'
                name='subject'
                required
              />
            </div>
            <div className='col-8 form-group mx-auto'>
              <textarea
                className='form-control'
                name='message'
                id=''
                cols='30'
                rows='8'
                placeholder='Your message'
                required
              ></textarea>
            </div>

            <div className='col-8 pt-3 mx-auto'>
              <input
                type='submit'
                className='btn btn-info'
                value='Send Message'
              />
            </div>
          </div>
        </form>
      </div>
      <div className='background'></div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: #f5f5f5;
  }
`

export default contact
