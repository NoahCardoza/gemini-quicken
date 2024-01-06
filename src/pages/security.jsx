import { Link } from "react-router-dom";

export default function SecurityPage() {
  return (
   <div className="flex items-center w-full h-full flex-col p-5">
    <div className="px-6 sm:px-0 sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-4/12">
      <div className="relative group w-full flex justify-center items-center">
        <div className="flex items-center inset-0 w-full h-full rounded-xl bg-gray-700 bg-opacity-80 shadow-2xl backdrop-blur-xl">
          <div className="space-y-6 text-center m-7">
            <span className="text-2xl font-bold">Security</span>
            <p className="text-gray-100 text-lg">
              You can be sure your transaction data is safe because it never
              leaves your computer. The whole conversion process from start to
              finish is handled on your browser, locally, on your computer with
              JavaScript.
            </p>
            <p className="text-gray-100 text-lg">
                The project is also open source and you can view the code on <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/NoahCardoza/gemini-quicken-converter"
                  className="link">GitHub</a>.
            </p>
            <p className="text-gray-100 text-lg">
              Let{`'`}s <Link to="/" className="link">convert</Link> that file!.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div> 
  )
}