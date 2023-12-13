import { MouseEvent } from 'react'
import { handleToggle } from '../../config/types'

import { ButtonLink } from '../ButtonLink'
import { MenuNav } from './Menu'

import styles from './index.module.css'

interface Props {
  isToggle: boolean,
  handleToggle: handleToggle
}

export function HeaderMain ({ isToggle, handleToggle }: Props) {
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()
    handleToggle()
  }

  return (
    <>
      <header id='home' className={`grid ${styles.header} ${isToggle ? styles.headerShow : ''}`}>
        <div className={styles.wrapperMenuBtn}>
          <ButtonLink
            linkUrl='#'
            imgUrl='/assets/icons/hamburger.svg'
            descriptionImg={`${isToggle ? 'cross icon to close pull down menu' : 'hamburger icon to open pull down menu'}`}
            handleClick={handleClick}
            classes={`${styles.menuBtn} ${isToggle ? styles.menuBtnClose : ''}`}
          />
        </div>
        <div className={styles.logo}>
          <ButtonLink
            linkUrl='#home'
            imgUrl='/assets/icons/logo.svg'
            descriptionImg='room logo'
          />
        </div>
        <MenuNav handleToggle={handleToggle} />
      </header>
      <div className={styles.shadowing} />
    </>
  )
}
