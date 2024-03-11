import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import esileImg from '../../assets/images/esile.png'
import plaImg from '../../assets/images/pla.png'
import gastronguruImg from '../../assets/images/gastronguru.png'
import happyPawsImg from '../../assets/images/happypaws.png'
import animeQuoteImg from '../../assets/images/animeQuotes.png'
import oneCommunityImg from '../../assets/images/oneCommunity.png'
import linkedInScraperImg from '../../assets/images/linkedinscraper.png'
import pokedexImg from '../../assets/images/pokedex.png'
import jobboardhuntImg from '../../assets/images/jobboardhunt.png'
import jobboardImg from '../../assets/images/jobboard.png'
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
            <img src={esileImg} className="portfolio-image" alt="portfolio" />
            <div className="content">
              <p className="title">Esile Marketing</p>
              <h4 className="description">
                Marketing Site Front End Developer
              </h4>
              <button
                className="btn"
                onClick={() => window.open('https://esilemarketing.com/')}
              >
                View
              </button>
            </div>
          </div>
          <div className="image-box">
            <img src={plaImg} className="portfolio-image" alt="portfolio" />
            <div className="content">
              <p className="title">Personal Living Alert</p>
              <h4 className="description">Front End Developer</h4>
              <button
                className="btn"
                onClick={() =>
                  window.open('https://www.personallivingalert.com/')
                }
              >
                View
              </button>
            </div>
          </div>
          <div className="image-box">
            <img
              src={gastronguruImg}
              className="portfolio-image"
              alt="portfolio"
            />
            <div className="content">
              <p className="title">Gastron Guru</p>
              <h4 className="description">React Developer</h4>
              <button
                className="btn"
                onClick={() =>
                  window.open('https://github.com/xmyoot/Gastron-Guru')
                }
              >
                View
              </button>
            </div>
          </div>
          <div className="image-box">
            <img
              src={happyPawsImg}
              className="portfolio-image"
              alt="portfolio"
            />
            <div className="content">
              <p className="title">Happy Paws</p>
              <h4 className="description">React Native Developer</h4>
              <button
                className="btn"
                onClick={() =>
                  window.open('https://github.com/xmyoot/happy-paws')
                }
              >
                View
              </button>
            </div>
          </div>
          <div className="image-box">
            <img
              src={animeQuoteImg}
              className="portfolio-image"
              alt="portfolio"
            />
            <div className="content">
              <p className="title">Anime Quote Generator</p>
              <h4 className="description">React Developer</h4>
              <button
                className="btn"
                onClick={() =>
                  window.open(
                    'https://github.com/xmyoot/anime-quote-generator/'
                  )
                }
              >
                View
              </button>
            </div>
          </div>
          <div className="image-box">
            <img src={pokedexImg} className="portfolio-image" alt="portfolio" />
            <div className="content">
              <p className="title">Pokemon Application</p>
              <h4 className="description">React Developer</h4>
              <button
                className="btn"
                onClick={() =>
                  window.open('https://github.com/xmyoot/pokedex/')
                }
              >
                View
              </button>
            </div>
          </div>
          <div className="image-box">
            <img
              src={oneCommunityImg}
              className="portfolio-image"
              alt="portfolio"
            />
            <div className="content">
              <p className="title">One Community Organization</p>
              <h4 className="description">React Developer</h4>
              <button
                className="btn"
                onClick={() =>
                  window.open(
                    'https://github.com/OneCommunityGlobal/HighestGoodNetworkApp/'
                  )
                }
              >
                View
              </button>
            </div>
          </div>
          <div className="image-box">
            <img
              src={linkedInScraperImg}
              className="portfolio-image"
              alt="portfolio"
            />
            <div className="content">
              <p className="title">LinkedIn Web Scrapper</p>
              <h4 className="description">Javascript Developer</h4>
              <button
                className="btn"
                onClick={() =>
                  window.open('https://github.com/xmyoot/linkedin-web-scraper')
                }
              >
                View
              </button>
            </div>
          </div>
          <div className="image-box">
            <img
              src={jobboardhuntImg}
              className="portfolio-image"
              alt="portfolio"
            />
            <div className="content">
              <p className="title">Job Board Aggregator</p>
              <h4 className="description">Full Stack Developer</h4>
              <button
                className="btn"
                onClick={() =>
                  window.open('https://github.com/xmyoot/job-board-hunt')
                }
              >
                View
              </button>
            </div>
          </div>
          <div className="image-box">
            <img
              src={jobboardImg}
              className="portfolio-image"
              alt="portfolio"
            />
            <div className="content">
              <p className="title">Job Board Application</p>
              <h4 className="description">Full Stack Developer</h4>
              <button
                className="btn"
                onClick={() =>
                  window.open('https://github.com/xmyoot/jobs_final')
                }
              >
                View
              </button>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
