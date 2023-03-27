import Link from 'next/link';
import React from 'react';
const Work = () => {
  return (
    <section className="container mx-auto px-8 py-36" id='Work'>
      <h3 className="text-4xl font-bold mb-4">Work experience</h3>
      <ul>
        <li className="text-lg mb-4">
          <h4>Tambasa - E-commerce</h4>
          <span>Tambasa is a Brazilian wholesale and retail store that specializes in construction materials, tools, and home appliances. I helped them create a new e-commerce store that was integrated with their existing Oracle system. The website was intended to go live for their Initial Public Offering (IPO), and I successfully met the deadline. To achieve this, I used a range of technologies, including React, JavaScript, HTML, CSS, Less, Adobe XD, and REST.
            With this project, I was able to deliver a modern and user-friendly e-commerce platform with an intuitive UI that allowed customers to quickly find and purchase the products they needed. The site was optimized for performance and scalability, ensuring that it could handle high volumes of traffic and transactions. Additionally, I implemented a range of features that enhanced the customer experience, such as a responsive design that worked seamlessly across desktop and mobile devices, and an easy-to-use checkout process that streamlined the purchase flow.
            Overall, the project was a success and helped to increase Tambasa&apos;s online sales and customer engagement.</span>
          <Link href="https://tambasa.com/">Check it out</Link>
        </li>
        <li className="text-lg mb-4">
          <a href="#">Project 2 - Portfolio Website</a>
          <span>This is a personal portfolio website built using React, Next.js, and TailwindCSS. The website showcases my skills and projects, and provides a way for potential clients to contact me.</span>
        </li>
        <li className="text-lg mb-4">
          <a href="#">Project 3 - Dashboard Application</a>
          <span>This is a responsive dashboard application built using React, Redux, and Material-UI. The application allows users to view and analyze data from various sources, and customize the dashboard to their needs.</span>
        </li>
      </ul>
    </section>
  );
};
export default Work;
