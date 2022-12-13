import HeaderInfo from "../components/animations/headerinfo"
import ResumeInfo from "../components/resume/resumeinfo"
import SideBar from "../components/sidebar"

export default function Resume(){
    return(
        <div className="h-full bg-gradient-to-t from-galaxy-500 to-galaxy-400 overflow-y">
        
            <div className="ml-32 pt-4 h-full bg-gray-300 pl-10">
                <HeaderInfo header="Education"/>
                <ResumeInfo info={["University of Houston", "B.S. Computer Science", "Minor - Mathematics", "August 2019 - December 2022", "Awards:", " Dean's List - Fall 2019", " Dean's Distinguished Scholars - Spring 2021"]} subcontent={[]}/>
            
                <HeaderInfo header="Skills"/>
                <ResumeInfo info={["Languages: JavaScript, C++, Python", "Front-End Framework: React", "Game Engine: Unity", "Databases: NoSQL (MongoDB), DGraph", "Source Control: Git, PlasticSCM", "Operating System: Windows"]} subcontent={[]}/>

                <HeaderInfo header="Work Experience"/>
                <ResumeInfo info={["Lead game art designer", "Created the 2D visual aspects of the game", "Collaborated with developers and artists on design and delivery of interactive applications"]} subcontent={["Game Art Designer", "SmashShip Studios"]}/>
            
                <HeaderInfo header="Work Experience"/>
                <ResumeInfo info={["Lead game art designer", "Created the 2D visual aspects of the game", "Collaborated with developers and artists on design and delivery of interactive applications"]} subcontent={["Game Art Designer", "SmashShip Studios"]}/>
                
            </div>
            
                        
        </div>
    )
}