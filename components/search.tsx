import React from "react";
import Image from "next/image";
import logo from "@/assets/image/search.webp";

function SearchComponent() {
  return (
    <div className=" relative group mx-auto mb-7 mt-28 z-0  flex justify-center border border-gray-200 max-w-5xl overflow-hidden rounded-full shadow-xl ">
      <div className=" group-hover:bg-gray-100 py-2 px-10 ">
        <div>Where?</div>
        <input type="text" placeholder="Select study destination" className="outline-none bg-transparent h-8  "></input>
      </div>
      <div className=" group-hover:bg-gray-100 py-2 px-10">
        <div>Which?</div>
        <input type="text" placeholder="Select course level" className="outline-none bg-transparent h-8"></input>
      </div>
      <div className="group-hover:bg-gray-100 py-2 px-10 ">
        <div>What?</div>
        <input type="text" placeholder="Types subjects here" className="outline-none bg-transparent h-8"></input>
      </div>

      <div className="group-hover:bg-gray-100 py-2 px-10 ">
        <button>
        <Image
          src={logo}
          alt="Picture of the author"
          width={40}
          height={50}
          className="bg-contain rounded-xl mx-3 my-3"
        />
        </button>
      </div>
    </div>
  );
}

export default SearchComponent;
