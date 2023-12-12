import { JSX, MouseEvent, useState } from 'react'
import { articles } from './config/articles.json'

const navigationLinks = ['Home', 'Shop', 'About', 'Contact']

interface btnMenuProps {
  imgUrl?: string,
  descriptionImg?: string,
  linkUrl: string
  handleClick?: (event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void,
  classes?: string,
  dataAction?: string,
  txtContent?: string
}

interface heroPictureProps {
  descriptionHero?: string,
  urlDesktop?: string
  urlDefault: string,
  mediaQuery: string
  classContainer?: string
  classSection?: string
}

interface articleRoom {
  title: string,
  content: string,
  classes?: string
  children?: string | JSX.Element | JSX.Element[],
  classMain?: string,
  idLink?: string

}

function ArticleRoom(props: articleRoom) {
  const { title, content, classes, children, classMain, idLink } = props
  return (
    <article id={idLink} className={`article ${classMain} ${classes ?? ''}`}>
      <div className='wrapper'>
        <header className={`${classMain}__header`}>
          <h2>{title}</h2>
        </header>
        <div className={`${classMain}__content`}>
          <p>{content}</p>
        </div>
        {children}
      </div>
    </article>
  )
}

function HeroPicture(props: heroPictureProps) {
  const {
    descriptionHero,
    urlDefault,
    urlDesktop,
    mediaQuery,
    classContainer,
    classSection
  } = props

  return (
    <section className={classSection}>
      <div className={classContainer}>
        <picture>
          <source srcSet={urlDesktop} media={`(${mediaQuery})`} />
          <img src={urlDefault} alt={descriptionHero} />
        </picture>
      </div>
    </section>
  )
}

function ButtonLink(props: btnMenuProps) {
  const { linkUrl, imgUrl, descriptionImg, handleClick, classes, dataAction, txtContent } = props

  return (
    <a href={linkUrl} onClick={handleClick} className={classes} data-action={dataAction}>
      {txtContent}
      {imgUrl && <img src={imgUrl} alt={descriptionImg} />}
    </a>
  )
}

function App () {
  const [isToggle, setIsToggle] = useState<boolean>(false)

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setIsToggle(!isToggle)
  }

  const handleClickLink = () => setIsToggle(false)

  const handleSliderClick = (event: MouseEvent<HTMLElement>) => {
    console.log(event)
  }

  return (
    <main className='main grid'>
      <header id='home' className={`grid header ${isToggle ? 'header--show' : ''}`}>
        <div className='wrapper-menu-btn'>
          <ButtonLink
            linkUrl='#'
            imgUrl='/public/assets/icons/hamburger.svg'
            descriptionImg={`${isToggle ? 'cross icon to close pull down menu' : 'hamburger icon to open pull down menu'}`}
            handleClick={handleClick}
            classes={`${isToggle ? 'btn-close' : ''}`}
          />
        </div>
        <div className='logo'>
          <img src='/assets/icons/logo.svg' alt='' />
        </div>
        <nav>
          <ul className='grid menu'>
            {navigationLinks.map((link, index) => (
              <li key={`${link}-${index}${Date.now()}`}>
                <ButtonLink
                  linkUrl={`#${link.toLowerCase()}`}
                  txtContent={link}
                  handleClick={handleClickLink}
                  classes='flex menu__link'
                />
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className='shadowing' />
      <div className='slider'>
        <HeroPicture
          urlDesktop='/assets/images/desktop-hero-1.jpg'
          urlDefault='/assets/images/mobile-hero-1.jpg'
          mediaQuery='min-width: 375px'
          descriptionHero='hero image'
          classSection='view'
        />
        <div className='slider__buttons'>
          <ButtonLink
            linkUrl='#'
            classes='slider__btn'
            imgUrl='/assets/icons/angle-left.svg'
            descriptionImg='arrow previous image'
            handleClick={handleSliderClick}
            dataAction='slider-prev-hero'
          />
          <ButtonLink
            linkUrl='#'
            classes='slider__btn'
            imgUrl='/assets/icons/angle-right.svg'
            descriptionImg='arrow next image'
            handleClick={handleSliderClick}
            dataAction='slider-next-hero'
          />
        </div>
      </div>
      <ArticleRoom
        title={articles?.shop?.title}
        content={articles?.shop?.content}
        classMain='article--shop'
        classes='flex'
        idLink='shop'
      >
        <footer>
          <ButtonLink
            imgUrl='/assets/icons/arrow.svg'
            descriptionImg='arrow right icon'
            linkUrl='#shop'
            classes='article--shop__btn flex'
            txtContent='Shop now'
          />
        </footer>
      </ArticleRoom>
      <HeroPicture
        urlDefault='/assets/images/about-dark.jpg'
        urlDesktop='/assets/images/desktop-about-dark.jpg'
        mediaQuery='min-width: 375px'
        descriptionHero='Hero about dark'
        classSection='about-dark'
      />
      <ArticleRoom
        title={articles?.about?.title}
        content={articles?.about?.content}
        classes='flex'
        classMain='article--about'
        idLink='about'
      />
      <HeroPicture
        urlDefault='/assets/images/about-light.jpg'
        urlDesktop='/assets/images/desktop-about-light.jpg'
        mediaQuery='min-width: 375px'
        descriptionHero='Hero about light'
        classSection='about-light'
      />
    </main>
  )
}

export default App
