import Template from "../components/webapps/template";

export default function Websites() {
    return(
        <div className="container">
            <Template linkPage="https://4351-website.vercel.app/" text={["Created a reservation system for a restaurant", "Made with NextJS, Dgraph, Tailwind CSS", "Features:", "Takes in guests and registered users", "Users are able to search and make reservations", "Prompts users to register before finalizing a reservation", "System tracks high traffic days/weekends and displays a hold fee to the users"]} imageSource="/opentable.png" widthSize={800} heightSize={800} header2="OpenTable" d12="" d22="" d32="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"/>
            <Template linkPage="https://janatahan.com/" text={["Created a personal portfolio", "Made with NextJS, Tailwind CSS", "Features:", "Displays components that are typically found in a resume", "Includes education, skills, projects, work experience, and contact sections"]} imageSource="/updatedPortfolio.png" widthSize={800} heightSize={800} header2="Portfolio" d12="" d22="" d32="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/>
        </div>
    )
}