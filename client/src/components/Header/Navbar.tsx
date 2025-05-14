import * as React from "react";
import { ModeToggle } from "@/components/themes/ModeToggle";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="w-full p-4 dark:bg-black bg-white dark:text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold dark:text-white">SecureFlow</div>
        <div className="space-x-4 hidden md:flex">
          <Button variant="link" className="dark:text-white">Home</Button>
          <Button variant="link" className="dark:text-white">About</Button>
          <Button variant="link" className="dark:text-white">Contact</Button>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;
