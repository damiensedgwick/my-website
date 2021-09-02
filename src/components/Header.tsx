import { Icon } from "@iconify/react";
import Link from "next/link";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

export const Header = () => {
  return (
    <div className="container flex flex-row max-w-6xl px-4 mx-auto md:px-0">
      <ul className="flex flex-row items-center justify-around mx-auto">
        <li className="mx-2">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="mx-2">
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li className="mx-2">
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>

      <ul className="flex flex-row items-center justify-around py-4 mx-auto">
        <li className="mx-2">
          <a href="https://github.com/damiensedgwick/" target="_blank">
            <AiOutlineGithub className="text-3xl" />
          </a>
        </li>
        <li className="mx-2">
          <a href="https://www.polywork.com/dks" target="_blank">
            <Icon className="text-2xl" icon="simple-icons:polywork" />
          </a>
        </li>
        <li className="mx-2">
          <a href="https://www.linkedin.com/in/damiensedgwick/" target="_blank">
            <AiOutlineLinkedin className="text-3xl" />
          </a>
        </li>
        <li className="mx-2">
          <a href="https://twitter.com/damiensedgwick" target="_blank">
            <AiOutlineTwitter className="text-3xl" />
          </a>
        </li>
      </ul>
    </div>
  );
};
