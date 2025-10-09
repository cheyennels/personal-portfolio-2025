import Image, { StaticImageData } from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

interface SectionProps {
  title: string
  body: string | React.ReactNode
  image: {
    src: StaticImageData | string
    alt: string
  }
  link?: {
    href: string
    text: string
    target?: '_blank' | '_self'
  }
  imagePosition?: 'left' | 'right'
}

const Section = ({
  title,
  body,
  image,
  link,
  imagePosition = 'left',
}: SectionProps) => {
  const imageElement = (
    <div className="section-image-container">
      <Image src={image.src} alt={image.alt} fill className="section-image" />
    </div>
  )

  const contentElement = (
    <div className="flex flex-col gap-4 lg:max-w-[60%]">
      <h3 className="section-title">{title}</h3>
      <div className="section-body">
        {typeof body === 'string'
          ? body.split('\n\n').map((paragraph, index) => (
              <p key={index} className={index > 0 ? 'mt-4' : ''}>
                {paragraph.trim()}
              </p>
            ))
          : body}
      </div>
      {link && (
        <a
          href={link.href}
          target={link.target || '_blank'}
          className="section-link group"
        >
          {link.text}
          <FaArrowRight className="arrow-icon text-xl" />
        </a>
      )}
    </div>
  )

  return (
    <div className="section">
      <div className="section-content">
        {imagePosition === 'left' ? (
          <>
            {imageElement}
            {contentElement}
          </>
        ) : (
          <>
            {contentElement}
            {imageElement}
          </>
        )}
      </div>
    </div>
  )
}

export default Section
