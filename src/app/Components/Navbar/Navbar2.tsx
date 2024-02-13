import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="font-space">
      <div className="flex space-x-4 justify-between px-6">
        <div>
          <Link href="https://uiet.puchd.ac.in">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/goonj-2k24.appspot.com/o/goonj_final%2FUIET_logo.webp?alt=media&token=9c46a69a-0cd8-4451-9ed2-06707213a333"
              alt=""
              width={75}
              height={75}
            />
          </Link>
        </div>
        <ul className="flex space-x-10 items-center">
          <li>
            <Link href="/"> ABOUT US</Link>
          </li>
          <li>
            <Link href="/"> EVENTS</Link>
          </li>
          <li>
            <Link href="/"> SPONSORS</Link>
          </li>
        </ul>
        <div>
          <Link href="/">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/goonj-2k24.appspot.com/o/goonj_final%2Fgoonj24logo_white%20(1).png?alt=media&token=6a42bf07-fc87-4cfe-a1b2-f48090e9e8bf"
              alt=""
              width={75}
              height={75}
            />
          </Link>
        </div>
        <ul className="flex space-x-10 items-center">
          <li>
            <Link href="/"> NIQ</Link>
          </li>
          <li>
            <Link href="/"> STAR NIGHT</Link>
          </li>
          <li>
            <Link href="/"> CONTACT US</Link>
          </li>
        </ul>
        <div>
          <Link href="https://puchd.ac.in/">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/goonj-2k24.appspot.com/o/goonj_final%2Fpu-logo.webp?alt=media&token=b0c3e318-08bf-4e5e-b69c-89f875f77ec3"
              alt=""
              width={75}
              height={75}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
