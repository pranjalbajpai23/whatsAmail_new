import { NavLink } from "react-router-dom";

const EmailsSidepanel = () => {

    const options = [
        {
            name: "Inbox",
            to: "inbox"
        },
        {
            name: "Starred",
            to: "starred"
        },
        {
            name: "Snoozed",
            to: "snoozed"
        },
        {
            name: "Sent",
            to: "sent"
        },
        {
            name: "Draft",
            to: "draft"
        },
        {
            name: "Connect",
            to: "connect"
        },

    ]

    return <>
        <div className="w-1/6 flex flex-col h-full rounded-md pt-20">
            {
                options.map(item => (
                    <NavLink
                        key={item.name}
                        to={`./${item.to}`}
                        className="m-2 px-2 rounded-md text-lg hover:bg-[#EDF2F4]"
                        style={({ isActive }) => (isActive ? { backgroundColor: "#8D99AE", color: "white" } : {})}
                    >
                        {item.name}
                    </NavLink>
                ))
            }
        </div>

    </>
}
export default EmailsSidepanel;