import Info from "./info"
import Title from "../animations/title"
import Skills from "./skills"

export default function BigName(){
    return(
        <div className="flex grid mx-auto">
            <Title name='Jana Tahan'/>
            <Info info={["React full stack web developer, UI/UX designer, and", "game art designer"]}/>
            <Skills/>
        </div>
    )
}