import Link from "next/link";
import { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";

import { Menu } from "./Menu";

export const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="py-4 shadow-2xl">
      <div className="container mx-auto px-6 md:px-0">
        <div className="relative flex flex-row justify-between items-center">
          <div className="logo">
            <Link href="/">
              <a className="text-4xl">DKS</a>
            </Link>
          </div>
          {showMenu && <Menu />}
          <div>
            <button
              name="menu"
              aria-label="menu"
              className="text-4xl"
              onClick={() => setShowMenu(!showMenu)}
            >
              <TiThMenuOutline />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
