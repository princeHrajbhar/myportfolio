"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import  { useState, useEffect } from 'react';
import Button from "../components/HoverBorderGradientDemo"


export default function Background() {
     const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const phrases = [
      'Hye...,',
      'I am Prince Rajbhar...',
      'Web & App Devloper',
      'DS/AI Engineer'
    ];

    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let typingTimer: ReturnType<typeof setTimeout>;
    let erasingTimer: ReturnType<typeof setTimeout>;

    const type = () => {
      setText((prevText) => phrases[currentPhraseIndex].slice(0, currentCharIndex));
      currentCharIndex++;

      if (currentCharIndex > phrases[currentPhraseIndex].length) {
        setIsTyping(false);
        clearTimeout(typingTimer);
        erasingTimer = setTimeout(erase, 1000);
      } else {
        typingTimer = setTimeout(type, 100);
      }
    };

    const erase = () => {
      setText((prevText) => phrases[currentPhraseIndex].slice(0, currentCharIndex));
      currentCharIndex--;

      if (currentCharIndex === 0) {
        setIsTyping(true);
        clearTimeout(erasingTimer);
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        typingTimer = setTimeout(type, 500);
      } else {
        erasingTimer = setTimeout(erase, 50);
      }
    };

    typingTimer = setTimeout(type, 500);

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(erasingTimer);
    };
  }, []);

  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">{text}</h1>

      
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome! With expertise in strategic planning, data analysis, and project management, I bring a dynamic approach to every endeavor. &apos;Skilled in fostering collaboration and driving innovation, I thrive in fast-paced environments. Let's connect and explore opportunities for growth and success together.
        </p>
        
      </div>
      <BackgroundBeams />
      <div className="absolute bottom-0 left-0 p-4"><Button/></div>
    </div>
    
  );
}
