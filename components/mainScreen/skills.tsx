import Card from "./card";

export default function Skills() {
    return(

        <div className="flex space-x-3 mt-16 mx-auto">
            <Card pageLink='' title='About Me!' content={["Honors graduate from the University of", "Houston seeking an entry-level position", "as a React full stack web developer.", "Detail-oriented, analytical, and self-driven", "programmer with extensive experience building user apps"]}/> 

                <Card pageLink='/resume' title='Skills' content={["Languages: JavaScript, Typescript, C++, Python", "Front-End Framework: React", 
                "Game Engine: Unity", "Databases: NoSQL (MongoDb), Dgraph", "Source Control: Git, PlasticSCM", "Operating System: Windows", "Tailwind CSS, CSS"]}/> 

                <Card pageLink='gamedevelopment' title='Games' content={["2D Space Shooter: HullBreakers"]}/> 

                <Card pageLink='websites' title='Web Apps' content={["Reservation System: OpenTable", "Personal Portfolio: Jana Tahan", "Discord Inspired: Rick and Morty", "Business Client: Lateef Engineering"]}/> 
        </div>
 
    )
}