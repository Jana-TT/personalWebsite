import HeaderInfo from "../components/headerinfo"
import ResumeInfo from "../components/resumeinfo"
import Subsection from "../components/subsection"

export default function Resume(){
    return(
        <div className = "pl-6 pt-6 rainbow">
            <HeaderInfo header="Education"/>
            <ResumeInfo info={["University of Houston", "B.S. Computer Science", "Minor - Mathematics", "August 2019 - December 2022", "Awards: Dean's List - Fall 2019, Dean's Distinguished Scholars - Spring 2021"]}/>
            
        </div>
    )
}