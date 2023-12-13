import { navigationLinks } from '../../../config'
import { handleToggle } from '../../../config/types'

import { ButtonLink } from '../../ButtonLink'

import styles from './index.module.css'

export function MenuNav ({ handleToggle }: { handleToggle: handleToggle }) {
  const handleClickLink = () => handleToggle(false)

  return (
    <nav className={styles.nav}>
      <ul className={`${styles.menu} grid`}>
        {navigationLinks.map((link, index) => (
          <li key={`${link}-${index}${Date.now()}`}>
            <ButtonLink
              linkUrl={`#${link.toLowerCase()}`}
              txtContent={link}
              handleClick={handleClickLink}
              classes={`${styles.menuLink} flex`}
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}
