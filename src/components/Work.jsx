import React, { useState } from "react";
import nodecrud from "../assets/nodecrud.png";
import finalyear from "../assets/finalyear.png";
import springreact from "../assets/springreact.png";
import expensetracker from "../assets/expensetracker.png";
import githubfinder from "../assets/githubfinder.png";
import ecom from "../assets/ecom.png";
import Modal from "./Modal";

const Work = () => {
  const [openModal, setOpenModal] = useState(false);
  // const [codelink, setCodelink] = useState('')
  return (
    <div
      name="work"
      className="w-full md:h-screen text-[#17181b] bg-[#e9eaed] dark:bg-[#0a192f] dark:text-white transition duration-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#17181b] dark:text-gray-300  border-[#e5202b]  transition duration-300">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${nodecrud})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                CRUD with Node JS
              </span>
              <div className="pt-8 text-center">
                
                {/* <a href='/'> */}
                {/* <div> */}
                <button 
                  className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  onClick={() => setOpenModal(true)}
                >
                  Demo
                </button>
                {openModal && (
                  <Modal closeModal={setOpenModal} LinkCode={"Node_CRUD"} />
                )}
                {/* </div> */}
                {/* </a> */}
                <a
                  href="https://github.com/vishalskyfall/Node_CRUD"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${finalyear})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Final Year Project
              </span>
              <div className="pt-8 text-center">
              <button
                  className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  onClick={() => setOpenModal(true)}
                >
                  Demo
                </button>
                {openModal && (
                  <Modal closeModal={setOpenModal} LinkCode={"Crop_PRICE-YIELD_Prediction"} />
                )}
                <a
                  href="https://github.com/vishalskyfall/Crop_PRICE-YIELD_Prediction"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${springreact})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Springboot : React JS
              </span>
              <div className="pt-8 text-center">
              <button
                  className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  onClick={() => setOpenModal(true)}
                >
                  Demo
                </button>
                {openModal && (
                  <Modal closeModal={setOpenModal} LinkCode={"Courses_spring-react"} />
                )}
                <a
                  href="https://github.com/vishalskyfall/Courses_spring-react"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${expensetracker})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Expense Tracker
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://expense-tracker-node-react.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/vishalskyfall/Expense_Tracker"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${githubfinder})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Github Finder
              </span>
              <div className="pt-8 text-center">
              <button
                  className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  onClick={() => setOpenModal(true)}
                >
                  Demo
                </button>
                {openModal && (
                  <Modal closeModal={setOpenModal} LinkCode={"react_GithubFinder"} />
                )}
                <a
                  href="https://github.com/vishalskyfall/react_GithubFinder"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ecom})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React E-Commerce App.
              </span>
              <div className="pt-8 text-center">
              <button
                  className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  onClick={() => setOpenModal(true)}
                >
                  Demo
                </button>
                {openModal && (
                  <Modal closeModal={setOpenModal} LinkCode={"E-Commerce_React"} />
                )}
                <a
                  href="https://github.com/vishalskyfall/E-Commerce_React"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
