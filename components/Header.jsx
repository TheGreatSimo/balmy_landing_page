import React from 'react';

const Header = ({ headline , subheadline }) => {
  return (
    <header className="flex flex-col justify-center items-center max-container">
      <h1 className="text-center text-5xl font-semibold pt-11 pb-6 max-md:text-4xl max-lg:max-w-md px-4  leading-normal" role="heading" aria-level="1">
        { headline }
      </h1>
      <h2 className="text-center text-xl text-gray-700" role="heading" aria-level="2">
        { subheadline }
      </h2>
    </header>
  );
};

export default Header;
