import type { NextPage } from 'next';

export const Gradient: NextPage = () => {
  return (
    <div className="bg-gradient bg-no-repeat bg-center w-screen overflow-hidden">
      <section className="max-w-1000 m-auto p-8 relative pt-12 md:pt-36 md:pb-12">
        <div className="relative md:w-1/2 md:mt-0 md:bg-none">
          <div className="flex items-center md:p-0">
            <div className="w-4 h-4 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path
                  fill="#414D4D"
                  fillRule="evenodd"
                  d="M13 0a3 3 0 013 3v10a3 3 0 01-3 3v-4.5a.5.5 0 10-1 0V16h-2v-4.5a.5.5 0 00-.41-.492L9.5 11a.5.5 0 00-.492.41L9 11.5V16H7v-4.5a.5.5 0 00-.41-.492L6.5 11a.5.5 0 00-.492.41L6 11.5V16H4v-4.5a.5.5 0 00-.41-.492L3.5 11a.5.5 0 00-.492.41L3 11.5V16a3 3 0 01-3-3V3a3 3 0 013-3h10z"
                ></path>
              </svg>
            </div>
            <h1 className="m-0 text-base">Port Manager</h1>
          </div>
          <h2 className="text-4xl leading-tight mt-4 mb-8 text-black md:text-5xl md:mt-8 md:leading-tight">
            Manage ports from your menu bar.
          </h2>
          <p className="text-xl leading-relaxed">
            Find, open and kill ports in a couple of clicks — so you can go back
            to writing code.
          </p>
          <div>
            <a className="bg-black text-white p-4 my-4 inline-block rounded font-semibold">
              Get Port Manager for macOS
            </a>
            <div className="text-xs">
              Works with macOS Sierra (10.12 ) and above.
            </div>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="img/hero_illustration.png"
          alt="hero_illustration"
          className="max-w-full h-auto mt-16 md:absolute md:left-1/2 md:top-1/4 md:m-0 md:z-0 md:ml-10"
          width="624"
          height="324"
        />
      </section>
      <section className="max-w-1000 m-auto p-8 relative md:flex md:flex-wrap">
        <div className="flex items-center pb-8 md:w-1/2 md:pr-12 md:box-border">
          <div className="w-10 h-10 bg-primary rounded-full mr-6 flex-shrink-0 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
          </div>
          <h3 className="text-xl leading-snug font-medium my-2">
            View all of your ports in one place.
          </h3>
        </div>
        <div className="flex items-center pb-8 md:w-1/2 md:pr-12 md:box-border">
          <div className="w-10 h-10 bg-primary rounded-full mr-6 flex-shrink-0 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>
          <h3 className="text-xl leading-snug font-medium my-2">
            Open ports in your browser.
          </h3>
        </div>
        <div className="flex items-center pb-8 md:w-1/2 md:pr-12 md:box-border">
          <div className="w-10 h-10 bg-primary rounded-full mr-6 flex-shrink-0 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
              <polyline points="16 6 12 2 8 6"></polyline>
              <line x1="12" y1="2" x2="12" y2="15"></line>
            </svg>
          </div>
          <h3 className="text-xl leading-snug font-medium my-2">
            Copy and share network URLs.
          </h3>
        </div>
        <div className="flex items-center pb-8 md:w-1/2 md:pr-12 md:box-border">
          <div className="w-10 h-10 bg-primary rounded-full mr-6 flex-shrink-0 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
              <path d="M13 13l6 6"></path>
            </svg>
          </div>
          <h3 className="text-xl leading-snug font-medium my-2">
            Free up ports in a couple of clicks.
          </h3>
        </div>
      </section>
    </div>
  );
};
