import React, { useRef, useState } from 'react'
import "../App.css"
import { MenuHandler } from '@material-tailwind/react';
import axios from 'axios';
import { toast } from 'react-toastify';


export const WaitList = () => {
    const [email, setemail] = useState("");
    const [number, setnumber] = useState("");
    const [text, settext] = useState("");

    let buttonRef = useRef();


    let handleSubmit = (e) => {
        e.preventDefault();
        let toastId = toast.loading("Sending...")
        let data = { email, number, text }

        let response = axios.post("http://127.0.0.1:4000/api/v1/contact", data);
        response.then((response) => {
            setemail("");
            setnumber("");
            settext("");
            console.log(response.data.response);
            toast.update(toastId, {
                render: "Your message successfully send",
                type: "success",
                isLoading: false
            })
            setTimeout(() => {
                toast.dismiss(toastId);
            }, 4000);
            if (!response.data.success) {
                // toast.error("Error while fetching data");
                console.log("Error occure");

            }
            else {
                toast.update(toastId, {
                    render: "successfully send your mail",
                    type: "success",
                    isLoading: false
                }
                )

            }


        });
    }

    return (
        <div className='waitList w-screen min-h-[110vh] flex items-center justify-start font-poppins flex-col '>
            <h1 className=' contact-h1 mt-10 mb-10 text-[2.6rem] md:text-[3rem] select-none text-yellow-500 ' > Contact Us</h1>


            <form action="" className='text-white bg-yellow-500 md:w-[50%] w-[90%] mx-auto p-4  md:p-8 rounded-lg flex flex-col justify-center items-center gap-3 md:gap-5 shadow-lg shadow-[#ffffff38] py-10 opacity-80 ' onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-3  w-full mx-auto flex flex-col items-center text-start">
                    <label htmlFor="email" className="block mb-3 md:mb-5 text-lg font-medium text-gray-900 dark:text-white cursor-pointer">Email address</label>
                    <input type="email" id="email" className="w-[90%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required
                        onChange={(e) => setemail(e.target.value)}
                        value={email}

                    />
                </div>

                <div className="mb-3 w-full mx-auto flex flex-col items-center">
                    <label htmlFor="number" className="block mb-3 md:mb-5 text-lg font-medium text-gray-900 dark:text-white cursor-pointer">Contact Number</label>
                    <input type="text" id="number" className="w-[90%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="8322250343" required
                        onChange={(e) => setnumber(e.target.value)}
                        value={number}
                        pattern="^[0-9]{10}$"
                    />
                </div>

                <div className="mb-3 w-full mx-auto flex flex-col items-center">

                    <label htmlFor="message" className="block mb-3 text-lg  font-medium text-gray-900 dark:text-white cursor-pointer">Your message</label>
                    <textarea id="message" rows="4" className="block p-2.5 w-[90%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your queries here..."
                        onChange={(e) => settext(e.target.value)}
                        value={text}
                    ></textarea>

                </div>

                <button ref={buttonRef} className='px-10 py-3 bg-blue-500 rounded-md'>
                    Submit
                </button>
            </form>

        </div>
    )
}
