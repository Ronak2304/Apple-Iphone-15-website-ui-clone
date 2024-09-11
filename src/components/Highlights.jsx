import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import {rightImg, watchImg} from "../utils"
import VideoCarousel from "./VideoCarousel"

function Highlights() {
  useGSAP(() =>{
    gsap.to("#title",{
      opacity:1,
      y:-10,
      delay:1,
    })
    gsap.to("#watch",{
      opacity:1,
      y:0,
      delay:1.5,
      stagger:0.25
    })
  },[])
  return (
    <section id="highlights" className="overflow-hidden w-screen h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb:12 w-full items-end md:flex justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights
          </h1>
          <div className="flex flex-wrap gap-5 items-end">
            <p id="watch" className="link pb-2 gap-1"> 
              Watch the film
              <img src={watchImg} alt="watch"/>
            </p>
            <p id="watch" className="link pb-2 gap-1"> 
              Watch the event
              <img src={rightImg} alt="right"/>
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights  