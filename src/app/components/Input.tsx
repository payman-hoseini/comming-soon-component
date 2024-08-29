'use client'
import { useEffect, useState } from "react"


export default function Input(){

    const [email,setEmail] = useState('')
    const [error,setError] = useState(false)
    const [win , setWin] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
          setWin(window.innerWidth);
        };
    
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
    }, []);
    

    function onChangeHandler(e : any) {
        setEmail(e.target.value)
    }

    function onClickHandler(){
        email == '' ?  setError(true) : setError(false)
    }

    return (
        <>
           <div className="w-full">
                <div className="mt-8 flex-col flex md:flex-row justify-center items-center w-full font-Franklin">
                    <input onChange={onChangeHandler} type="email" placeholder="Your email address..." className={`border rounded-full md:py-4 py-3 px-8 basis-2/3  w-full ${error ? "border-Light-Red": "border-Pale-Blue "}`}/>
                    {(error && win<768) &&  <p className="font-Franklin text-sm ml-8 text-center mt-2 text-Light-Red font-light">Please provide a valid email address</p>} 
                    <button onClick={onClickHandler} className=" right-0 md:w-fit w-full md:mt-0 mt-5 bg-custom-blue font-semibold text-white px-16 md:py-4 py-3 rounded-full shadow-xl md:ml-5 ml-0 hover:opacity-75">Notify Me</button>
                </div>
                {(error && win>=768) &&  <p className="font-Franklin text-sm ml-8 text-start mt-2 text-Light-Red font-light">Please provide a valid email address</p>} 
           </div>

        </>
    )
}