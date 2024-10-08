import { appleImg, bagImg, searchImg } from "../utils"
import {navLists} from "../constants"

function Navbar() {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
        <nav className="flex w-full screen-max-width"> 
            <img src={appleImg} alt="Apple logo" width={14} />
            <div className="flex flex-1 justify-center max-sm:hidden">
              {/* {["Phones","Macbooks","Tablets"].map((abc)=>
                (
                  <div key={abc}>
                      {abc}
                  </div>
                )
              )} */}

              {
                navLists.map((abc)=>
                <div key={abc} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition">
                    {abc}
                </div>
                )
              }
            </div>
            <div className="gap-7 flex items-baseline max-sm:justify-end max-sm:flex-1">
              <img src={searchImg} alt="search" width={18} />
              <img src={bagImg} alt="bag" width={18} />
            </div>
        </nav>
    </header>
  )
}

export default Navbar