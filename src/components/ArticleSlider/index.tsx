import { MouseEvent, useEffect, useState } from 'react'
import { articlesShop } from '../../services/articles'

import { ArticleRoom } from '../ArticleRoom'
import { ButtonLink } from '../ButtonLink'
import { HeroPicture } from '../HeroPicture'

import styles from './index.module.css'

const totalCountArticlesShop = articlesShop.length - 1
const indexArticleShop = 0

export function ArticleSlider () {
  const [article, setArticle] = useState(articlesShop[indexArticleShop])
  const [indexArticle, setIndexArticle] = useState(indexArticleShop)

  const handleSliderNext = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setIndexArticle(prevArticle => totalCountArticlesShop === prevArticle ? prevArticle : prevArticle + 1)
  }

  const handleSliderPrev = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setIndexArticle(prevArticle => indexArticleShop === prevArticle ? prevArticle : prevArticle - 1)
  }

  useEffect(() => {
    setArticle(articlesShop[indexArticle])
  }, [indexArticle])

  return (
    <>
      <div className={styles.slider}>
        <HeroPicture
          urlDefault={article.picture.urlDefault}
          urlDesktop={article.picture.urlDesktop}
          mediaQuery='min-width: 375px'
          descriptionHero={article.picture.descriptionHero}
          classSection={styles.sliderView}
        />
        <div className={styles.sliderButtons}>
          <ButtonLink
            linkUrl='#'
            classes={styles.sliderBtn}
            imgUrl='/assets/icons/angle-left.svg'
            descriptionImg='arrow previous image'
            handleClick={handleSliderPrev}
          />
          <ButtonLink
            linkUrl='#'
            classes={styles.sliderBtn}
            imgUrl='/assets/icons/angle-right.svg'
            descriptionImg='arrow next image'
            handleClick={handleSliderNext}
          />
        </div>
      </div>
      <ArticleRoom
        content={article?.content}
        classMain={styles.articleShop}
        classWrapper={styles.articleShopWrapper}
        classes='flex'
        title={article?.title}
        idLink='shop'
      >
        <footer>
          <ButtonLink
            imgUrl='/assets/icons/arrow.svg'
            descriptionImg='arrow right icon'
            linkUrl='#shop'
            classes={`${styles.articleShopBtn} flex`}
            txtContent='Shop now'
          />
        </footer>
      </ArticleRoom>
    </>
  )
}
