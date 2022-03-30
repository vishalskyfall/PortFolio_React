import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-full bg-[#e9eaed] dark:bg-[#0a192f] dark:text-white transition duration-300">
      <div className="max-w-[1000px] mx-auto p-16 flex justify-center items-center w-full h-full">
        <form
          method="POST"
          action="https://getform.io/f/6fc66628-4d14-4f90-8339-63fb10259cc6"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#e5202b] dark:text-gray-300 text-[#17181b] transition duration-300">
              Contact
            </p>
            <p className="text-[#17181b]  dark:text-gray-300 py-4 transition duration-300">
              Submit the form below or send me an email -
              brahmbhattvishal1092@gmail.com
            </p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="text-[#17181b] border-2 dark:text-white border-2  hover:bg-[#e5202b] hover:border-[#e5202b]px-4 py-3 my-8 mx-auto flex items-center transition duration-300">
            Let's Collaborate
          </button>
        </form>
     
      </div>
    </div>
  );
};

export default Contact;
