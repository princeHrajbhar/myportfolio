"use client"
import { HoverEffect } from "../ui/card-hover-effect";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Nextjs / React/ Typescript / android dev",
    description:
    "Using Next.js with React for rapid, SEO-friendly web development, complemented by TypeScript for robust code quality. Proficient in Android development using Java/Kotlin and the Android SDK to craft high-performance mobile applications.",
    link: "https://stripe.com",
  },
  {
    title: "Nodejs/ Express/ REST Api/ RTKquery",
    description:
    "Utilizing Node.js with Express to build scalable backend services and REST APIs. Leveraging RTK Query for efficient data fetching and state management in modern web applications.",
    link: "https://netflix.com",
  },
  {
    title: "Nongodb /MySql /IBM db2",
    description:
    "Skilled in MongoDB for flexible NoSQL solutions and MySQL for relational database management. Experienced with IBM Db2 for enterprise-grade database management, ensuring high availability and performance.",
    link: "https://google.com",
  },
  {
    title: "Java /JDBC /Jsp/ ORM Hibernate",
    description:
    "Experienced in Java for backend development using JDBC and JSP, with expertise in Hibernate ORM for efficient object-relational mapping.",
    link: "https://meta.com",
  },
  {
    title: "Pyhthon /ML /EDA",
    description:
    "Proficient in Python for machine learning projects, using pandas and numpy for data analysis. Skilled in scikit-learn and TensorFlow for developing predictive models and advanced analytics."
    ,
    link: "https://amazon.com",
  },
  {
    title: "Blockchain /Solidity /Web3",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

