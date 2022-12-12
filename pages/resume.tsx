import Header from "../components/mainScreen/header"
import HeaderInfo from "../components/animations/headerinfo"
import ResumeInfo from "../components/resume/resumeinfo"
import SideBar from "../components/sidebar"


export default function Resume(){
    return(
        <div className = "flex">

            <SideBar/>
          
            <div className="pl-8 pt-2">
                <HeaderInfo header="Education"/>
                <ResumeInfo info={["University of Houston", "B.S. Computer Science", "Minor - Mathematics", "August 2019 - December 2022", "Awards:", "** Dean's List - Fall 2019", "** Dean's Distinguished Scholars - Spring 2021"]}/>

                <HeaderInfo header="Skills"/>
                <ResumeInfo info={["Languages: JavaScript, C++, Python", "Front-End Framework: React", "Game Engine: Unity", "Databases: NoSQL (MongoDB), DGraph", "Source Control: Git, PlasticSCM", "Operating System: Windows"]}/>
            </div>

        </div>
    )
}