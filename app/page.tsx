"use client"
import { Button } from "./ui/button"
import { ArrowRightIcon } from "@heroicons/react/20/solid"
import { useState } from "react" // Import useState
import Link from "next/link"
export default function Page() {
  // State to control the visibility of the popup
  const [showPopup, setShowPopup] = useState(false)

  // Function to toggle the popup visibility
  const togglePopup = () => {
    setShowPopup(!showPopup)
  }

  return (
    <main className="pageBackground flex min-h-screen flex-col items-center justify-between p-24">
      <div>Happy Birthday, Eli</div>
      <p>If you want a small gift, press button</p>
      <Button className="mt-4 w-full " onClick={togglePopup}>
        {" "}
        <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
      </Button>
      {showPopup && ( // Conditional rendering for the popup
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      You have a gift from a prince
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Sexy boy you have gift 🎁
                        <Link href="https://youtube.com/shorts/Q4TIYn42Aj0?feature=share">
                          click here to see gift
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={togglePopup}
                >
                  Got it, thanks!
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                >
                  Need help?
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
