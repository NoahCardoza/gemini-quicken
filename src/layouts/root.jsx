import { Outlet, NavLink, Link } from "react-router-dom";
import {ReactComponent as QuickenIcon} from "../assets/quicken.svg";
import {ReactComponent as GeminiIcon} from "../assets/gemini-dollar-gusd-logo.svg";
import {ReactComponent as ChevronRightIcon} from "../assets/chevron-right.svg";

export default function Root() {
  return (
    <div className="h-screen bg-slate-900 text-gray-100 overflow-none flex flex-col">
      <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b border-slate-50/[0.06] supports-backdrop-blur:bg-white/95 bg-slate-900/75">
        <div className="max-w-8xl mx-auto">
          <div
            className="py-4 border-b lg:px-8 lg:border-0 border-slate-300/10 mx-4 lg:mx-0"
          >
            <div className="relative flex items-center">
              <Link
                className="mr-3 flex items-center overflow-hidden"
                to="/">
                <GeminiIcon className="w-8 h-8 sm:w-1126 sm:h-12 sm:w-16 sm:h-16 md:w-16 md:h-16" />
                <span className="ml-3 mr-4">
                  <ChevronRightIcon className="fill-white" />
                </span>
                <QuickenIcon className="w-8 h-8 sm:w-12 sm:h-12 sm:w-16 sm:h-16 md:w-16 md:h-16" />
                <span className="ml-4 text-xl sm:text-3xl font-light">Gemini to Quicken</span>
              </Link>
              <div className="relative flex items-center ml-auto">
                <nav className="text-sm leading-6 font-semibold text-slate-200">
                  <ul className="flex space-x-8">
                    <li>
                      <NavLink className={({isActive}) => `hover:text-sky-300 py-5 border-sky-300 ${isActive ? 'border-b-2' : ''}`} to="/">Convert</NavLink>
                    </li>
                    <li>
                      <NavLink className={({isActive}) => `hover:text-sky-300 py-5 border-sky-300 ${isActive ? 'border-b-2' : ''}`} to="/security">Security</NavLink>
                    </li>
                  </ul>
                </nav>
                <div className="flex items-center border-l ml-6 pl-6 border-slate-800">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/NoahCardoza/gemini-quicken-converter"
                    className="block text-slate-400 hover:text-slate-300">
                    <svg
                      viewBox="0 0 16 16"
                      className="w-5 h-5"
                      fill="currentColor"
                      aria-hidden="true">
                      <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Outlet />    
  </div>
  )
}