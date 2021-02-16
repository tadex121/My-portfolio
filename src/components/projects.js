import React from 'react'
import styled from 'styled-components'
import { Card, Button, CardDeck, Container } from 'react-bootstrap'
import Memory from '../assets/memory.jfif'
import Portfolio from '../assets/portfolio.jpg'

const projects = () => {
  return (
    <Wrapper>
      <Container className='d-flex justify-content-center mt-3'>
        <h1>MY PROJECTS</h1>
      </Container>
      <CardDeck className='m-5'>
        <Card>
          <div className='figure'>
            <a href='https://github.com/tadex121/memory-game' target='_blank'>
              <Card.Img variant='top' src={Memory} className='image' />
            </a>
          </div>

          <Card.Body>
            <Card.Title>Memory game</Card.Title>
            <Card.Text>Memory game of football players.</Card.Text>
            <Button
              href='https://github.com/tadex121/memory-game'
              variant='primary'
              target='_blank'
            >
              GITHUB resources
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <div className='figure'>
            <a href='https://github.com/tadex121/memory-game' target='_blank'>
              <Card.Img variant='top' src={Portfolio} className='image' />
            </a>
          </div>

          <Card.Body>
            <Card.Title>Memory game</Card.Title>
            <Card.Text>Memory game of footballers.</Card.Text>
            <Button
              href='https://github.com/tadex121/memory-game'
              variant='primary'
              target='_blank'
            >
              GITHUB resources
            </Button>
          </Card.Body>
        </Card>
      </CardDeck>
      <div className='background'> </div>
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
    background-color: #ffdab9;
  }
  .container {
    font-weight: 400;
    font-size: 42px;
    color: white;
    text-shadow: black 3px 3px 3px;
    text-transform: uppercase;
  }
  .figure {
    overflow: hidden;
    cursor: pointer;
  }
  .image {
    transition: transform 2s;
    overflow: hidden;
  }

  .figure .image:hover {
    transform: scale(1.3);
  }
`

export default projects
