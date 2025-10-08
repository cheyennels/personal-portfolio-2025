'use client'

import { useState } from 'react'
import ImageModal from '../components/ImageModal'
import ImageWithSkeleton from '../components/ImageWithSkeleton'
import ml1 from '../../../public/assets/design/ml-1.jpeg'
import ml2 from '../../../public/assets/design/ml-2.jpeg'
import ml3 from '../../../public/assets/design/ml-3.jpeg'
import ml4 from '../../../public/assets/design/ml-4.jpeg'
import ml5 from '../../../public/assets/design/ml-5.jpeg'
import oink1 from '../../../public/assets/design/o-1.jpeg'
import oink2 from '../../../public/assets/design/o-2.jpeg'
import oink3 from '../../../public/assets/design/o-3.jpeg'
import oink4 from '../../../public/assets/design/o-4.jpeg'
import mcc1 from '../../../public/assets/design/mc-1.jpeg'
import mcc2 from '../../../public/assets/design/mc-2.jpeg'
import mcc3 from '../../../public/assets/design/mc-3.jpeg'
import mcc4 from '../../../public/assets/design/mc-4.jpeg'
import mcc5 from '../../../public/assets/design/mc-5.jpeg'
import mcc6 from '../../../public/assets/design/mc-6.jpeg'
import canDo1 from '../../../public/assets/design/cc-1.jpeg'
import canDo2 from '../../../public/assets/design/cc-2.jpeg'
import quest1 from '../../../public/assets/design/q4e-1.jpeg'
import quest2 from '../../../public/assets/design/q4e-2.jpeg'
import canDo3 from '../../../public/assets/design/i-8.jpg'
import cw from '../../../public/assets/design/w-1.jpeg'
import cw2 from '../../../public/assets/design/w-2.jpeg'
import cw3 from '../../../public/assets/design/w-3.jpeg'
import cw4 from '../../../public/assets/design/w-4.jpeg'
import cw5 from '../../../public/assets/design/w-5.jpeg'
import cw6 from '../../../public/assets/design/w-6.jpeg'
import pps from '../../../public/assets/design/ps1.png'
import pps2 from '../../../public/assets/design/ps2.png'
import pps3 from '../../../public/assets/design/ps3.png'
import pps4 from '../../../public/assets/design/ps4.png'
import pps5 from '../../../public/assets/design/ps5.png'
import { FaArrowRight } from 'react-icons/fa'
import Divider from '../components/Divider'

