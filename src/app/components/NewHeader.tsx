'use client'

import { useState, memo } from 'react'
import {
  Dialog,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import logo from '../../../public/assets/logo-w.png'

const NewHeader = memo(function NewHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-screen drop-shadow-md">
      <nav aria-label="Global" className="header-container">
        <div className="flex w-full px-10 items-center lg:hidden justify-end">
          <div className="mobile-logo-ribbon">
            <Image
              src={logo}
              alt="Logo with trees and sun"
              width={60}
              height={60}            
            />
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center p-2.5"
          >
            <span className="sr-only">Open mobile menu</span>
            <Bars3Icon aria-hidden="true" className="size-6 mobile-hamburger" />
          </button>
        </div>
        <div className="lg:flex hidden w-full h-5 items-center justify-between">
        <a href="/" className="nav-link">
            Home
          </a>
          <a href="/resume" className="nav-link">
            Resume  
          </a>
           {/* logo ribbon */}
           <div className="logo-container">
            <Image
              src={logo}
              alt="Logo with trees and sun"
              width={80}
              height={80}
            />
          </div>
          <a href="/design" className="nav-link">
            Design
          </a>
          <a href="/dev" className="nav-link">
            Dev Work
          </a>
        </div>
       
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <TransitionChild
          enter="transition-transform duration-300 ease-out"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition-transform duration-300 ease-in"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <DialogPanel className="mobile-menu">
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6 mobile-x-mark" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y ">
                <div className="space-y-2 py-6">
                  <a
                    href="/"
                    className="-mx-3 nav-link block px-3 py-2"
                    aria-label="Link to home"
                  >
                    Home
                  </a>
                  <a
                    href="/resume"
                    className="-mx-3 nav-link block px-3 py-2"
                    aria-label="Link to resume and contact"
                  >
                    Resume
                  </a>
                  <a
                    href="/design"
                    className="-mx-3 nav-link block px-3 py-2"
                    aria-label="Link to design work"
                  >
                    Design
                  </a>
                  <a
                    href="/dev"
                    className="-mx-3 nav-link block px-3 py-2"
                    aria-label="Link to dev work"
                  >
                    Dev Work
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </header>
  )
})

export default NewHeader