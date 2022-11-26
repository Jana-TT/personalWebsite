import ButtonHeader from "./buttonheader";

export default function Header(){
    return(
    <div className='pt-4 bg-gray-100'>
        <div className="space-x-3 ">
            <ButtonHeader pageLink="/resume" buttonName="Resume"/>
            <ButtonHeader pageLink="/gamedevelopment" buttonName="Game Development"/>
        </div>
    </div>

    )
}