import Info from "./info"
import Title from "../animations/title"

export default function BigName(){
    return(
        <div>

            <Title name='Jana Tahan'/>

            <div className="whitespace-nowrap">
                <Info info={["React full stack web developer, UI/UX designer, and", "game art designer"]}/>
            </div>
            
            

        </div>
    )
}