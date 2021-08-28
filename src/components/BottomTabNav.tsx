import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { MdHome, MdInfo, MdPermContactCalendar, MdMenu } from "react-icons/md";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";

const links = [
  { title: "Home", path: "/", icon: <MdHome className="mx-auto text-2xl" /> },
  {
    title: "About",
    path: "/about",
    icon: <MdInfo className="mx-auto text-2xl" />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <MdPermContactCalendar className="mx-auto text-2xl" />,
  },
];

export const BottomTabNav = () => {
  const [showBottomTabNavDrawer, setShowBottomTabNavDrawer] = useState(false);

  const router = useRouter();

  return (
    <div className="fixed w-screen bottom-0 shadow-2xl border-t-2 border-gray-800">
      <ul className="flex flex-row justify-evenly items-center">
        {links.map((link) => (
          <li
            className={
              router.pathname === link.path
                ? "w-full text-center py-2 bg-gray-800 text-white"
                : "w-full text-center py-2 hover:bg-gray-200"
            }
          >
            <Link href={link.path}>
              <a>
                {link.icon}
                <span className="text-xs">{link.title}</span>
              </a>
            </Link>
          </li>
        ))}
        <button
          className="w-full text-center mx-auto py-2 hover:bg-gray-100"
          onClick={() => setShowBottomTabNavDrawer(!showBottomTabNavDrawer)}
        >
          <MdMenu className="mx-auto text-2xl" />
          <span className="text-xs">More</span>
        </button>
      </ul>

      <div
        className={
          showBottomTabNavDrawer
            ? "h-44 transition-all duration-500"
            : "h-0 transition-all duration-500"
        }
      >
        <div className="container mx-auto p-4 text-center">
          <h6>
            Thank you for visiting my site, I'd love to to expand my network so
            why not connect <span role="img">😊</span>
          </h6>
          <ul className="flex flex-row justify-around items-center py-4">
            <li>
              <a href="https://github.com/damiensedgwick/" target="_blank">
                <AiFillGithub className="text-4xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/damiensedgwick/"
                target="_blank"
              >
                <AiFillLinkedin className="text-4xl" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/damiensedgwick" target="_blank">
                <AiFillTwitterCircle className="text-4xl" />
              </a>
            </li>
          </ul>

          <p>
            <small>
              © {new Date().getFullYear()} All Rights Reserved | Damien Sedgwick
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};