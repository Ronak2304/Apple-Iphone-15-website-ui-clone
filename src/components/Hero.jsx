import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import {heroVideo,smallHeroVideo} from "../utils"
import { useState,useEffect } from "react"

function Hero() {
  const [videoSrc,setVideoSrc] = useState(
    window.innerWidth<760 ? smallHeroVideo : heroVideo
  )

  const handlevideo = () =>{
    if(window.innerWidth<760){
      setVideoSrc(smallHeroVideo)
    }
    else{
      setVideoSrc(heroVideo)
    }
  } 
  useEffect(() => {
    window.addEventListener('resize',handlevideo)
  
    return () => {
      window.removeEventListener('resize',handlevideo)
    }
  }, [])
  

  useGSAP(()=>{
    gsap.to("#iPhone15",{
      opacity:1,
      ease:"back.inOut",
      duration:1.5
    }) ,
    gsap.to("#cta,.btn,#price",{
      y:-20,
      ease:"power1.inOut",
      opacity:1,
      delay:2,
      
    })
  }

,[]) 
  return (
    <section className="w-full nav-height bg-black relative">
       <div className="h-5/6 w-full flex-center flex-col">
          <p className="hero-title" id="iPhone15">
            iPhone 15 Pro
          </p>
          <div  className="md:w-10/12 w-9/12">
              <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
                <source src={videoSrc} type="video/mp4"/>
              </video>
          </div>
       </div>
       <div className="flex flex-col items-center opacity-0 translate-y-20" id="cta">
          <a href="#highlights"   className="btn">
            Buy
          </a>
          <p className="font-normal text-xl" id="price">
            From $199/month or $999
          </p>
       </div>
    </section>
  )
}

export default Hero

