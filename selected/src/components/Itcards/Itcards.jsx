import React from 'react'

function Itcards({cardheading,carddesc}) {
  return (
    <div>
      <div
  class="cursor-pointer group overflow-hidden p-5 duration-1000 hover:duration-1000 relative w-64 h-64 bg-neutral-800 rounded-xl"
>
  <div
    class="group-hover:-rotate-45 bg-transparent group-hover:scale-150 -top-12 -left-12 absolute shadow-yellow-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"
  ></div>
  <div
    class="group-hover:rotate-45 bg-transparent group-hover:scale-150 top-44 left-14 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"
  ></div>
  <div
    class="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-24 left-56 absolute shadow-sky-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"
  ></div>
  <div
    class="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-12 h-12"
  ></div>
  <div
    class="group-hover:rotate-45 bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-green-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-44 h-44"
  ></div>
  <div
    class="group-hover:rotate-45 bg-transparent group-hover:scale-150 -top-24 -left-12 absolute shadow-sky-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-64 h-64"
  ></div>
  <div
    class="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-24 left-12 absolute shadow-sky-500 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-4 h-4"
  ></div>
  <div
    class="w-full h-full shadow-xl shadow-neutral-900 p-3 bg-neutral-600 opacity-60 rounded-xl flex-col gap-2 flex justify-center"
  >
    <span class="text-cyan-500 font-bold text-xl italic">{cardheading}</span>
    <p class="text-gray-100">
       {carddesc}
    </p>
  </div>
</div>

    </div>
  )
}

export default Itcards
