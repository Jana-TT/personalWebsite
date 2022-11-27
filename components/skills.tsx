import Card from "./card";

export default function Skills() {
    return(
        <div className="pt-14 pl-96">
            <div className="space-x-3">
                <Card pageLink='/resume' title='Skills' content={["Languages: JavaScript, C++, Python", "Front-End Framework: React", 
                "Game Engine: Unity", "Databases: NoSQL (MongoDb), DGraph", "Source Control: Git, PlasticSCM", "Operating System: Windows"]}/>

                <Card pageLink='' title='Projects' content={[""]}/> 

            </div>
            
        
        
        
        </div>
        
       
    )
}