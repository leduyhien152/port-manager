import type { NextPage } from 'next';

export const Desktop: NextPage = () => {
  return (
    <div className="relative">
      <div className="w-full h-[22px] bg-white block absolute top-0 shadow-menu-bar" />
      <div className="bg-wallpaper">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="max-w-full m-auto relative flex h-auto"
          src="img/menu.png"
          alt="menu"
          width="440"
          height="211"
        />

        <section className="max-w-1000 m-auto p-8 relative pt-16 pb-24">
          <div className="flex flex-col items-center">
            <a className="bg-black text-white p-4 my-4 inline-block rounded font-semibold">
              Get Port Manager for macOS
            </a>
            <div className="text-xs">
              Works with macOS Sierra (10.12 ) and above.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
