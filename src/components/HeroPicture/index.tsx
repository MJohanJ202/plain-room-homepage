interface heroPictureProps {
  descriptionHero?: string,
  urlDesktop?: string
  urlDefault: string,
  mediaQuery: string
  classContainer?: string
  classSection?: string
}

export function HeroPicture (props: heroPictureProps) {
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
