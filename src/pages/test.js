import React from 'react';
import SEO from '../components/seo';

import Footer from '../components/footer';
import plane from '../images/plane.png';
import Features from '../components/features';

function TestPage() {
  return (
    <>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Test"
      />

      <div
        style={{ zIndex: -0 }}
        className="relative h-screen overflow-hidden bg-transparent border-t-8 border-l-8 border-r-8 border-black"
      >
        <img
          style={{ zIndex: -10, bottom: '-11rem', right: '-10rem' }}
          className="absolute bottom-0 right-0 z-20"
          src={plane}
        />

        <div className="z-10 max-w-screen-xl mx-auto">
          <div className="px-4 pt-6 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-between h-full">
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <div className="flex">
                    <div>
                      <h1
                        className="mb-0 text-6xl leading-none text-black uppercase font-body"
                        href="#"
                        aria-label="Home"
                      >
                        Catalina <br />
                      </h1>
                      <h2 className="pl-2 mt-0 text-3xl leading-none uppercase font-body">
                        Advisors
                      </h2>
                    </div>
                  </div>
                  <div className="flex items-center -mr-2 md:hidden">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                      id="main-menu"
                      aria-label="Main menu"
                      aria-haspopup="true"
                    >
                      <svg
                        className="w-6 h-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden font-body md:block md:ml-10 md:pr-4">
                <a
                  href="#"
                  className="text-2xl font-medium text-black transition duration-150 ease-in-out hover:text-gray-700"
                >
                  ABOUT
                </a>
                <a
                  href="#"
                  className="ml-8 text-2xl font-medium text-black transition duration-150 ease-in-out hover:text-gray-700"
                >
                  SERVICES
                </a>
                <a
                  href="#"
                  className="ml-8 text-2xl font-medium text-black transition duration-150 ease-in-out hover:text-gray-700"
                >
                  BLOG
                </a>
                <a
                  href="#"
                  className="ml-8 text-2xl font-medium text-black transition duration-150 ease-in-out hover:text-gray-700"
                >
                  CONTACT
                </a>
              </div>
            </nav>
          </div>
          <main
            style={{ height: `calc(100% - 8.5rem)` }}
            className="absolute flex items-center max-w-screen-xl px-4 mx-auto lg:px-8 "
          >
            <div className="sm:text-center lg:text-left">
              <h2 className="text-4xl font-medium leading-10 tracking-tight text-black font-body sm:text-5xl sm:leading-none md:text-6xl">
                Experienced Corporate
                <br />
                <span className="text-gray-700">Financial Advisors</span>
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md hover:text-gray-700 hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="py-12 bg-gray-100">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <h2>Commercial Finance Solutions</h2>
          <h3>Extensive Relationships.</h3>
          <p>
            For years parents have espoused the health benefits of eating garlic
            bread with cheese to their children, with the food earning such an
            iconic status in our culture that kids will often dress up as warm,
            cheesy loaf for Halloween.
          </p>
          <p>
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
          </p>
        </div>
      </div>

      <Features />
      <Footer />

      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </>
  );
}

export default TestPage;
