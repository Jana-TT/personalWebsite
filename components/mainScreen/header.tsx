import ButtonHeader from "./buttonheader";

export default function Header(){
    return(
    <div className='pt-3 pb-3 bg-gray-200 shadow-md'>
        <div className="space-x-3 pl-2">
            <ButtonHeader pageLink="/" buttonName="Home"/>
            <ButtonHeader pageLink="/websites" buttonName="Web Apps"/>
            <ButtonHeader pageLink="/resume" buttonName="Resume"/>
            <ButtonHeader pageLink="/gamedevelopment" buttonName="Game Dev"/>
            
        </div>
    </div>

    )
}