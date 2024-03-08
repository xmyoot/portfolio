import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <div className="images-container">
          <div className="image-box">
            <img
              src="url_to_image_1"
              className="portfolio-image"
              alt="portfolio"
            />
            <div className="content">
              <p className="title">Project 1</p>
              <h4 className="description">This is project 1</h4>
              <button
                className="btn"
                onClick={() => window.open('url_to_project_1')}
              >
                View
              </button>
            </div>
          </div>
          <div className="image-box">
            <img
              src="url_to_image_2"
              className="portfolio-image"
              alt="portfolio"
            />
            <div className="content">
              <p className="title">Project 2</p>
              <h4 className="description">This is project 2</h4>
              <button
                className="btn"
                onClick={() => window.open('url_to_project_2')}
              >
                View
              </button>
            </div>
          </div>
          {/* Add more portfolio items here */}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
