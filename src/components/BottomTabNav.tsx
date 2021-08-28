import Link from "next/link";
import { MdHome, MdInfo, MdPermContactCalendar, MdMenu } from "react-icons/md";

export const BottomTabNav = () => {
  return (
    <div className="fixed w-screen bottom-0 shadow-2xl border-t-2 border-gray-800">
      <ul className="flex flex-row justify-evenly items-center">
        <li className="w-full text-center py-4 hover:bg-gray-100">
          <Link href="/">
            <a>
              <MdHome className="mx-auto text-2xl" />
              <span className="text-sm">Home</span>
            </a>
          </Link>
        </li>
        <li className="w-full text-center py-4 hover:bg-gray-100">
          <Link href="/">
            <a>
              <MdInfo className="mx-auto text-2xl" />
              <span className="text-sm">About</span>
            </a>
          </Link>
        </li>
        <li className="w-full text-center py-4 hover:bg-gray-100">
          <Link href="/">
            <a>
              <MdPermContactCalendar className="mx-auto text-2xl" />
              <span className="text-sm">Contact</span>
            </a>
          </Link>
        </li>
        <button className="w-full text-center mx-auto py-4 hover:bg-gray-100">
          <MdMenu className="mx-auto text-2xl" />
          <span className="text-sm">More</span>
        </button>
      </ul>
      {/* Home */}
      {/* About */}
      {/* Contact */}
      {/* More: Opens nav drawer? */}
    </div>
  );
};
