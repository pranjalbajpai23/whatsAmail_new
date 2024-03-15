import { useEffect, useState } from "react";
import useGmail from "../Hooks/useGmail";
import { useSelector } from "react-redux";

const EmailsListing = () => {
    const mails = useSelector(state => state.emails_Google);
    const date = new Date();
    const [refresh, setResfresh] = useState();
    const { fetchEmails } = useGmail()
    const handleRefresh = () => {
        setResfresh(!refresh)
    }
    useEffect(() => {
        fetchEmails();
        console.log(mails);
    }, [refresh])
    return <>
        <div className="bg-white rounded-2xl  w-5/6 h-full">
            <div className="flex items-center p-2">
                <div className="rounded-md p-2 mr-2 hover:bg-slate-400/25">
                    <input className="mx-2 hover:bg-slate-400/75" type="checkbox" name="" id="" />
                    <select className="w-4 bg-transparent">
                        <option value=""></option>
                        <option value="All">All</option>
                        <option value="None">None</option>
                        <option value="Read">Read</option>
                    </select>
                </div>
                <button className="rounded-full p-4 mr-2 hover:bg-slate-400/25" onClick={handleRefresh}>
                    <img src="/refresh.svg" className="w-4 h-4" alt="image not availabe" />
                </button>
            </div>

            <div className="w-full">
                <table className="flex flex-col divide-y divide-gray-200">
                    <thead className="w-full bg-gray-50 ">
                        <tr className="w-full flex justify-between">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sender</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        </tr>
                    </thead>
                    <tbody className="flex flex-col bg-white divide-y divide-gray-200">
                        {mails.map((email) => {
                            const name = email.From.split('<')[0].trim();
                            // Split the date string by space
                            const parts = email.Date.split(" ");

                            const dayOfMonth = parts[1];
                            const month = parts[2];
                            const time = parts[4];
                            const data = new Date(time);
                            const time12hr = data.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
                            let displayData = time12hr;
                            if (date.getDate() != dayOfMonth) {
                                displayData = dayOfMonth + " " + month;
                            }
                            return <tr key={email.id} className=" hover:bg-slate-100">
                                <div>
                                    <td className="mr-6 px-6 py-4 whitespace-nowrap">{name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="font-bold">{email.Subject}</span > -
                                            {email.message}
                                        
                                    </td>
                                </div>


                                <td className="px-6 py-4 whitespace-nowrap">{displayData}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </>
}
export default EmailsListing;
//.slice(0, 170 - email.Subject.length)