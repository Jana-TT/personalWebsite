import HeaderInfo from "../components/animations/headerinfo"
import ResumeInfo from "../components/resume/resumeinfo"
import SideBar from "../components/sidebar"


export default function Resume(){
    return(

        <div className="flex items-stretch justify-center space-x-6 mt-16">

                <div>
                    <HeaderInfo header="Education" />
                    <div className="pt-2">
                        <ResumeInfo title={[]} info={["University of Houston", "B.S. Computer Science", "Minor - Mathematics", "August 2019 - December 2022", "Awards:", "** Dean's List - Fall 2019", "** Dean's Distinguished Scholars - Spring 2021"]} subcontent={[]} />
                    </div>
                    <div className="pt-3">
                        <ResumeInfo title={[]} info={["Web Page Development", "Website and Software Design", "C++ Programming", "Fundamentals of Software Engineering", "Fundamentals of Software Design"]} subcontent={["Relevant Coursework:"]} />
                    </div>

                </div>

                <div>
                    <HeaderInfo header="Skills" />
                    <div className="pt-2">
                        <ResumeInfo title={[]} info={["Languages: JavaScript, HTML, C++, Python", "Front-End Framework: React", "Game Engine: Unity", "Databases: NoSQL (MongoDB), DGraph", "Source Control: Git, PlasticSCM", "Operating System: Windows", "Responsive Design, Agile Development"]} subcontent={[]} />
                    </div>
                </div>

                <div>
                    <HeaderInfo header="Work Experience" />
                    <div className="pt-2">
                        <ResumeInfo title={["Game Art Designer"]} info={["Lead game art designer", "Created the 2D visual aspects of the game", "Collaborated with developers and artists on design and delivery of interactive applications"]} subcontent={["SmashShip Studios"]} />
                    </div>
                    <div className="pt-3">
                        <ResumeInfo title={["Full Stack Web Developer"]} info={["Created a restaruant reservation system", "Framework: React", "Back-End: Dgraph", "Front-End: Tailwind CSS, CSS"]} subcontent={["OpenTable"]} />
                    </div>

                </div>

            </div>                
        
    )
}