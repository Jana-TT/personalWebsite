import Header from "../components/header"
import HeaderInfo from "../components/headerinfo"
import ResumeInfo from "../components/resumeinfo"
import Subsection from "../components/subsection"

export default function Resume(){
    return(
        <div className = "flex">
            <div className="w-32 h-screen bg-gradient-to-t from-galaxy-500 to-galaxy-400 rounded">
                
            </div>
          
            <div className="w-5/6 pl-8 pt-2">
                <HeaderInfo header="Education"/>
                <ResumeInfo info={["University of Houston", "B.S. Computer Science", "Minor - Mathematics", "August 2019 - December 2022", "Awards:", "** Dean's List - Fall 2019", "** Dean's Distinguished Scholars - Spring 2021"]}/>

                <HeaderInfo header="Skills"/>
                <ResumeInfo info={["Languages: JavaScript, C++, Python", "Front-End Framework: React", "Game Engine: Unity", "Databases: NoSQL (MongoDB), DGraph", "Source Control: Git, PlasticSCM", "Operating System: Windows"]}/>
            </div>

        </div>
    )
}