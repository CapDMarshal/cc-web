"use client";

import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <div className="relative text-white p-6 rounded-lg shadow-lg mx-[5vw] my-[10vh] max-w-[90vw]"
        style={{
            backgroundImage: "url('/images/card_bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
    >
      {/* Top Left Vector */}
      <div className="absolute top-10 left-10 w-10 h-10 border-t-4 border-l-4 border-white rounded-tl-[15px]"></div>

      {/* Bottom Left Vector */}
      <div className="absolute bottom-10 left-10 w-10 h-10 border-b-4 border-l-4 border-white rounded-bl-[15px]"></div>

      <div className="main-card-content p-10 space-x-12" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <div className="left-section relative" style={{ display: "flex", flexDirection: "column", alignItems: "left" , justifyContent: "space-around"}}>
            {/* Align image at flex start */}
          <Image
            src="/images/CC_contentlogo.png"
            alt="Content Logo"
            width={600}
            height={600}
            className="self-start"
          />
          {/* Align text at center */}
          <p className="text-sm mt-2 self-center px-10" style={{ fontFamily: "Ghibli Regular", fontSize: "2rem" }}>
          “she was a normal girl until she was accidentally teleported by random
            time machine. ever since then, for unknown reason, she became a
            bloodbender and her left eye turned pink. people call her ‘anomaly’
            because of it.”
          </p>
          {/* Align button at flex end */}
          <button className="mt-4 px-4 py-2 bg-[#D14365] hover:bg-[#932E46] transition self-end" style={{ fontFamily: "Ghibli Regular", fontSize: "1.5rem" , borderRadius: "15px", width: "15rem", height: "4rem" }}>
            <Link href="/about">About Me</Link>
          </button>
        </div>
        <div className="right-section relative">
          {/* Mask */}
          <div className="absolute inset-0 bg-[#DD859E] opacity-100 rounded-lg z-0"
          style={{filter: "blur(10px"}}
          ></div>
          <div
            className="w-[400px] h-[600px] my-5 mx-5 rounded-lg overflow-hidden relative z-10"
            style={{
              backgroundImage: "url('/images/card-image.png')",
              backgroundSize: "125%",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}