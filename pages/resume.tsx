import HeaderInfo from "../components/headerinfo"
import ResumeInfo from "../components/resumeinfo"
import Subsection from "../components/subsection"

export default function Resume(){
    return(
        <div className = "pl-6 pt-6 ">
            <HeaderInfo header="Education"/>
            <ResumeInfo info={["University of Houston", "B.S. Computer Science", "Minor - Mathematics", "August 2019 - December 2022", "Awards: Dean's List - Fall 2019, Dean's Distinguished Scholars - Spring 2021"]}/>
            
            <div className="pt-3">
                <HeaderInfo header="Skills"/>
                <ResumeInfo info={["Languages: JavaScript, C++, Python", "Front-End Framework: React", 
                "Game Engine: Unity", "Databases: NoSQL (MongoDb), DGraph", "Source Control: Git, PlasticSCM", "Operating System: Windows"]}/>
            </div>

            <div className="pt-3">
                <HeaderInfo header="Work Experience"/>
                <ResumeInfo info={["Video Game Desginer", "SmashShip Studios"]}/>
                <ResumeInfo info={["Lead video game desginer", "Collaborated with lead developer and artists on design and delivery of interactive application"]}/>
            </div>
        </div>
    )
}