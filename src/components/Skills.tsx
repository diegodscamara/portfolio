import React from 'react';

const Skills = () => {
  return (
    <section className="container mx-auto px-8 py-36" id='Skills'>
      <h3 className="text-4xl font-bold mb-4">Skills</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-2xl font-bold mb-4">Hard skills</h4>
          <ul className="text-lg mb-4">
            <li>
              <ul>
                <li>Front-end frameworks: ReactJS, NextJS, and KnockoutJS</li>
                <li>Programming languages: JavaScript, Node.js, and TypeScript</li>
                <li>Markup languages: HTML and CSS</li>
                <li>Styling frameworks: Styled Components, TailwindCSS, Chakra UI, Sass, Less, and Bootstrap</li>
                <li>Design tools: Figma and Adobe XD</li>
                <li>APIs: GraphQL and REST</li>
                <li>Version control tools: Azure DevOps, Git, GitFlow, GitHub, GitLab, and BitBucket</li>
                <li>Deployment: Heroku and Vercel</li>
                <li>Project management methodologies: Scrum, Kanban, and Agile</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-bold mb-4">Soft skills</h4>
          <ul className="text-lg mb-4">
            <li>Communication: Experienced in communicating with stakeholders and clients to ensure project success.</li>
            <li>Adaptability: Skilled in adapting quickly to new technologies and tools to meet project needs.</li>
            <li>Collaboration: Proficient in working collaboratively as part of a team and mentoring junior developers.</li>
            <li>Problem Solving: Capable of analyzing and solving complex problems related to web design and development.</li>
            <li>Continuous Improvement: Dedicated to continually improving skills as a Front End Developer and finding ways to make web applications more efficient.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
