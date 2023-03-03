import React from 'react';

const Contact = () => {
  return (
    <section className="container mx-auto px-8 py-36" id='Contact'>
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <div className="flex justify-between items-center gap-4">
        <form className="max-w-lg mx-auto w-full">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-500 rounded py-2 px-3 w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-500 rounded py-2 px-3 w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="border border-gray-500 rounded py-2 px-3 w-full h-32"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <a href="/path/to/your/resume.pdf" download className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700">
            Download Resume
          </a>
          <a href="mailto:example@example.com" className="">
            Email
          </a>
          <a href="https://github.com/example" className="">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/example" className="">
            LinkedIn
          </a>
        </div>
      </div>
    </section >
  );
};
export default Contact;