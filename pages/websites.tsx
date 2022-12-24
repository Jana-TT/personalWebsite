import Template from "../components/webapps/template";

export default function Websites() {
    return(
        <div>
            <Template linkPage="https://4351-website.vercel.app/" text={["Created a reservation system for a restaurant", "Made with NextJS, Dgraph, Tailwind CSS", "Features:", "Takes in guests and registered users", "Users are able to search and make reservations", "Prompts users to register before finalizing a reservation", "System tracks high traffic days/weekends and displays a hold fee to the users"]} imageSource="/opentable.png" widthSize={800} heightSize={800} header2="OpenTable" d12="" d22="" d32=""/>
            <Template linkPage="https://personalwebsite-hv5y.vercel.app/" text={["Created a personal portfolio", "Made with NextJS, Tailwind CSS", "Features:", "Displays components that are typically found in a resume", "Includes education, skills, projects, work experience, and contact sections"]} imageSource="/myp.png" widthSize={800} heightSize={800} header2="Personal Portfolio" d12="" d22="" d32=""/>
        </div>
    )
}