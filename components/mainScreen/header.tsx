import ButtonHeader from "./buttonheader";

export default function Header(){
    return(
        <div className="">
            <div className='whitespace-nowrap'>
                <div className="space-x-3 pl-2 pt-4 pb-3 bg-gray-201 shadow-md2">
                    <ButtonHeader pageLink="/" buttonName="Home"/>
                    <ButtonHeader pageLink="/websites" buttonName="Web Apps"/>
                    <ButtonHeader pageLink="/resume" buttonName="Resume"/>
                    <ButtonHeader pageLink="/gamedevelopment" buttonName="Game Dev"/>
                    <ButtonHeader pageLink="/contactme" buttonName="Contact Me"/>
                </div>
            </div>
        </div>
    )
}