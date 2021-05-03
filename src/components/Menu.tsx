import {
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
  TiDevicePhone,
  TiMail,
} from "react-icons/ti";

export const Menu = () => {
  return (
    <nav className="nav-links flex flex-col items-center absolute top-12 -right-2 md:relative md:flex-row md:top-0 md:right-0">
      <a
        className="text-4xl my-2 md:mx-2 md:my-0"
        href="mailto:damiensedgwick@icloud.com"
      >
        <TiMail />
      </a>
      <a className="text-4xl my-2 md:mx-2 md:my-0" href="tel:+447939273379">
        <TiDevicePhone />
      </a>
      <a
        className="text-4xl my-2 md:mx-2 md:my-0"
        href="https://github.com/damiensedgwick"
        target="_blank"
      >
        <TiSocialGithubCircular />
      </a>
      <a
        className="text-4xl my-2 md:mx-2 md:my-0"
        href="https://www.linkedin.com/in/damiensedgwick/"
        target="_blank"
      >
        <TiSocialLinkedinCircular />
      </a>
    </nav>
  );
};
