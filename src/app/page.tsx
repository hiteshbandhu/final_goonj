"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  const paragraphs = {
    paragraphs: [
      {
        text: "<p><strong>University Institute of Engineering and Technology (UIET)</strong>, established in 2002, is a prestigious in-campus Department of <em>Panjab University, Chandigarh</em>. The campus is Wi-Fi enabled and spans over <strong>10.5 acres</strong> of lush greenery, featuring three academic blocks and a dedicated workshop. It hosts nearly <strong>2,500</strong> students from across India and abroad. 🏫🌳</p>",
      },
      {
        text: "<p><strong>Panjab University Chandigarh</strong>, founded in 1882, boasts <strong>78</strong> teaching and research departments across a <strong>550-acre</strong> campus in Chandigarh. It's known for its rich heritage and academic excellence. 🎓📚</p>",
      },
      {
        text: "<p><strong>Goonj</strong>, the annual Techno-Cultural fest of UIET, is a flagship event that embodies the spirit of cultural and technical enthusiasm among students. <em>Goonj 2023</em> promises a blend of coding competitions, mini marathon, e-sports, cultural performances, and more, engaging over <strong>10,000</strong> attendees over three days. 🎉💻🏃‍♂️🎭</p>",
      },
    ],
  };

  let [para, setPara] = useState(0);
  console.log();

  useEffect(() => {
    setTimeout(() => {
      if (para == 2) {
        setPara(0);
      }
      if (para == 0) {
        setPara(1);
      }
      if (para == 1) {
        setPara(2);
      }
    }, 2000);
  });
  return (
    <main className="bg-grey text-white flex flex-col justify-center ">
      <Navbar />
      <div
        id="HERO"
        className="h-screen w-screen flex justify-center items-center py-20"
      >
        <div className="w-4/6 h-4/6 ">
          <div className="text-center">
            <p className="text-7xl text-yellow font-rubik neonTextYellow">
              WELCOME TO
            </p>
            <p className="text-6xl text-orange font-rubik neonTextOrange">
              GOONJ 2024
            </p>
            <p className="mt-4 mb-8 font-bold">March 13th,14th & 15th</p>
          </div>
          <div className="font-space text-2xl text-blue neonTextBlue ml-[8vw]">
            <p>AMAZING STAR NIGHT</p>
            <p>Featuring.</p>
          </div>
          <div className="text-5xl flex  font-rubik my-12 ml-10">
            <h2 className="text-orange">Kulwinder</h2>
            <h2 className="text-yellow">Billa</h2>
          </div>
        </div>
        <div className="absolute bottom-[-60px] right-[180px]">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/goonj-2k24.appspot.com/o/goonj_final%2Fbilla_bg.png?alt=media&token=14a6e009-e606-4cb6-aabc-bf35a1c8b798"
            alt=""
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col my-10 items-center space-y-20">
        <h1 className="text-3xl text-white border-b-2 border-orange">
          HAVE A SNEAK-PEAK FOR <strong>GOONJ&apos;24</strong>
        </h1>
        <div className="flex space-x-20 px-20 items-center centerit">
          <div
            className="text-xl"
            dangerouslySetInnerHTML={{
              __html: paragraphs.paragraphs[para].text,
            }}
          />

          <div className="p-1 border-2 border-white">
            <div className="p-2 border-2 border-white">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/U1jcj_FTCPk?si=Rq717O0n0Ramvc5L"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
