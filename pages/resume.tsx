import Header from "../components/header"
import HeaderInfo from "../components/headerinfo"
import ResumeInfo from "../components/resumeinfo"
import Subsection from "../components/subsection"

export default function Resume(){
    return(
        <div className = "flex">
            <div className="w-32 h-screen bg-gradient-to-t from-galaxy-500 to-galaxy-400 rounded">
                
            </div>
          
            <div className="w-5/6 pl-8">
                <HeaderInfo header="Education"/>
            </div>

        </div>
    )
}