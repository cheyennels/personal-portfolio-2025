'use client'

import { useState, memo } from 'react'
import { Dialog, DialogPanel, TransitionChild } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/assets/logo-w.png'

const NewHeader = memo(function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-screen">
      <nav aria-label="Global" className="header-container">
        <div className="flex w-full px-10 items-center lg:hidden justify-between">
          {/* mobile logo */}
          <Image
            src={logo}
            alt="Logo with trees and sun"
            width={40}
            height={40}
          />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center"
          >
            <span className="sr-only">Open mobile menu</span>
            <Bars3Icon aria-hidden="true" className="size-8 mobile-hamburger" />
          </button>
        </div>

        <div className="lg:flex hidden w-full h-10 items-center justify-between">
          <Image
            src={logo}
            alt="Logo with trees and sun"
            width={60}
            height={60}
          />

          <div className="flex flex-row gap-12">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/resume" className="nav-link">
              Resume
            </Link>

            <Link href="/design" className="nav-link">
              Design
            </Link>
            <Link href="/dev" className="nav-link">
              Dev Work
            </Link>
          </div>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
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
                <XMarkIcon
                  aria-hidden="true"
                  className="size-10 mobile-x-mark"
                />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y ">
                <div className="space-y-2 py-6">
                  <Link
                    href="/"
                    className="-mx-3 nav-link block px-3 py-2"
                    aria-label="Link to home"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/resume"
                    className="-mx-3 nav-link block px-3 py-2"
                    aria-label="Link to resume and contact"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Resume
                  </Link>
                  <Link
                    href="/design"
                    className="-mx-3 nav-link block px-3 py-2"
                    aria-label="Link to design work"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Design
                  </Link>
                  <Link
                    href="/dev"
                    className="-mx-3 nav-link block px-3 py-2"
                    aria-label="Link to dev work"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Dev Work
                  </Link>
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