export default function Design() {
  const [modalImage, setModalImage] = useState<{
    src: string
    alt: string
  } | null>(null)

  const openModal = (src: string, alt: string) => {
    setModalImage({ src, alt })
  }

  const closeModal = () => {
    setModalImage(null)
  }

  return (
    <div className="blog-page-wrapper">
      <div className="blog-container w-full h-full grid place-content-center gap-16">
        <div className="blog-wrapper">
          <div className="blog-header">
            <h1>Design Work</h1>
            <p className="blog-date">
              Last updated:{' '}
              {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
              })}
            </p>
          </div>
          <div className="blog-section">
            <a
              href={'/current-project'}
              target={'_self'}
              className="section-link group"
            >
              View my current project here
              <FaArrowRight className="text-xl group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
          <Divider />
          <div className="blog-section">
            <div className="blog-section-header">
              <h2 className="blog-section-title">
                Personal Portfolio Site - Old Site
              </h2>
              <p className="blog-section-date">2020</p>
            </div>

            <p className="blog-section-body">
              I designed and developed my personal portfolio using HTML, CSS,
              and JavaScript. To highlight my design and illustration work, I
              created a clean, minimal layout that keeps the focus on the
              visuals.
            </p>

            <a
              href="https://cheyenneis.online"
              target="_blank"
              rel="noopener noreferrer"
              className="section-link group"
            >
              View this site
              <FaArrowRight className="text-xl group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <div className="blog-section-images">
              <div
                className="blog-image-square"
                onClick={() =>
                  openModal(pps.src, 'Personal portfolio homepage design')
                }
              >
                <ImageWithSkeleton
                  src={pps}
                  alt="Personal portfolio homepage design mockup"
                  fill
                />
              </div>
              <div
                className="blog-image-square"
                onClick={() =>
                  openModal(pps2.src, 'Personal portfolio about page design')
                }
              >
                <ImageWithSkeleton
                  src={pps2}
                  alt="Personal portfolio about page design mockup"
                  fill
                />
              </div>
              <div
                className="blog-image-square"
                onClick={() =>
                  openModal(pps3.src, 'Personal portfolio work page design')
                }
              >
                <ImageWithSkeleton
                  src={pps3}
                  alt="Personal portfolio work page design mockup"
                  fill
                />
              </div>
              <div
                className="blog-image-square"
                onClick={() =>
                  openModal(pps4.src, 'Personal portfolio gallery design')
                }
              >
                <ImageWithSkeleton
                  src={pps4}
                  alt="Personal portfolio gallery design mockup"
                  fill
                />
              </div>
              <div
                className="blog-image-square"
                onClick={() =>
                  openModal(
                    pps5.src,
                    'Personal portfolio illustration page design'
                  )
                }
              >
                <ImageWithSkeleton
                  src={pps5}
                  alt="Personal portfolio illustration page design mockup"
                  fill
                />
              </div>
            </div>
          </div>
          <Divider />
          <div className="blog-section">
            <div className="blog-section-header">
              <h2 className="blog-section-title">MLatino Media</h2>
              <p className="blog-section-date">Spring 2020 - Fall 2020</p>
            </div>
            <p className="blog-section-body">
              Created a range of digital and print materials, including social
              media graphics, web ads, and billboard designs for events and
              campaigns. Focused on maintaining a cohesive visual style that
              reflected the organization’s brand.
            </p>
            <div className="blog-section-images">
              <div
                className="blog-image-square"
                onClick={() =>
                  openModal(ml1.src, 'MLatino Media social media graphic 1')
                }
              >
                <ImageWithSkeleton
                  src={ml1}
                  alt="MLatino Media social media graphic design"
                  fill
                />
              </div>
              <div
                className="blog-image-square"
                onClick={() =>
                  openModal(ml2.src, 'MLatino Media social media graphic 2')
                }
              >
                <ImageWithSkeleton
                  src={ml2}
                  alt="MLatino Media event promotion design"
                  fill
                />
              </div>
              <div
                className="blog-image-square"
                onClick={() => openModal(ml3.src, 'MLatino Media digital ad')}
              >
                <ImageWithSkeleton
                  src={ml3}
                  alt="MLatino Media digital advertising design"
                  fill
                />
              </div>
              <div
                className="blog-image-square"
                onClick={() =>
                  openModal(ml4.src, 'MLatino Media campaign design')
                }
              >
                <ImageWithSkeleton
                  src={ml4}
                  alt="MLatino Media campaign graphic design"
                  fill
                />
              </div>
              <div
                className="blog-image-square"
                onClick={() =>
                  openModal(ml5.src, 'MLatino Media branding materials')
                }
              >
                <ImageWithSkeleton
                  src={ml5}
                  alt="MLatino Media branding materials design"
                  fill
                />
              </div>
            </div>
          </div>
          <Divider />
          <div className="blog-section">
            <div className="blog-section-header">
              <h2 className="blog-section-title">
                US Bank Hackathon Project: Oink!
              </h2>
              <p className="blog-section-date">October 2019</p>
            </div>
            <p className="blog-section-body">
              My team and I designed and developed a mobile app for a hackathon
              that helps users track their spending and savings. We built the
              app with React Native and Firebase, using U.S. Bank APIs for
              financial data. I focused on user flow, design and created our
              final presentation. Our project won First Place and the People’s
              Choice Award.
            </p>
            <div className="blog-section-images">
              <div
                className="blog-image-square"
                onClick={() => openModal(oink1.src, 'Oink! 1')}
              >
                {/* Images to show here:
              inspiration board, notes/mindmap, or moodboard. */}
                <ImageWithSkeleton src={oink1} alt="Oink! 1" fill />
              </div>
              <div
                className="blog-image-square"
                onClick={() => openModal(oink2.src, 'Oink! 2')}
              >
                <ImageWithSkeleton src={oink2} alt="Oink! 2" fill />
              </div>
              <div
                className="blog-image-square"
                onClick={() => openModal(oink3.src, 'Oink! 3')}
              >
                <ImageWithSkeleton src={oink3} alt="Oink! 3" fill />
              </div>
              <div
                className="blog-image-square"
                onClick={() => openModal(oink4.src, 'Oink! 4')}
              >
                <ImageWithSkeleton src={oink4} alt="Oink! 4" fill />
              </div>
            </div>
          </div>
          <Divider />
          <div className="blog-section">
            <div className="blog-section-header">
              <h2 className="blog-section-title">
                Minneapolis Community and Technical College
              </h2>
              <p className="blog-section-date">2018 - 2020</p>
            </div>
            <p className="blog-section-body">
              Created branded materials for school events and campaigns while
              learning industry standards and design techniques through
              mentorship and collaboration.
            </p>
            <div className="blog-section-images">
              <div
                className="blog-image-square"
                onClick={() => openModal(mcc1.src, 'MCTC event poster design')}
              >
                <ImageWithSkeleton
                  src={mcc1}
                  alt="Minneapolis Community and Technical College event poster design"
                  fill
                />
              </div>
              <div
                className="blog-image-square"
                onClick={() => openModal(mcc2.src, 'MCTC campaign flyer')}
              >
                <ImageWithSkeleton src={mcc2} alt="MCTC campaign flyer design" fill />
              </div>
              <div
                className="blog-image-square"
                onClick={() => openModal(mcc3.src, 'MCTC branding materials')}
              >
                <ImageWithSkeleton src={mcc3} alt="MCTC branding materials design" fill />
              </div>
              <div
                className="blog-image-square"
                onClick={() => openModal(mcc4.src, 'MCTC digital graphics')}
              >
                <ImageWithSkeleton src={mcc4} alt="MCTC digital graphics design" fill />
              </div>
              <div
                className="blog-image-square"
                onClick={() =>
                  openModal(mcc5.src, 'MCTC promotional materials')
                }
              >
                <ImageWithSkeleton
                  src={mcc5}
                  alt="MCTC promotional materials design"
                  fill
                />
              </div>
              <div
                className="blog-image-square"
                onClick={() => openModal(mcc6.src, 'MCTC event marketing')}
              >
                <ImageWithSkeleton src={mcc6} alt="MCTC event marketing design" fill />
              </div>
            </div>
          </div>
          <Divider />
          <div className="blog-section">
            <div className="blog-section-header">
              <h2 className="blog-section-title">Can Do Canines</h2>
              <p className="blog-section-date">Summer 2018 - Fall 2018</p>
            </div>
            <p className="blog-section-body">
              Created branded print materials, digital graphics, and web ads
              that aligned with organizational branding and visual identity
              guidelines.
            </p>
            <div className="blog-section-images">
              <div
                className="blog-image-square"
                onClick={() =>
                  openModal(canDo1.src, 'Can Do Canines brand logo')
                }
              >
                <ImageWithSkeleton
                  src={canDo1}
                  alt="Can Do Canines brand logo design"
                  fill
                />
              </div>
              <div
                className="blog-image-square"
                onClick={() =>
                  openModal(canDo2.src, 'Can Do Canines website mockup')
                }
              >
                <ImageWithSkeleton
                  src={canDo2}
                  alt="Can Do Canines website design mockup"
                  fill
                />
              </div>
              <div
                className="blog-image-square"
                onClick={() =>
                  openModal(canDo3.src, 'Can Do Canines brand book')
                }
              >
                <ImageWithSkeleton
                  src={canDo3}
                  alt="Can Do Canines brand book and visual identity guidelines"
                  fill
                />
              </div>
            </div>
          </div>
          <Divider />
          <div className="blog-section">
            <div className="blog-section-header">
              <h2 className="blog-section-title">Quest 4 Excellence</h2>
              <p className="blog-section-date">Summer 2020</p>
            </div>
            <p className="blog-section-body">
              Created a mini brand book and logo for a nonprofit organization,
              establishing a consistent visual identity. Designed and built a
              Squarespace website that aligned with the new branding and
              showcased the organization’s mission.
            </p>
            <div className="blog-section-images">
              <div
                className="blog-image-square"
                onClick={() => openModal(quest1.src, 'Quest 4 Excellence 1')}
              >
                {/* Images to show here:
              inspiration board, notes/mindmap, or moodboard. */}
                <ImageWithSkeleton src={quest1} alt="Quest 4 Excellence 1" fill />
              </div>
              <div
                className="blog-image-square"
                onClick={() => openModal(quest2.src, 'Quest 4 Excellence 2')}
              >
                <ImageWithSkeleton src={quest2} alt="Quest 4 Excellence 2" fill />
              </div>
            </div>
          </div>
          <Divider />
          <div className="blog-section">
            <div className="blog-section-header">
              <h2 className="blog-section-title">
                College Web Design Projects
              </h2>
              <p className="blog-section-date">2018 - 2020</p>
            </div>
            <p className="blog-section-body">
              During my time at Minneapolis Community and Technical College, I
              worked on a variety of web design projects using HTML, CSS,
              JavaScript, and WordPress with PHP. The original sites are no
              longer live, but they showcased responsive layouts, clean design,
              and practical user-focused development.
            </p>
            <div className="blog-section-images">
              <div
                className="blog-image-square"
                onClick={() => openModal(cw.src, 'Mood board 1')}
              >
                {/* Images to show here:
              inspiration board, notes/mindmap, or moodboard. */}
                <ImageWithSkeleton src={cw} alt="Mood board 1" fill />
              </div>
              <div
                className="blog-image-square"
                onClick={() => openModal(cw2.src, 'Mood board 2')}
              >
                <ImageWithSkeleton src={cw2} alt="Mood board 2" fill />
              </div>
              <div
                className="blog-image-square"
                onClick={() => openModal(cw3.src, 'Mood board 3')}
              >
                <ImageWithSkeleton src={cw3} alt="Mood board 3" fill />
              </div>
              <div
                className="blog-image-square"
                onClick={() => openModal(cw4.src, 'Mood board 4')}
              >
                <ImageWithSkeleton src={cw4} alt="Mood board 4" fill />
              </div>
              <div
                className="blog-image-square"
                onClick={() => openModal(cw5.src, 'Mood board 5')}
              >
                <ImageWithSkeleton src={cw5} alt="Mood board 5" fill />
              </div>
              <div
                className="blog-image-square"
                onClick={() => openModal(cw6.src, 'Mood board 6')}
              >
                <ImageWithSkeleton src={cw6} alt="Mood board 6" fill />
              </div>
            </div>
          </div>
        </div>

        {modalImage && (
          <ImageModal
            src={modalImage.src}
            alt={modalImage.alt}
            isOpen={!!modalImage}
            onClose={closeModal}
          />
        )}
      </div>
    </div>
  )
}
