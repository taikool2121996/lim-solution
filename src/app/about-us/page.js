import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Navbar from '../componets/Navbar/navbar';
import Footer from '../componets/Footer/footer';
import Switcher from '../componets/switcher';
import CompanyLogo from '../componets/companyLogo';
import KeyFeature from '../componets/keyFeatures';
import VideoModal from '../componets/videoModal/videoModal';
import Clients from '../componets/AboutUs/clients';
import Counter from '../componets/AboutUs/counter';

import * as Icon from 'react-feather';
import { MdKeyboardArrowRight, FaRegEnvelope } from '../assets/icons/icons';

import { teamData } from '../Data/data';
import { benefitData, referenceData } from '../Data/data';

export default function PageAboutUs() {
  return (
    <>
      <Navbar navClass="nav-light" />

      <section
        className="relative table w-full py-36 lg:py-44  bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url('/images/company/aboutus.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="mb-6 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
              About Us
            </h3>
            <p className="text-slate-300 text-lg max-w-xl mx-auto">
              A satisfied customer is the best business strategy of all
            </p>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className=" tracking-[0.5px]  mb-0 inline-flex mx-auto space-x-1">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link href="/about-us">Lime Solution</Link>
            </li>
            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <MdKeyboardArrowRight className="text-xl" />
            </li>
            <li
              className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              About us
            </li>
          </ul>
        </div>
      </section>

      <div className="relative">
        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
          <svg
            className="w-full h-auto scale-[2.0] origin-top"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-5 md:col-span-6">
              <div className="grid grid-cols-12 gap-6 items-center">
                <div className="col-span-6">
                  <div className="grid grid-cols-1 gap-6">
                    <Image
                      src="/images/about/ab03.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                      className="shadow rounded-md"
                      alt=""
                    />
                    <Image
                      src="/images/about/ab02.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                      className="shadow rounded-md"
                      alt=""
                    />
                  </div>
                </div>

                <div className="col-span-6">
                  <div className="grid grid-cols-1 gap-6">
                    <Image
                      src="/images/about/ab01.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                      className="shadow rounded-md"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 md:col-span-6">
              <div className="lg:ms-5">
                <Counter />
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                  Who we are ?
                </h3>

                <p className="text-slate-400 max-w-xl">
                  Lime Technologies Ltd, a global market leader in software
                  development, testing services, and top-tier technology
                  consulting offers an integrated suite of cutting-edge
                  solutions that help businesses accelerate product
                  speed-to-market. With development centers in Vietnam and
                  Mexico, we have been trusted globally for the superb quality
                  of our software consulting & development services. With a
                  customer-centric approach, Lime Technologies Ltd aims to fuel
                  innovation for organizations by helping to modernize existing
                  systems or bring new software visions to life.
                  <br />
                  The available talents, the open-minded culture, and the
                  advantageous framework conditions have convinced Markus to
                  establish a software development company in Vietnam and offer
                  development services to clients from all over the world. We
                  are happy to reserve a modern open-plan workspace, which
                  always has enough space for your software engineer teams, plus
                  several private offices and on-ready meeting rooms with
                  high-quality media systems; designed to encourage interactions
                  and direct communications between employees and clients.
                  <br />
                  Our dedicated, Vietnam-based offshore development teams
                  provide reliable, high-quality software development services—
                  all at a competitive cost.
                </p>

                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"
                  >
                    <FaRegEnvelope className="me-2 text-sm" /> Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 text-center">
            <h3 className="md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Benefits
            </h3>
          </div>

          <div className="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 gap-[30px] items-center">
            <div className="lg:col-span-4 md:col-span-6 lg:order-1 order-2">
              <div className="grid grid-cols-1 gap-[30px]">
                {benefitData.slice(0, 4).map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="group flex transition-all duration-500 ease-in-out xl:p-3"
                    >
                      <div className="flex-1 md:order-1 order-2 md:text-end md:me-4 md:ms-0 ms-4">
                        <h4 className="mb-0 text-lg font-medium">
                          {item.title}
                        </h4>
                        <p className="text-slate-400 mt-3">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-4 md:col-span-12 lg:mx-8 lg:order-2 order-1">
              <Image
                src="/images/benefits.png"
                width={0}
                height={10}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
                className="mx-auto md:max-w-[300px]"
                alt=""
              />
            </div>

            <div className="lg:col-span-4 md:col-span-6 order-3">
              <div className="grid grid-cols-1 gap-[30px]">
                {benefitData.slice(4, 8).map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="group flex transition-all duration-500 ease-in-out xl:p-3"
                    >
                      <div className="flex-1 ms-4">
                        <h4 className="mb-0 text-lg font-medium">
                          {item.title}
                        </h4>
                        <p className="text-slate-400 mt-3">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 text-center">
            <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Reference
            </h3>
          </div>
          <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-[30px]">
            {referenceData.slice(2, 4).map((item, index) => {
              return (
                <div key={index} className="lg:col-span-6 md:col-span-6">
                  <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900">
                    <Image
                      src={item.image}
                      width={96}
                      height={96}
                      className="size-24 rounded-full shadow-md dark:shadow-gray-800"
                      alt=""
                    />

                    <div className="content mt-4">
                      <Link
                        href="#"
                        className="text-lg font-medium hover:text-indigo-600 block"
                      >
                        {item.name}
                      </Link>
                      <span className="text-slate-400 block">{item.title}</span>

                      <p className="text-slate-400 mt-4">{item.desc}</p>

                      <ul className="list-none mt-4 space-x-1">
                        <li className="inline">
                          <Link
                            href="#"
                            className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                          >
                            <Icon.Facebook className="size-4"></Icon.Facebook>
                          </Link>
                        </li>
                        <li className="inline">
                          <Link
                            href="#"
                            className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                          >
                            <Icon.Instagram className="size-4"></Icon.Instagram>
                          </Link>
                        </li>
                        <li className="inline">
                          <Link
                            href="#"
                            className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                          >
                            <Icon.Twitter className="size-4"></Icon.Twitter>
                          </Link>
                        </li>
                        <li className="inline">
                          <Link
                            href="#"
                            className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                          >
                            <Icon.Linkedin className="size-4"></Icon.Linkedin>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* <section className="relative md:py-24 py-16 md:mt-24 mt-16 bg-gray-50 dark:bg-slate-800 md:pt-0 pt-0">
        <div className="container relative">
          <div className="grid grid-cols-1 justify-center">
            <div className="relative z-1">
              <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                <div className="lg:col-start-2 lg:col-span-10">
                  <div className="relative">
                    <Image
                      src="/images/cta-bg.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                      className="rounded-md shadow-lg"
                      alt=""
                    />
                    <VideoModal />
                  </div>
                </div>
              </div>

              <div className="content md:mt-8">
                <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                  <div className="lg:col-start-2 lg:col-span-10">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                      <div className="mt-8">
                        <div className="section-title text-md-start">
                          <h6 className="text-white/50 text-lg font-semibold">
                            Team
                          </h6>
                          <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white mt-2">
                            Meet Experience <br /> Team Member
                          </h3>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="section-title text-md-start">
                          <p className="text-white/50 max-w-xl mx-auto mb-2">
                            Start working with Lime Solution that can provide
                            everything you need to generate awareness, drive
                            traffic, connect.
                          </p>
                          <Link
                            href="#"
                            className="text-white flex items-center"
                          >
                            Read More
                            <MdKeyboardArrowRight className="text-xl ms-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 start-0 end-0 sm:h-2/3 h-4/5 bg-gradient-to-b from-indigo-500 to-indigo-600"></div>
      </section> */}

      {/* <section
        className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800 md:pb-0 pb-0"
        id="team"
      >
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Our Professional Team
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Start working with Tailwind CSS that can provide everything you
              need to generate awareness, drive traffic, connect.
            </p>
          </div>

          <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
            {teamData.slice(0, 4).map((item, index) => {
              return (
                <div key={index} className="lg:col-span-3 md:col-span-6">
                  <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900">
                    <Image
                      src={item.image}
                      width={96}
                      height={96}
                      className="size-24 rounded-full shadow-md dark:shadow-gray-800"
                      alt=""
                    />

                    <div className="content mt-4">
                      <Link
                        href="#"
                        className="text-lg font-medium hover:text-indigo-600 block"
                      >
                        {item.name}
                      </Link>
                      <span className="text-slate-400 block">{item.title}</span>

                      <p className="text-slate-400 mt-4">{item.desc}</p>

                      <ul className="list-none mt-4 space-x-1">
                        <li className="inline">
                          <Link
                            href="#"
                            className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                          >
                            <Icon.Facebook className="size-4"></Icon.Facebook>
                          </Link>
                        </li>
                        <li className="inline">
                          <Link
                            href="#"
                            className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                          >
                            <Icon.Instagram className="size-4"></Icon.Instagram>
                          </Link>
                        </li>
                        <li className="inline">
                          <Link
                            href="#"
                            className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                          >
                            <Icon.Twitter className="size-4"></Icon.Twitter>
                          </Link>
                        </li>
                        <li className="inline">
                          <Link
                            href="#"
                            className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                          >
                            <Icon.Linkedin className="size-4"></Icon.Linkedin>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center">
            <div className="lg:col-span-5 md:col-span-6 md:order-1 order-2">
              <div className="relative overflow-hidden after:content-[''] after:absolute after:h-40 after:w-40 after:bg-red-600/5 after:top-5 after:start-0 after:end-0 after:mx-auto after:-z-0 after:rounded-3xl after:animate-[spin_10s_linear_infinite]">
                <Image
                  src="/images/hero2.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  className="relative z-1"
                  alt=""
                />
              </div>
            </div>

            <div className="lg:col-span-7 md:col-span-6 md:order-2 order-1">
              <Clients />
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
      <Switcher />
    </>
  );
}
