import { Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export function Footer() {
    const nav = useNavigate()
    return (
        <footer className="w-full  p-3 bg-gray-100">
            <div className="flex flex-row flex-wrap justify-center gap-y-3 gap-x-12  text-center md:justify-between bg-gray-100">
                <div className="font-bold"> WebPage</div>
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 ">


                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            onClick={() => nav("/wait-list")}
                        >
                            Contact Us
                        </Typography>
                    </li>
                </ul>
            </div>
            <hr className="my-3 border-gray-100" />
            <Typography color="blue-gray" className="text-center font-normal">
                &copy; 2024 Rishabh Bothra
            </Typography>
        </footer>
    );
}