'use client'
import { useState } from "react"


export default function Input(){

    const [email,setEmail] = useState('')
    const [error,setError] = useState(false)
    function onChangeHandler(e : any) {
        setEmail(e.target.value)
    }

    function onClickHandler(){
        email == '' ?  setError(true) : setError(false)
    }

    return (
        <>
            <div className="mt-8 flex-col flex md:flex-row justify-between items-center w-full  font-Franklin">
                <input onChange={onChangeHandler} type="email" placeholder="Your email address..." className={`border rounded-full py-4 px-8 basis-2/3 w-full ${error ? "border-Light-Red": "border-Pale-Blue "}`}/>
                <button onClick={onClickHandler} className="md:w-fit w-full md:mt-0 mt-5 bg-custom-blue font-semibold text-white px-16 py-4 rounded-full shadow-xl ml-5 hover:opacity-75">Notify Me</button>
            </div>
            {error &&  <p className="font-Franklin text-sm ml-8 text-start mt-2 text-Light-Red font-light">Please provide a valid email address</p>} 
        </>
    )
}