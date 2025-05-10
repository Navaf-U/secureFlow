import * as React from "react";
import { ModeToggle } from "@/components/themes/ModeToggle";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="w-full p-4 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">SecureFlow</div>
        <div className="space-x-4 hidden md:flex">
          <Button variant="link" className="text-white">Home</Button>
          <Button variant="link" className="text-white">About</Button>
          <Button variant="link" className="text-white">Contact</Button>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;
