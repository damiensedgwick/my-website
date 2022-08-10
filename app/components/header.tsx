import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';

export function Header() {
  return (
    <header>
      <div>
        <h1>Damien Sedgwick</h1>
        <p>Software Developer</p>
        <ul>
          <li>
            <a href='https://linkedin.com/in/damiensedgwick/' title='LinkedIn'>
              <IoLogoLinkedin />
            </a>
          </li>
          <li>
            <a href='https://github.com/damiensedgwick/' title='Github'>
              <IoLogoGithub />
            </a>
          </li>
          <li>
            <a href='https://twitter.com/damiensedgwick' title='Twitter'>
              <IoLogoTwitter />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}