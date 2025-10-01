import Image from 'next/image'
import portrait from '../../public/assets/illustration/me-1.jpg'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="flex lg:flex-row flex-col-reverse items-center justify-center w-full lg:gap-0 gap-10 h-full fade-in">
      <div>
        <h1 className="text-hero w-full lg:pt-20 lg:absolute lg:top-50">
          Cheyenne Lee Smith
        </h1>
        <h2 className="text-title">I design. I code. I create.</h2>
        <p className="body-hero">
          Turning ideas into beautiful experiences people enjoy.
        </p>
        <div className="flex flex-row gap-4 pt-10">
          <a
            href="https://github.com/cheyennels"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
          >
            <FaGithub className="icon" />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
          >
            <FaLinkedin className="icon" />
          </a>
        </div>
      </div>
      <Image
        src={portrait}
        alt="A picture of Cheyenne"
        width={500}
        height={400}
        className="hidden lg:block"
      />
      <div className="mask-square block lg:hidden">
        <Image
          src={portrait}
          alt="A picture of Cheyenne"
          width={300}
          height={300}
        />
      </div>
    </div>
  )
}
