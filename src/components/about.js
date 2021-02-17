import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col, Image } from 'react-bootstrap'
import picture from '../assets/tadej.jpg'

const about = () => {
  return (
    <>
      <Wrapper>
        <Container className='d-flex'>
          <Row>
            <Col sm={6}>
              <div className='figure'>
                <Image className='image' src={picture} rounded fluid />
              </div>
            </Col>

            <Col sm={6}>
              <h1>ABOUT ME</h1>
              <p>
                I am Tadej Ferk and I am 25 years old. In the 2020 I started
                learning software development. I learned HTML, CSS, JavaScript,
                Bootstrap, Vue.js and React. For me the most important thing in
                websites is that they need to look nice and be user friendly. I
                graduated in faculty of sport and I am currently doing master's
                degree in kinesiotherapy. During my free time I play football
                and I am also football coach in my home place.
              </p>
            </Col>
          </Row>
        </Container>

        <div className='background'></div>
      </Wrapper>
    </>
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
    background-color: #d3d3d3;
  }

  .container {
    position: relative;
    top: 130px;
  }

  .figure {
    height: 350px;
    width: 350px;
    overflow: hidden;
  }

  .image {
    transition: transform 2s;
  }

  .figure .image:hover {
    transform: scale(1.3);
  }
`

export default about
