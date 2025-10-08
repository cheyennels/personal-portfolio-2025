import type { Metadata } from 'next'
import { resumeMetadata } from '../metadata'
import Button from '../components/Button'
import Divider from '../components/Divider'

export const metadata: Metadata = resumeMetadata

export default function Resume() {
  return (
    <div className="whole-page-wrapper">
      <div className="page-container w-full h-full">
        <div className="page-wrapper">
          <div className="page-header">
            <h1>Resume</h1>
            <Button href="/assets/cheyenne-resume.pdf" external>
              Download Resume
            </Button>
          </div>

          <Divider />

          <div className="resume-content">
            {/* Skills Section */}
            <div className="resume-section">
              <div className="skills-grid">
                <div className="skill-category">
                  <h3>Languages and Frameworks</h3>
                  <p>
                    Javascript/Typescript, React, React Native, Svelte, Next.js,
                    HTML/CSS
                  </p>
                </div>

                <div className="skill-category">
                  <h3>UI/Design</h3>
                  <p>
                    Chakra UI, Material UI, Storybook, Figma, Accessibility
                    (WCAG 2.1), Miro, Adobe Illustrator, Photoshop, inDesign,
                    Procreate, Clip Studio Paint
                  </p>
                </div>

                <div className="skill-category">
                  <h3>Other</h3>
                  <p>
                    Git, Liquid (Shopify), Squarespace, Wordpress, Agile/Scrum,
                    Cursor, Claude Code
                  </p>
                </div>
              </div>
            </div>

            <Divider />

            {/* Professional Experience */}
            <div className="resume-section">
              <h2>Professional Experience</h2>

              <div className="experience-item">
                <div className="experience-header">
                  <h3>Frontend Developer and Designer</h3>
                  <span className="experience-date">2022 - 2025</span>
                </div>
                <div className="company">Compoze Labs</div>
                <ul className="experience-bullets">
                  <li>
                    Helped design and build a component-based design system in
                    Storybook using React and Chakra UI. This helped our teams
                    stay consistent across projects and saved us dev time
                  </li>
                  <li>
                    Worked on frontend development and design for multiple
                    client projects using React Web Frameworks (Next.js), React
                    Native and Typescript
                  </li>
                  <li>
                    Built features with a focus on accessibility and usability,
                    making sure apps were inclusive and user friendly
                  </li>
                </ul>
              </div>

              <div className="experience-item">
                <div className="experience-header">
                  <h3>Frontend Developer</h3>
                  <span className="experience-date">2021 - 2022</span>
                </div>
                <div className="company">KRUTSCH</div>
                <ul className="experience-bullets">
                  <li>
                    Helped turn internal design work into a reusable design
                    system using Material UI, Storybook and React
                  </li>
                  <li>
                    Built client applications with React Native, Swift and
                    Svelte
                  </li>
                  <li>
                    Learned Liquid to create custom components and styles for
                    multiple Shopify storefronts
                  </li>
                </ul>
              </div>

              <div className="experience-item">
                <div className="experience-header">
                  <h3>UX/UI Tutor and TA</h3>
                  <span className="experience-date">2020 - 2021</span>
                </div>
                <div className="company">Trilogy Education Services</div>
                <ul className="experience-bullets">
                  <li>
                    Answered student questions and assisted with grading
                    assignments, group projects, and presentations
                  </li>
                  <li>
                    Met one-on-one with students to provide guidance on design,
                    HTML/CSS, JavaScript, and Git
                  </li>
                </ul>
              </div>
            </div>
            <Divider />

            {/* Education */}
            <div className="resume-section">
              <h2>Education</h2>

              <div className="education-item">
                <div className="education-header">
                  <h3>Minneapolis Community and Technical College</h3>
                </div>
                <div className="education-details">
                  <p>
                    Associate of Applied Science Degree Web and Interactive
                    Media
                  </p>
                  <p>Graphic Design and Interactive Media</p>
                  <ul className="education-bullets">
                    <li>GPA: 3.8 (Deans List)</li>
                    <li>
                      US Bank Hackathon 2019 1st place and People's Choice
                      Winner
                    </li>
                  </ul>
                </div>
              </div>

              <div className="education-item">
                <div className="education-header">
                  <h3>Graphic Design: Print Media Core Certificate</h3>
                </div>
              </div>

              <div className="education-item">
                <div className="education-header">
                  <h3>Web and Interactive Media Certificate</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
