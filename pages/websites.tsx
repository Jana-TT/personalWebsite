import HeaderInfo from "../components/animations/headerinfo";
import Template from "../components/webapps/template";

export default function Websites() {
    return(
        <div>
            <Template linkto="https://4351-website.vercel.app/" imageSource="/opentable.png" title="OpenTable" description={["Created a reservation system for a restaurant", "Made with NextJS, Dgraph, Tailwind CSS", "Features:", "Takes in guest and registered users", "Users are able to search and make reservations", "Prompts users to register before finalizing a reservation", "System tracks high traffic days/weekends and displays a hold fee to the users"]} widthLength={800} heightLength={800}/>
            <Template linkto="https://personalwebsite-hv5y.vercel.app/" imageSource="/myportfolio.png" title="Personal Portfolio" description={["Created a personal portfolio", "Made with NextJS, Tailwind CSS", "Features:", "Displays components that are typically found in a resume", "Includes education, skills, projects, work experience, and contact sections"]} widthLength={800} heightLength={800}/>
        </div>
    )
}