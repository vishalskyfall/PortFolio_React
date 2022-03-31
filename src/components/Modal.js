import React from "react";
//  import './Modal.css';

function Modal({ closeModal, LinkCode }) {
  return (
    <div className="rounded-lg px-4 py-2  bg-white text-gray-700 font-light text-justify">
      <div className="">
        <div className="">
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className="font-extrabold">
          Demo for this Project is not present at this moment. I'll upload soon.
        </div>
        <div className="body">
          <p>
            Please try to check Code for this project by clicking CODE button
            below.
          </p>

          <button
            onClick={() => closeModal(false)}
            className="text-[#17181b]  dark:text-black border-2  hover:bg-[#e5202b] hover:border-[#e5202b] px-2 py-1 my-5 mx-auto  transition duration-300"
          >
            Cancel
          </button>
          <span> </span>

          <button
            onClick={() => LinkCode}
            className="text-[#17181b] border-2 dark:text-black   hover:bg-[#4431ec] hover:border-[#0e0d0d] px-2 py-1 my-5 mx-auto  transition duration-300"
          >
            <a
              href={`https://github.com/vishalskyfall/`  `${LinkCode}`}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              CODE{" "}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
