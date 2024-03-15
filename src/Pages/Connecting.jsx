import { Link } from "react-router-dom";
import useGoogleAuth from "../Hooks/useGoogleAuth";

const Connecting = () => {
    const{connectGmail}= useGoogleAuth()
    const connectingGmail = async () => {
        const register= connectGmail();
        if(register)
        console.log('getting controll back')
    }
    return <>
        <div className="w-full h-[90vh] flex items-center justify-center">
            <div className="flex flex-col w-fit text-3xl  border-2 border-black p-8 rounded-md">
                <span className="text-center mb-16">Connect your E-Mail accounts</span>
                <button className="flex border-2 border-black p-2 items-center rounded-md my-2 hover:bg-black hover:text-white" onClick={connectingGmail} >
                <img src="google.svg" className="w-8 h-8 mx-2" alt="" /> Connect Google Account
                </button>
                <button className="flex border-2 border-black p-2 items-center rounded-md my-2 hover:bg-black hover:text-white"><img src="microsoft.svg" className="w-8 h-8 mx-2" alt="" /> Connect Microsoft Account</button>

                <Link className="text-sm hover:border-b-2 border-black w-max"  >Unable to connect? mail us</Link>
            </div >
        </div>

    </>
}
export default Connecting;