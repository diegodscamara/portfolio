import Link from 'next/link';
import React from 'react';

const EXPERIENCES = [
  {
    "logo": "Genetec",
    "company": "Genetec",
    "details": "Montreal, Canada U+2013 (Oct 2022 - Present)",
    "position": "Front End Developer",
    "responsibilities": ""
  },
  {
    "logo": "EMR",
    "company": "Eu Médico Residente",
    "details": "details",
    "position": "position",
    "responsibilities": "responsibilities"
  },
  {
    "logo": "NSH",
    "company": "NSH Technologies",
    "details": "details",
    "position": "position",
    "responsibilities": "responsibilities"
  }
];

const Experience = () => {
  return (
    <section id='Experience'>
      <h2>Experience</h2>
      <button>Section 1</button>
      <div>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </div>
    </section>
  );
};
export default Experience;
