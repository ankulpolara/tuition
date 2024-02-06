import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import "../App.css";
import hero from "../assets/hero-bg.png";
import { Footer } from "../components/common/Footer";
import { motion } from "framer-motion"

export const Home = () => {
    const [data, setdata] = useState([]);

    // useEffect(() => {
    //     let response = axios.get("http://127.0.0.1:4000/api/v1/getAllData");
    //     response.then((response) => {
    //         console.log(response.data.response);
    //         if (!response.data.success) {
    //             console.log("toast generated");
    //             toast.error("Error while fetching data");
    //         }
    //         setdata(response.data.response);
    //     });
    // }, []);

    const navigate = useNavigate();
    return (
        // <div className='home w-full h-[100vh] text-white flex flex-col items-center'>
        //     <div className=' relative w-[70%] bg-[#ffffff45] flex flex-col gap-4  items-center mt-10 py-7 px-5 rounded'>
        //         <div>
        //             <button className='bg-blue-400 px-6 py-3 absolute top-2 right-2 rounded-md '
        //                 onClick={() => navigate("/create-page")}
        //             >Create New Page</button>
        //         </div>

        //         {
        //             data.length > 1 ? (
        //                 data.map((ele, index) => (
        //                     <div key={ele._id} className='flex flex-col '>
        //                         <div className='font-bold'>{ele.name}</div>
        //                         <div>{ele.content}</div>

        //                     </div>
        //                 ))
        //             ) : ("")

        //         }

        //     </div>
        // </div>
        <div>
            <div className=" hero text-white w-full min-h-[100vh] pb-14 md:pb-0    flex-col-reverse md:flex-row flex gap-3 justify-start md:justify-between px-10 items-center bg-purple-700   font-poppins ">
                {/* left side text   */}

                <div className=" w-[97%] md:w-[47%] flex gap-5 flex-col">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }} >
                        <h1 className="text-[2rem] md:text-[3.2rem] font-bold leading-[45px] md:leading-[65px] ">
                            Stand Out <span className="text-yellow-500">Locally</span>, Thrive  <span className="text-yellow-500"> Globally.</span><br></br>
                            Your <span className="text-yellow-500">Page</span>, Your <span className="text-yellow-500">Story</span>, Your Path to <span className="text-yellow-500">Success!</span>
                        </h1>
                        <p className=" mt-2 opacity-80 text-[0.90rem]  md:text-[1.1rem]">
                            Transform your tuition, coaching, or institute's reach with our easy-to-use website platform. Sign up for our waiting list today and be among the first to showcase your educational prowess to the world. Stand out locally, thrive globally – it all starts with a click!
                        </p>
                        <button className=" shadow__btn  bg-yellow-400 text-black px-5 py-3 mt-5 rounded-md shadow-lg shadow-[#0000003f] w-fit" onClick={() => navigate("/wait-list")}>
                            Join waitlist
                        </button>
                    </motion.div>
                </div>

                {/* rigth side   */}
                <div className=" w-full md:w-[50%] h-5/12 scale-105">
                    <motion.div
                        initial={{ opacity: 0, x: 50, y: 50 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 1.2 }} >
                        <img src={hero} alt="" />
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
