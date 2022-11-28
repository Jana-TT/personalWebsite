import Card from "./card";

export default function Skills() {
    return(
        <div className="flex items-stretch pl-96 ml-24 mt-2">

            <div className="py-4 pl-4 mt-4 hover:p-8">
                <Card pageLink='/resume' title='Skills' content={["Languages: JavaScript, C++, Python", "Front-End Framework: React", 
                "Game Engine: Unity", "Databases: NoSQL (MongoDb), DGraph", "Source Control: Git, PlasticSCM", "Operating System: Windows"]}/> 
            </div>

            <div className="py-8 pl-4 hover:p-8">
                <Card pageLink='' title='Projects' content={["Arcade Game: HullBreakers", "Reservation System: OpenTable", 
                "Game: Butterslide", "Personal Portfolio: this website"]}
                />
            </div>
        
            <div className="py-4 mt-4 pl-4 hover:p-8">
                <Card pageLink='' title='About Me!' content={["always doing something wrong"]}/> 
            </div>
        
        </div>
        
       
    )
}