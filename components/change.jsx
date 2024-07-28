"use client";
import { useState, useEffect } from "react";

const ChangingText = () => {
  const ids = [
    100, 101, 102, 200, 201, 202, 204, 300, 302, 304, 305, 400, 401, 402, 403,
    404, 418, 500, 501, 502, 503, 504,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateIndex = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ids.length);
    };

    const intervalId = setInterval(updateIndex, 1000);

    return () => clearInterval(intervalId);
  }, [ids.length]);

  return (
    <div className="py-5 my-2 text-xl font-serif font-normal px-8 bg-slate-900 rounded-3xl">
      <a href={`http://localhost:3000/${ids[currentIndex]}`}>
        http://localhost:3000/{ids[currentIndex]}
      </a>
    </div>
  );
};

export default ChangingText;
