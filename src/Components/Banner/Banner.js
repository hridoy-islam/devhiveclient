import React from 'react';
const Banner = () => {
    return (
        <section className="bg-[url(https://gps.uml.edu/images/2015/programs/online-cert-web-design.jpg)] bg-cover bg-center bg-no-repeat bg-blend-overlay text-white">
  <div
    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="text-3xl font-extrabold sm:text-5xl"
      >
        Understand User Flow.

        <span className="sm:block"> Increase Conversion. </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border border-blue-600 bg-secondary px-12 py-3 text-sm font-medium text-white hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/get-started"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded border border-blue-600 bg-accent px-12 py-3 text-sm font-medium text-white  focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="/about"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>

</section>
    );
};

export default Banner;