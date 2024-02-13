import Image from "next/image";
import Link from "next/link";
import React, { MouseEventHandler, ReactNode, useEffect } from "react";

const Navbar = () => {
  const letters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval: number | null = null;
  const RandText: MouseEventHandler = (event) => {
    let iteration: number = 0;

    clearInterval(interval!);

    interval = window.setInterval(() => {
      const target = event.target as HTMLElement; // Cast event.target to HTMLElement
      const datasetValue = target.dataset.value || ""; // Handle potential undefined dataset.value

      target.innerText = datasetValue
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return datasetValue[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= datasetValue.length) {
        clearInterval(interval!);
      }

      iteration += 1 / 3;
    }, 30);
  };
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
            <Link
              href="/"
              data-value="ABOUT US"
              className="navLinks"
              onMouseOver={RandText}
            >
              {" "}
              ABOUT US
            </Link>
          </li>
          <li>
            <Link href="/" data-value="EVENTS" onMouseOver={RandText}>
              {" "}
              EVENTS
            </Link>
          </li>
          <li>
            <Link href="/" data-value="SPONSORS" onMouseOver={RandText}>
              {" "}
              SPONSORS
            </Link>
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
            <Link href="/" data-value="NIQ" onMouseOver={RandText}>
              {" "}
              NIQ
            </Link>
          </li>
          <li>
            <Link href="/" data-value="STAR NIGHT" onMouseOver={RandText}>
              {" "}
              STAR NIGHT
            </Link>
          </li>
          <li>
            <Link href="/" data-value="CONTACT US" onMouseOver={RandText}>
              {" "}
              CONTACT US
            </Link>
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
