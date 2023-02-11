import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

export function Header() {
  return (
    <header>
      <h1>Damien Sedgwick</h1>
      <p>Software Developer</p>
      <ul>
        <li>
          <a
            href="https://linkedin.com/in/damiensedgwick/"
            title="LinkedIn"
            target="_blank"
          >
            <IoLogoLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/damiensedgwick/"
            title="Github"
            target="_blank"
          >
            <IoLogoGithub />
          </a>
        </li>
      </ul>
    </header>
  );
}
