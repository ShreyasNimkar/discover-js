import React, { useState } from "react";

const MessageForm = () => {
  const [toggleButton, settoggleButton] = useState([]);
  const handleToggle = () => {};
  return (
    <div className="block p-6  rounded-lg shadow-lg bg-lightBlack-200 ">
      <form>
        <div className="form-group mb-6 text text-white flex items-center justify-between ">
          <label
            for="toggleFour"
            class="flex cursor-pointer select-none items-center gap-2"
          >
            Stay Anonymous ?
            <div class="relative">
              <input
                type="checkbox"
                id="toggleFour"
                class="sr-only"
                role="switch"

                // onChange={() => {
                //   toggleButton == "on"
                //     ? settoggleButton("off")
                //     : settoggleButton("on");
                // }}
              />
              <div class="box bg-dark block h-8 w-14 rounded-full"></div>
              <div class="dot absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition"></div>
            </div>
          </label>
        </div>
        <div className="form-group mb-6">
          <input
            type="text"
            disabled={toggleButton == "on"}
            className="form-control block
        w-[40vw]
        px-3
        py-1.5
        text-base
        font-normal
        text-white
        bg-lightBlack-100 bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        
        focus:text-white focus:bg-lightBlack-100 focus:border-black focus:outline-none"
            id="exampleInput7"
            placeholder="Name"
          />
        </div>
        <div className="form-group mb-6">
          <input
            type="email"
            disabled={toggleButton == "on"}
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-white
        bg-lightBlack-100 bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-white focus:bg-lightBlack-100 focus:border-black focus:outline-none"
            id="exampleInput8"
            placeholder="Email address"
          />
        </div>
        <div className="form-group mb-6">
          <textarea
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-white
        bg-lightBlack-100 bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-white focus:bg-lightBlack-100 focus:border-black focus:outline-none
      "
            id="exampleFormControlTextarea13"
            rows="6"
            placeholder="Message"
          ></textarea>
        </div>

        <button className="inline-flex w-full items-center justify-center h-10 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid  cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MessageForm;
