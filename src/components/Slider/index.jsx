"use client";
import { useEffect, useState } from "react";

const Slider = ({ data }) => {
  const [quote, setQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
     const randomIndex = Math.floor(Math.random() * 29) 
      setQuote(randomIndex);
    }, 8000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p key={data[quote].id}>
        {data[quote].text} - <span>{data[quote].author}</span>
      </p>
    </div>
  );
};

export default Slider;
