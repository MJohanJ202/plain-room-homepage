import { handleClick } from '../../config/types'

interface btnMenuProps {
  imgUrl?: string,
  descriptionImg?: string,
  linkUrl: string
  handleClick?: handleClick,
  classes?: string,
  dataAction?: string,
  txtContent?: string
}

export function ButtonLink (props: btnMenuProps) {
  const {
    linkUrl,
    imgUrl,
    descriptionImg,
    handleClick,
    classes,
    txtContent
  } = props

  return (
    <a href={linkUrl} onClick={handleClick} className={classes}>
      {txtContent}
      {imgUrl && <img src={imgUrl} alt={descriptionImg} />}
    </a>
  )
}
