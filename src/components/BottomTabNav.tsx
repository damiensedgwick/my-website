import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { MdHome, MdInfo, MdPermContactCalendar, MdMenu } from "react-icons/md";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillHeart,
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
  const [showBottomTabNavDraw, setShowBottomTabNavDraw] = useState(false);

  const router = useRouter();

  return (
    <div className="fixed bottom-0 w-screen bg-white border-t-2 border-gray-800 shadow-2xl">
      <ul className="flex flex-row items-center justify-evenly">
        {links.map((link) => (
          <li
            key={link.path}
            className={
              router.pathname === link.path
                ? showBottomTabNavDraw
                  ? "w-full text-center py-2"
                  : "w-full text-center py-2 bg-gray-800 text-white"
                : "w-full text-center py-2 hover:bg-gray-800 hover:text-white"
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
          className={
            showBottomTabNavDraw
              ? "w-full text-center mx-auto py-2 bg-gray-800 text-white"
              : "w-full text-center mx-auto py-2 hover:bg-gray-800 hover:text-white focus:bg-white focus:text-gray-800 active:bg-white active:text-gray-800"
          }
          onClick={(e) => {
            setShowBottomTabNavDraw(!showBottomTabNavDraw);
          }}
        >
          <MdMenu className="mx-auto text-2xl" />
          <span className="text-xs">More</span>
        </button>
      </ul>

      <div
        id="bottom-tab-nav-draw"
        className={
          showBottomTabNavDraw
            ? "h-44 transition-all duration-500 bg-gray-800 text-white"
            : "h-0 transition-all duration-500 bg-gray-800 text-white"
        }
      >
        <div className="container p-4 mx-auto text-center">
          <h6>
            Thanks for visiting my site, I'd love to to expand my network so why
            not connect <span role="img">😊</span>
          </h6>
          <ul className="flex flex-row items-center justify-around py-4">
            <li>
              <a href="https://github.com/damiensedgwick/" target="_blank">
                <AiFillGithub className="text-4xl" />
              </a>
            </li>
            <li>
              <a href="https://github.com/damiensedgwick/" target="_blank">
                <AiFillHeart className="text-4xl" />
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
