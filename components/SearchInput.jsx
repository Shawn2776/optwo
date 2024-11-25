import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const SearchInput = () => {
  return (
    <section className="w-full pt-2 pb-10 mt-10 bg-gray-100">
      <h2 className="text-center text-[25px] text-gray-900 mt-8 mb-1">
        Plan your next adventure
      </h2>
      <div className="flex justify-center">
        <div className="flex gap-2 p-1 px-5 bg-gray-100 divide-x-2 rounded-full">
          <div className="flex items-center">
            <FaLocationDot className="w-5 h-5 text-black" />

            <input
              type="text"
              placeholder="Location"
              className="p-2 bg-transparent outline-none"
            />
          </div>
          <div className="pl-12">
            <input
              type="date"
              className="p-2 text-gray-400 bg-transparent outline-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchInput;

// <div>
//   <h2 className="text-center text-[20px] text-gray-400 mb-4 mt-5">
//     Plan Your Next Adventure
//   </h2>
//   <div className="flex justify-center gap-24">
//     <div className="flex gap-10 p-2 px-5 bg-gray-100 divide-x-2 rounded-full">
//       {/* Location Input */}
//       <div className="flex items-center">
//         <IoLocationSharp className="text-gray-500" size={25} />
//         <input
//           type="text"
//           placeholder="Location"
//           className="p-2 pl-10 bg-white outline-none"
//         />
//       </div>
//       <div className="flex items-center gap-2 pl-10">
//         {/* <FaRegCalendarAlt className="text-gray-500" size={20} /> */}
//         <input type="date" />
//       </div>
//     </div>
//   </div>
// </div>
