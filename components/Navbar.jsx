import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-2 shadow-sm border-b-[1px]">
      <div className="ml-10">
        <Image src="/logo2.png" alt="logo" width={100} height={100} />
      </div>
      <div className="hidden gap-4 md:flex">
        <h2>
          <button variant="link">
            <span className="text-xl">Home</span>
          </button>
        </h2>
        <h2>
          <button variant="link">
            <span className="text-xl">Rentals</span>
          </button>
        </h2>
        <h2>
          <button variant="link">
            <span className="text-xl">Contact Us</span>
          </button>
        </h2>
      </div>
      <div className="mr-10">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut className="flex justify-center gap-2">
          <span className="mr-2">
            <SignInButton className="btn" />
          </span>
          <span>
            <SignUpButton className="btn btn-ghost" />
          </span>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
