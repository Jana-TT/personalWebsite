import HeaderInfo from "../components/animations/headerinfo"
import ResumeInfo from "../components/resume/resumeinfo"

export default function Resume(){
    return(
            <div className="flex space-x-3 container mx-auto mt-16 pl-24">
                <div>
                    <HeaderInfo header="Education" d1="M12 14l9-5-9-5-9 5 9 5z" d2="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" d3="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                    <div className="pt-2">
                        <ResumeInfo title={[]} info={["University of Houston", "B.S. Computer Science", "Minor - Mathematics", "August 2019 - December 2022", "Awards:", "** Dean's List - Fall 2019, Fall 2022", "** Dean's Distinguished Scholars - Spring 2021"]} subcontent={[]}/>
                    </div>
                    <div className="pt-6">
                        <ResumeInfo title={[]} info={["Web App Development", "Website and Software Design", "C++ Programming", "Fundamentals of Software Engineering", "Fundamentals of Software Design"]} subcontent={["Relevant Coursework:"]}/>
                    </div>

                </div>

                <div>
                    <HeaderInfo header="Expertise" d1="" d2="" d3="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
                    <div className="pt-2">
                        <ResumeInfo title={[]} info={["Languages: JavaScript, HTML, C++, Python", "Front-End Framework: React", "Game Engine: Unity", "Databases: NoSQL (MongoDB), DGraph", "Source Control: Git, PlasticSCM", "Operating System: Windows"]} subcontent={[]}/>
                    </div>
                    <div className="pt-6">
                        <ResumeInfo title={[]} info={["Adobe Cloud, Adobe Photoshop", "Responsive Design", "Agile Development", "Git, GitHub", "Microsoft Office", "Critical Thinking, Problem solving"]} subcontent={[""]}/>
                    </div>
                </div>

                <div>
                    <HeaderInfo header="Work Experience" d1="" d2="" d3="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    <div className="pt-2">
                        <ResumeInfo title={["Game Art Designer"]} info={["Lead game art designer", "Created the 2D visual aspects of the game", "Collaborated with developers and artists on design and delivery of interactive applications", "Utilized Unity, Plastic SCM, and Adobe Photoshop", "to execute our vision"]} subcontent={["SmashShip Studios"]} />
                    </div>
                    <div className="pt-6">
                        <ResumeInfo title={["Full Stack Web Developer"]} info={["Created a restaruant reservation system", "Framework: React", "Back-End: Dgraph", "Front-End: Tailwind CSS, CSS"]} subcontent={["OpenTable"]}/>
                    </div>
                </div>
            </div>              
    )
}
