import { Icon } from "@iconify/react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="container flex flex-col w-full py-6 text-center">
      <h6>
        Thanks for visiting my site, I'd love to to expand my network so why not
        connect <span role="img">😊</span>
      </h6>
      <ul className="flex flex-row items-center justify-around py-4 mx-auto">
        <li className="mx-3">
          <a href="https://github.com/damiensedgwick/" target="_blank">
            <AiOutlineGithub className="text-4xl" />
          </a>
        </li>
        <li className="mx-3">
          <a href="https://www.polywork.com/dks" target="_blank">
            <Icon className="text-3xl" icon="simple-icons:polywork" />
          </a>
        </li>
        <li className="mx-3">
          <a href="https://www.linkedin.com/in/damiensedgwick/" target="_blank">
            <AiOutlineLinkedin className="text-4xl" />
          </a>
        </li>
        <li className="mx-3">
          <a href="https://twitter.com/damiensedgwick" target="_blank">
            <AiOutlineTwitter className="text-4xl" />
          </a>
        </li>
      </ul>
      <p>
        <small>
          © {new Date().getFullYear()} All Rights Reserved | Damien Sedgwick
        </small>
      </p>
    </div>
  );
};
