"use client"
import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export default function HoverBorderGradientDemo() {
  const handleDownloadCV = () => {
    // Define the URL of the CV PDF file (using Next.js's public folder)
    const cvPdfUrl = "/my-cv.pdf";

    // Create an anchor element to trigger the download
    const downloadLink = document.createElement("a");
    downloadLink.href = cvPdfUrl;
    downloadLink.download = "my-cv.pdf"; // Specify the filename for download

    // Append the link to the body and trigger the download
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Clean up
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="m-40 flex justify-center text-center bg-transparent">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        onClick={handleDownloadCV} // Call handleDownloadCV on button click
      >
        <AceternityLogo />
        <span>Download CV</span>
      </HoverBorderGradient>
    </div>
  );
}

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};
