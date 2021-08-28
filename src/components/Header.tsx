import Link from "next/link";

export const Header = () => {
  return (
    <div className="container px-4 py-6 mx-auto">
      <ul className="flex flex-row items-center justify-around w-1/2 mx-auto">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
