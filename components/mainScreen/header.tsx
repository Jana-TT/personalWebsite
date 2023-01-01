import ButtonHeader from "./buttonheader";

export default function Header(){
    return(
                  
        <div className="fixed top-0 w-screen bg-blush whitespace-nowrap space-x-3 overflow-visible">
            <ButtonHeader pageLink="/" buttonName="Home"/>
            <ButtonHeader pageLink="/websites" buttonName="Web Apps"/>
            <ButtonHeader pageLink="/resume" buttonName="Resume"/>
            <ButtonHeader pageLink="/gamedevelopment" buttonName="Game Dev"/>
            <ButtonHeader pageLink="/contactme" buttonName="Contact Me"/>
            
        </div>
    )
}