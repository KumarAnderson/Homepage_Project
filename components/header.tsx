import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import logo from "@/assets/image/edvoy.svg";
import gift from "@/assets/image/referralGift.gif";
import Link from "next/link";
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Html } from "next/document";


function HeaderComponent(props) {
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
});
const isSticky = (e) => {
  const header = document.querySelector('.header-section')!;
  const scrollTop = window.scrollY;
  scrollTop >= 250 ? header.classList.add('shadow-md', 'bg-white') : header.classList.remove('shadow-md', 'bg-white') ;
};
  return (
    
    <div>
      <div className="header-section fixed w-full bg-gray-50 h-16 z-10">
    <div className="bg-grey-50 flex flex-row justify-between py-2 mx-auto">
     
      <div className="flex flex-none ">
        <Image
          src={logo}
          alt="Picture of the author"
          width={100}
          height={60} className="bg-cover mx-8"
        />
      </div>
      <nav className="text-start text-red-900  flex-shrink w-1/2 items-center justify-center mr-8 ">
        <ul className="flex flex-row items-end w-full space-x-6 py-4 justify-between whitespace-nowrap">
          <li>  
          <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center text-black text-justify font-semibold">
            Courses
            <ChevronDownIcon
              className="ml-2 -mr-1 h-7 w-5 text-gray-600 hover:text-slate-700 hover:rotate-180"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
            <div className="flex justify-center text-sm text-black font-medium py-5">POPULAR SUBJECTS</div>
            <div className="px-5 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-black' : 'text-gray-950 justify-center'
                    } flex items-center rounded-lg px-8 py-2 text-sm font-semibold`}
                  >
                    {/* {active ? (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )} */}
                    Computer Science
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-black' : 'text-gray-950 justify-center'
                    } flex items-center rounded-lg px-8 py-2 text-sm font-semibold`}
                  >
                    {/* {active ? (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )} */}
                    Artificial Intelligence
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-black' : 'text-gray-950 justify-center'
                    } flex items-center rounded-lg px-8 py-2 text-sm font-semibold`}
                  >
                    {/* {active ? (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )} */}
                    Business
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-black' : 'text-gray-950 justify-center'
                    } flex items-center rounded-lg px-8 py-2 text-sm font-semibold`}
                  >
                    {/* {active ? (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )} */}
                    Cyber Security
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-black' : 'text-gray-950 justify-center'
                    } flex items-center rounded-lg px-8 py-2 text-sm font-semibold`}
                  >
                    {/* {active ? (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    )} */}
                    Health care
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-black' : 'text-gray-950 justify-center'
                    } flex items-center rounded-lg px-8 py-2 text-sm font-semibold`}
                  >
                    {/* {active ? (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    )} */}
                    Data Sciences and Big Data
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-black' : 'text-gray-950 justify-center'
                    } flex items-center rounded-lg px-8 py-2 text-sm font-semibold`}
                  >
                    {/* {active ? (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    )} */}
                    Finance
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-black' : 'text-gray-950 justify-center'
                    } flex items-center rounded-lg px-8 py-2 text-sm font-semibold`}
                  >
                    {/* {active ? (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    )} */}
                    Emergency Medicine
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-black' : 'text-gray-950 justify-center'
                    } flex items-center rounded-lg px-8 py-2 text-sm font-semibold`}
                  >
                    {/* {active ? (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    )} */}
                    Business Administration
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-black' : 'text-gray-950 justify-center'
                    } flex items-center rounded-lg px-8 py-2 text-sm font-semibold`}
                  >
                    {/* {active ? (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    )} */}
                    Engineering And Technology
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
          </li>

          <li>  
          <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center text-black text-justify font-semibold">
            Institutions
            <ChevronDownIcon
              className="ml-2 -mr-1 h-7 w-5 text-gray-600 hover:text-slate-700 hover:rotate-180"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
            <div className="flex justify-center text-sm text-black font-medium py-5">TOP INSTITUTIONS IN</div>
            <div className="px-5 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-black' : 'text-gray-950 justify-center'
                    } flex items-center rounded-lg px-8 py-2 text-sm font-semibold`}
                  >
                    {/* {active ? (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )} */}
                    United Kingdom
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-black' : 'text-gray-950 justify-center'
                    } flex items-center rounded-lg px-8 py-2 text-sm font-semibold`}
                  >
                    {/* {active ? (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )} */}
                    Ireland
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-black' : 'text-gray-950 justify-center'
                    } flex items-center rounded-lg px-8 py-2 text-sm font-semibold`}
                  >
                    {/* {active ? (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )} */}
                    United States
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-black' : 'text-gray-950 justify-center'
                    } flex items-center rounded-lg px-8 py-2 text-sm font-semibold`}
                  >
                    {/* {active ? (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )} */}
                    Canada
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-black' : 'text-gray-950 justify-center'
                    } flex items-center rounded-lg px-8 py-2 text-sm font-semibold`}
                  >
                    {/* {active ? (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    )} */}
                    New Zealand
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-black' : 'text-gray-950 justify-center'
                    } flex items-center rounded-lg px-8 py-2 text-sm font-semibold`}
                  >
                    {/* {active ? (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    )} */}
                    Australia
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-black' : 'text-gray-950 justify-center'
                    } flex items-center rounded-lg px-8 py-2 text-sm font-semibold`}
                  >
                    {/* {active ? (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    )} */}
                    Switzerland
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
          </li>

          <li>  
          <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center text-black text-justify font-semibold">
            About
            <ChevronDownIcon
              className="ml-2 -mr-1 h-7 w-5 text-gray-600 hover:text-slate-700 hover:rotate-180"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100" 
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
            <div className="px-5 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-black' : 'text-gray-950 justify-center'
                    } flex items-center rounded-lg px-8 py-2 text-sm font-semibold`}
                  >
                    {/* {active ? (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )} */}
                    Company
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-black' : 'text-gray-950 justify-center'
                    } flex items-center rounded-lg px-8 py-2 text-sm font-semibold`}
                  >
                    {/* {active ? (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )} */}
                    For Partners
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-black' : 'text-gray-950 justify-center'
                    } flex items-center rounded-lg px-8 py-2 text-sm font-semibold`}
                  >
                    {/* {active ? (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )} */}
                    Careers
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-black' : 'text-gray-950 justify-center'
                    } flex items-center rounded-lg px-8 py-2 text-sm font-semibold`}
                  >
                    {/* {active ? (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )} */}
                    Support
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-black' : 'text-gray-950 justify-center'
                    } flex items-center rounded-lg px-8 py-2 text-sm font-semibold`}
                  >
                    {/* {active ? (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    )} */}
                    Articles
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-black' : 'text-gray-950 justify-center'
                    } flex items-center rounded-lg px-8 py-2 text-sm font-semibold`}
                  >
                    {/* {active ? (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDownIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    )} */}
                    Knowledge Base
                  </button>
                )}
              </Menu.Item>  
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
          </li>

      <Link href="" placeholder="Refer & Earn"className="text-xs text-white">
      <div className="flex flex-none py-1">
        <Image
          src={gift}
          alt="Picture of the author"
          width={30}
          height={60} className="bg-contain"
        />
      </div></Link>
       
       

<li>
<Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center text-black text-justify font-semibold py-1">
            Sign in
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100" 
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-80 mt-32 w-56 origin-top-right divide-y divide-gray-100 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
          <div className="flex justify-center text-sm text-black font-medium py-5">Login or Signup</div>
          <div>
            <div className=" flex justify-center text-black font-semibold ">Welcome to Edvoy</div>
            <input type="email" placeholder='email' className='h-10 w-full border rounded-lg border-black px-4'></input>
          </div>
          </Menu.Items>
        </Transition>
      </Menu>          
</li>
           {/* <li>
            <Link href="/signin" className="inline-flex w-full justify-center text-black text-justify font-semibold my-1">Sign in</Link>
          </li> */}
     
          <li>
            <Link href="/getstarted" className="text-lg font-medium text-white bg-gradient-to-r from-rose-500 to-pink-600  px-8  rounded-full py-2">Get Started</Link>
          </li>
        </ul>
      </nav>
    </div>
    </div>
    </div>
    
    
  );
}

HeaderComponent.propTypes = {};

export default HeaderComponent;



