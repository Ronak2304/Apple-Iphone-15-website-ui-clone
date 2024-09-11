import { ChevronLeft, ChevronRight } from "react-feather";
import { useState } from "react";
import { hightlightsSlides } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function VideoCarousel() {
  const [slide, setslide] = useState(0)

  const prev = () => (setslide(() => (slide === 0 ? hightlightsSlides.length-1: slide-1)))
  const next = () => (setslide(() => (slide === hightlightsSlides.length-1 ? 0 : slide+1)))
  
  useGSAP(()=>{
    gsap.to("#carousel",{
      x:0,
      duration:1,
      opacity:1,
    })
  })

  return (
    <>
      <div className="items-center flex">
        {hightlightsSlides.map((a)=>
        <div key={a.id} id="slider" style={{transform : `translateX(-${slide * 100}%)`}} className="sm:pr-20 pr-10 transition-all duration-500">

          {/* video frame */}
          <div className="lg:pt-5 sm:pt-2 overflow-hidden relative sm:w-[70vw] w-[88vw] md:h-[70vh] sm:h-[50vh] h-[35vh]">

            {/* video div */}
 
            <div className="overflow-hidden bg-black flex items-center justify-center rounded-3xl w-full h-full">
              <video className="pointer-events-none" id="video"  autoPlay loop playsInline={true} muted>
                <source src={a.video} type="video/mp4" />
              </video>
            </div>

            {/* text div */}

            <div className="absolute left-[5%] top-12">
              {a.textLists.map((text)=>
              <p key={text} className="md:text-2xl text-white text-xl">
                {text}
              </p>)}
            </div>  
          </div>
        </div>)}
        
           <div id="carousel" className="bg-blue translate-x-20 rounded-3xl flex justify-evenly gap-5 opacity-0 duration-1000 items-center top-[110%] lg:left-[33%] left-[10%] absolute w-200 h-10">
           <button onClick={prev}>
              <ChevronLeft size={40} color="black"/>
              </button>
              {hightlightsSlides.map((obj,index)=>(
              <div key={index} className={` ${slide===index ? "p-2" : "bg-opacity-60" } transition-all duration-500 h-3 relative items-center cursor-pointer-none flex w-3 rounded-full bg-zinc`}>   
               
                         </div>
              ))}
               <button onClick={next}>
              <ChevronRight  size={40} color="black"/>
              </button>
        </div>
      </div>
    </>
  )
}

export default VideoCarousel;

