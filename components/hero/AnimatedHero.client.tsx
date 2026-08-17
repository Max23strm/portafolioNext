"use client";

import dynamic from "next/dynamic";

const AnimatedHero = dynamic(() => import("./Animated"), {
  ssr: false,
  loading: () => <div style={{ width: "100%", height: "100%" }} />,
});

export default AnimatedHero;
