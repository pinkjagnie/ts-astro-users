import Link from "next/link";

import { FaUserAstronaut } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";

const Navbar = () => {
  return (
    <section className="fixed left-0 top-0 w-full h-[10vh] z-20 bg-stone-800 text-zinc-100">
      <div className="flex justify-around items-center h-[10vh] py-2">
        <div className="flex items-center justify-center hover:text-lime-300">
          <FaUserAstronaut size={50} className="pr-2" />
          <Link
            href="/"
            className="font-bold text-lg md:text-3xl leading-[10vh]"
          >
            AstroUsers
          </Link>
        </div>
        <div className="px-4">
          <Link href="/users/add">
            <FiUserPlus
              size={40}
              className="hover:text-lime-300 cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
