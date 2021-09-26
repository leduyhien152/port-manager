import type { NextPage } from 'next';

export const Footer: NextPage = () => {
  return (
    <footer className="bg-footer">
      <section className="max-w-1000 m-auto p-8 relative text-white text-center md:py-16">
        <div className="flex justify-center h-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
            <path
              fill="#fff"
              d="M13 0a3 3 0 013 3v10a3 3 0 01-3 3v-4.5a.5.5 0 10-1 0V16h-2v-4.5a.5.5 0 00-.41-.492L9.5 11a.5.5 0 00-.492.41L9 11.5V16H7v-4.5a.5.5 0 00-.41-.492L6.5 11a.5.5 0 00-.492.41L6 11.5V16H4v-4.5a.5.5 0 00-.41-.492L3.5 11a.5.5 0 00-.492.41L3 11.5V16a3 3 0 01-3-3V3a3 3 0 013-3h10z"
            ></path>
          </svg>
        </div>
        <h3 className="text-xl leading-snug font-medium my-2">Port Manager</h3>
        <p className="text-[#C0C0C0] text-base">
          Get in touch{' '}
          <a className="underline" href="mailto:hello@portmanager.app">
            hello@portmanager.app
          </a>
        </p>
      </section>
    </footer>
  );
};
