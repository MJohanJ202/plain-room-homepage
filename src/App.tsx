import { useState } from 'react'
import { articleAbout } from './services/articles'

import { ArticleRoom } from './components/ArticleRoom'
import { ArticleSlider } from './components/ArticleSlider'
import { HeroPicture } from './components/HeroPicture'
import { HeaderMain } from './components/mainHeader'

import classesHero from './components/HeroPicture/index.module.css'
import aboutStyles from './styles/aboutArticle.module.css'

function App () {
  const [isToggle, setIsToggle] = useState<boolean>(false)
  const handleToggle = (stop?: boolean) => setIsToggle(prevIsToggle => stop ?? !prevIsToggle)

  return (
    <main className='main grid'>
      <HeaderMain isToggle={isToggle} handleToggle={handleToggle} />
      <ArticleSlider />
      <HeroPicture
        urlDefault='/assets/images/about-dark.jpg'
        urlDesktop='/assets/images/desktop-about-dark.jpg'
        mediaQuery='min-width: 375px'
        descriptionHero='Hero about dark'
        classSection={classesHero.aboutDark}
      />
      <ArticleRoom
        title={articleAbout?.title}
        content={articleAbout?.content}
        classes='flex'
        classWrapper={aboutStyles.articleAboutWrapper}
        classMain={aboutStyles.articleAbout}
        idLink='about'
      />
      <HeroPicture
        urlDefault='/assets/images/about-light.jpg'
        urlDesktop='/assets/images/desktop-about-light.jpg'
        mediaQuery='min-width: 375px'
        descriptionHero='Hero about light'
        classSection={classesHero.aboutLight}
      />
    </main>
  )
}

export default App
