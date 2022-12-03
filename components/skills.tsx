import Card from "./card";

export default function Skills() {
    return(
        <div className="object-center flex items-stretch justify-center space-x-3 mt-6">
            <Card pageLink='/resume' title='Skills' content={["Languages: JavaScript, C++, Python", "Front-End Framework: React", 
            "Game Engine: Unity", "Databases: NoSQL (MongoDb), DGraph", "Source Control: Git, PlasticSCM", "Operating System: Windows"]}/> 
            
            <Card pageLink='' title='Projects' content={["Arcade Game: HullBreakers", "Reservation System: OpenTable", 
                "Game: Butterslide", "Personal Portfolio: this website"]}
                />
            <Card pageLink='' title='About Me!' content={["always doing something wrong"]}/> 
        </div>
        
       
    )
}