import { JSX } from 'react'
import styles from './default.module.css'

interface articleRoom {
  title: string,
  content: string,
  classes?: string
  children?: string | JSX.Element | JSX.Element[],
  classMain?: string,
  classWrapper?: string
  idLink?: string

}

export function ArticleRoom (props: articleRoom) {
  const { title, content, classes, children, classMain, idLink, classWrapper } = props

  return (
    <article id={idLink} className={`${styles.article} ${classMain} ${classes ?? ''}`}>
      <div className={`${styles.wrapperDefault} ${classWrapper ?? ''}`}>
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
