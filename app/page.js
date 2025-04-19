"use client"

import Image from "next/image";
import { ImagePaths } from "./dist/imagePaths";
import { useEffect, useRef, useState } from "react";


export default function Home() {
  const random_image = ImagePaths[Math.floor(Math.random() * 28)]
  const [randImage, setRandImage] = useState("/lambadi_letters/a.png")
  const [correct, setCorrect] = useState("ok")
  const inputRef = useRef("")

  useEffect(() => {
  
    if (randLetter === inputRef.current?.value){
    setRandImage(random_image)
    console.log(randImage)
    inputRef.current.value = ''
    }

  },[correct])

  const checkButtonRef = useRef("")
  
  const randLetter = randImage?.split("/")[2].split('.')[0]

  // useEffect(() => {
  //   setRandImage(random_image)
  // })


  return(
    <main className="flex flex-col items-center p-6 space-y-4">
      <h1 className="font-bold text-3xl">Lambadi Letter Indentification Game</h1>

      <section className="w-1/3 min-w-80 max-w-90 space-y-4">
      <div className="border  my-6 rounded flex flex-col items-center">
        <Image className="w-full max-h-90 max-w-90 m-1" width={200} height={200} alt="Lambadi Letter" src={randImage} />
      </div>

        <input  ref={inputRef} className="border p-2 pl-3 rounded w-full"  placeholder="Enter Letter name eg. a"/>
        <button onClick={() => { 
          if (randLetter === inputRef.current?.value) {
            console.log(randLetter,inputRef.current?.value)
            // checkButtonRef.current.className = 'text-green-700 transition-all ease-in scale-130'

            setCorrect(`ok ${randLetter}`)
          } else {setCorrect(`not ok ${randLetter}`)}
          
        }} className="w-full rounded-lg font-bold bg-cyan-700 text-white h-12 active:opacity-75 transition">Check</button>
    
    </section>

      {inputRef.current?.value ? <p ref={checkButtonRef} className={correct.startsWith("ok") ===true ? "text-green-700" : "text-red-700"}>{correct.startsWith("ok") === true ? "Correct Answer" : "Wrong Answer"}</p> : null}    </main>
  )
}
