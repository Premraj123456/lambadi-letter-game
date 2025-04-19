"use client"

import Image from "next/image";
import { ImagePaths } from "./dist/imagePaths";
import { useEffect, useRef, useState } from "react";


export default function Home() {

  const random_image = ImagePaths[Math.floor(Math.random() * 28)]

  const [randImage, setRandImage] = useState("/lambadi_letters/a.png")

  useEffect(() => {
    setRandImage(random_image)
  },[])

  function handleChange(){
    setRandImage(random_image)
  }


  const inputRef = useRef("")
  const [correct, setCorrect] = useState(null)

  console.log(randImage)

  // useEffect(() => {
  //   random_image()
  // },[randImage])

  // function random_image(){
  //   let rand_num = Math.floor(Math.random() * 28)
  //   const rand_image_path = ImagePaths[rand_num]
  //   return rand_image_path
  // }
  const randLetter = randImage?.split("/")[2].split('.')[0]
  console.log(randLetter)





  function checkHandle(){
    const inputText = inputRef.current?.value
    if (inputText === randLetter) {
      console.log(correct)
      // setCorrect(true)
      // setRandImage(random_image())
    }
    else{
      console.log("wrong")
    }
  }

  return(
    <main className="flex flex-col items-center p-6 space-y-4">
      <h1 className="font-bold text-3xl">Lambadi Letter Indentification Game</h1>

      <section className="w-1/3 min-w-80 max-w-90 space-y-4">
      <div className="border  my-6 rounded flex flex-col items-center">
        <Image className="w-full max-h-90 max-w-90 m-1" width={200} height={200} alt="Lambadi Letter" src={randImage} />
        <button onClick={handleChange} className="w-full h-10 bg-black text-white active:opacity-75 transition">Change</button>
      </div>

        <input  ref={inputRef} className=" border p-2 pl-3 rounded w-full"  placeholder="Enter Letter name eg. a"/>
        <button onClick={() => randLetter === inputRef.current?.value? setCorrect(true) : setCorrect(false)} className="w-full rounded-lg font-bold bg-cyan-700 text-white h-12 active:opacity-75 transition">Check</button>
    
    </section>

      {inputRef.current?.value && <p className={correct ===true ? "text-green-700" : "text-red-700"}>{correct === true ? "Correct Answer" : "Wrong Answer"}</p> }    </main>
  )
}
