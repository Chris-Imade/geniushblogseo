import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { getCategories } from '../services';
import Logo from '../public/logo.png';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container px-10 mb-8">
      <div
        style={{ borderBottom: `${1}px solid #f36f21` }}
        className="border-b w-full inline-block py-8"
      >
        <div className="md:float-left">
          <div className="logo__container flex justify-center items-center">
            <Image src={Logo} alt="Logo" />
            <Link href="/">
              <span style={{ color: '#f36f21' }} className="cursor-pointer font-bold text-4xl ml-4 text-gray-400">
                Genius hub blog
              </span>
            </Link>
          </div>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-gray-900 ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
