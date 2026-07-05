"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function SirenBlips() {
  const redRef = useRef<HTMLDivElement>(null);
  const blueRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(redRef.current, { opacity: 0.8, duration: 0.4, ease: "power1.inOut" })
      .to(redRef.current, { opacity: 0.2, duration: 0.3, ease: "power1.inOut" }, "+=0.1")
      .to(blueRef.current, { opacity: 0.8, duration: 0.4, ease: "power1.inOut" }, "<")
      .to(blueRef.current, { opacity: 0.2, duration: 0.3, ease: "power1.inOut" }, "+=0.1");
  });

  return (
    <>
      <div
        ref={redRef}
        className="absolute top-30 left-10 h-[32rem] w-[32rem] rounded-full bg-red-600/10 blur-3xl opacity-20"
      />
      <div
        ref={blueRef}
        className="absolute top-[30rem] left-10 md:top-[25rem] md:left-[50rem] lg:left-[70rem] h-[32rem] w-[32rem] rounded-full bg-blue-600/10 blur-3xl opacity-20"
      />
    </>
  );
}

export default SirenBlips;