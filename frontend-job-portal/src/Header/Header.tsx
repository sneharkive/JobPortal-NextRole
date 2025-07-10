import { useState } from "react";
import { IconAsset, IconBell, IconSettings } from "@tabler/icons-react";
import { Indicator } from "@mantine/core";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black  sticky top-0 left-0 right-0 z-50">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-16 px-4 sm:px-6 lg:px-8">
        <Link className="flex gap-2 text-amber-400" to="/">
          <IconAsset />
          <span>NextRole</span>
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
           <NavLinks />
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden cursor-pointer text-gray-200 sm:block border-gray-600 border-2 rounded-full p-1">
              <IconSettings size={19} className="transition hover:scale-120" />
            </div>

            <div className="hidden cursor-pointer text-gray-200  sm:block border-gray-600 border-2 rounded-full p-1">
              <Indicator processing>
                <IconBell size={19} className="transition hover:scale-120" />
              </Indicator>
            </div>
            <div className="sm:flex sm:gap-4">
              <a
                className="hidden rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-teal-300 md:block"
                href="#"
              >
                Sign in
              </a>

              {/* <a
                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300 sm:block"
                href="#"
              >
                Sign up
              </a> */}
            </div>

            <button
              type="button"
              // onClick={imgHandler}
              className="overflow-hidden rounded-full border border-gray-300 shadow-inner dark:border-gray-600"
            >
              <span className="sr-only">Toggle dashboard menu</span>

              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="size-10 object-cover cursor-pointer"
              />
            </button>

            {/* {isImgOpen && (
              <div
                className="absolute end-0 z-10 mt-54 mr-12 w-56 rounded-md border border-gray-100 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900"
                role="menu"
              >
                <div className="p-2">
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                    role="menuitem"
                  >
                    My profile
                  </a>

                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                    role="menuitem"
                  >
                    My data
                  </a>

                  <a
                    href="#"
                    className="sm:hidden block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                    role="menuitem"
                  >
                    Team settings
                  </a>
                  <a
                    href="#"
                    className="sm:hidden block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                    role="menuitem"
                  >
                    Notification
                  </a>

                  <form method="POST" action="#">
                    <button
                      type="submit"
                      className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50 dark:text-red-500 dark:hover:bg-red-600/10"
                      role="menuitem"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                        />
                      </svg>
                      Logout
                    </button>
                  </form>
                </div>
              </div>
            )} */}

            <div className="block md:hidden">
              <button
                onClick={menuHandler}
                className="cursor-pointer rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        {isOpen && (
          <div
            className="md:hidden block absolute end-0 z-10 top-14 pl-6 text-sm mr-6 w-56 rounded-md border border-gray-100 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900 py-2"
            role="menu"
          >
          <NavLinks />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
