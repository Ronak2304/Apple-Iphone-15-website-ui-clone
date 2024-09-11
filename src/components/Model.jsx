import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ModelView from "./ModelView"
import {useRef, useState} from 'react'
import { yellowImg } from "../utils"
import * as THREE from 'three'
import { Canvas } from "@react-three/fiber"
import { View } from "@react-three/drei"
import { models, sizes } from "../constants"

function Model() {
    const [size,setsize] = useState("small")
    const [model,setmodel] = useState(
        {
            title : "iPhone 15 Pro in natural titanium",
            color :  ["#8F8A81", "#ffe7b9", "#6f6c64"],
            img : yellowImg
        }
    )
    // camera control of the model 
    const cameraControlSmall = useRef()
    const cameraControlLarge = useRef()
    
    // model
    const small = useRef(new THREE.Group())
    const large = useRef(new THREE.Group())

    // rotation
    const [smallRotation , setsmallRotation] = useState(0)
    const [largeRotation , setlargeRotation] = useState(0)
    useGSAP(()=>{
        gsap.to("#heading",{
            y:0,
            opacity:1,
        })
    },[])
  return (
    <section className="common-padding">
        <div className="screen-max-width">
            <h1 id="heading" className="section-heading">
                Take a closer look.
            </h1>
            <div className="flex flex-col items-center mt-5">
                <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
                    <ModelView 
                        index = {1}
                        groupRef = {small}
                        gsapType = "view1"
                        controlRef = {cameraControlSmall}
                        setRotationState = {setsmallRotation}
                        item = {model}
                        size = {size}
                    />
                    <ModelView 
                        index = {2}
                        groupRef = {large}
                        gaspType = "view2"
                        controlRef = {cameraControlLarge}
                        setRotationState = {setlargeRotation}
                        item = {model}
                        size = {size}
                    />
                    <Canvas className="w-full h-full" style={{
                        position:'fixed',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        overflow:"hidden"
                    }}
                    eventSource={document.getElementById('root')}
                    >
                        <View.Port />
                    </Canvas>
                </div>
                <div className="mx-auto w-full">
                    <p className="text-sm font-light text-center mb-5">
                       {model.title} 
                    </p>
                    <div className="flex items-center justify-center">
                        <ul className="flex items-center bg-gray-300 px-4 py-4 justify-center backdrop-blur rounded-full">
                            {models.map((item,index) => (
                                <li key={index} className="w-6 h-6 mx-2 rounded-full cursor-pointer flex" style={{background: item.color[0]}}
                                onClick={()=>setmodel(item)}
                                >
                                    
                                </li>
                            ))}
                        </ul>
                        <button className="flex items-center justify-center p-1 bg-gray-300 rounded-full ml-3 gap-1 backdrop:blur">
                            {sizes.map((l)=>(
                                <span key={l} className="w-10 h-10 flex items-center text-sm text-center justify-center rounded-full bg-white text-black transition-all"
                                style={{backgroundColor: size===l.value ? 'white': 'transparent',color: size===l.value?'black':'white'}}
                                onClick={()=>setsize(l.value)}
                                >
                                    {l.label}
                                </span>
                            ))}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Model