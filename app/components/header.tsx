import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';
import { CVDownload } from '~/components/cv-download';
import { Post } from '~/types/post';

interface HeaderProps {
  posts: Post[];
}

export function Header({ posts }: HeaderProps) {
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

      {/*<p>Recent Posts</p>*/}
      {/*<ul>*/}
      {/*  {posts.slice(0, 3).map((post) => (*/}
      {/*    <li key={post.title}>*/}
      {/*      <a href={post.url} target='_blank'>*/}
      {/*        <img src={post.social_image} alt={post.title} />*/}
      {/*      </a>*/}

      {/*      <small>{post.positive_reactions_count} likes️</small>*/}
      {/*    </li>*/}
      {/*  ))}*/}
      {/*</ul>*/}

      <CVDownload />
    </header>
  );
}
