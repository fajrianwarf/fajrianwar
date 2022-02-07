import React from 'react'
import { Popover } from '@headlessui/react'

import blkKetua from '../assets/blk-ketua.JPG';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Stack I Use', href: '#' },
  // { name: 'Profile', href: '#' },
  // { name: 'Experience', href: '#' },
  // { name: 'Skills', href: '#' },
]

export default function Home() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-28 bg-white max-w-2xl w-full">
          <svg
            className="block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative pt-6 px-8">
              <nav className="relative flex items-center sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-shrink-0 flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <img
                        className="h-9 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      />
                    </a>
                  </div>
                </div>

                <div className="block ml-10 pr-4 space-x-8">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                      {item.name}
                    </a>
                  ))}
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Contact
                  </a>
                </div>
              </nav>
            </div>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 md:mt-16 lg:mt-20 lg:px-8">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">My Portfolio</span>{' '}
                <span className="block text-indigo-600 xl:inline">Fajrianwar Fachrul</span>
              </h1>
              <p className="mt-3 mx-0 text-xl text-gray-500">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className="mt-5 flex justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-10 py-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 text-lg"
                  >
                    Hire me
                  </a>
                </div>
                <div className="ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-10 py-4 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 text-lg"
                  >
                    Learn more about me
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-full w-full object-cover"
          src={blkKetua}
          alt=""
        />
      </div>
    </div>
  )
}
