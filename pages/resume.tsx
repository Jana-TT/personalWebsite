import HeaderInfo from "../components/animations/headerinfo"
import ResumeInfo from "../components/resume/resumeinfo"

export default function Resume(){
    return(
        <div className="flex items-stretch justify-center space-x-6 mt-16">
        

                <div>
                <HeaderInfo header="Education"/>
                <ResumeInfo title={[]} info={["University of Houston", "B.S. Computer Science", "Minor - Mathematics", "August 2019 - December 2022", "Awards:", "** Dean's List - Fall 2019", "** Dean's Distinguished Scholars - Spring 2021"]} subcontent={[]}/>
                </div>

                <div>
                <HeaderInfo header="Skills"/>
                <ResumeInfo title={[]} info={["Languages: JavaScript, C++, Python", "Front-End Framework: React", "Game Engine: Unity", "Databases: NoSQL (MongoDB), DGraph", "Source Control: Git, PlasticSCM", "Operating System: Windows"]} subcontent={[]}/>
                </div>

                <div>
                <HeaderInfo header="Work Experience"/>
                <ResumeInfo title={["Game Art Designer"]} info={["Lead game art designer", "Created the 2D visual aspects of the game", "Collaborated with developers and artists on design and delivery of interactive applications"]} subcontent={["SmashShip Studios"]}/>
                <div className="pt-3">
                    <ResumeInfo title={["Full Stack Web Developer"]} info={["Created a restaruant reservation system", "Framework: React", "Back-End: Dgraph","Front-End: TailwindCSS, CSS"]} subcontent={["OpenTable"]}/>
                </div>

                </div>

            </div>
            
                        
        
    )
}