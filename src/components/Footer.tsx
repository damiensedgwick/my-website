import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillHeart,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="container flex flex-col w-full py-6 text-center">
      <h6>
        Thanks for visiting my site, I'd love to to expand my network so why not
        connect <span role="img">😊</span>
      </h6>
      <ul className="flex flex-row items-center justify-around w-1/2 py-4 mx-auto">
        <li>
          <a href="https://github.com/damiensedgwick/" target="_blank">
            <AiFillGithub className="text-4xl" />
          </a>
        </li>
        <li>
          <a href="https://www.polywork.com/dks" target="_blank">
            <AiFillHeart className="text-4xl" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/damiensedgwick/" target="_blank">
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
  );
};
