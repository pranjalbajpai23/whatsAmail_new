import EmailsSidepanel from "./EmailsSidepanel";
import EmailsListing from "./EmailsListing";
const Emails = () => {
    return <>
        <div className="flex h-full bg-[#EDF2F4]">
            <EmailsSidepanel />
            <EmailsListing />
        </div>
    </>
}
export default Emails;