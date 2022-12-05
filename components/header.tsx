import ButtonHeader from "./buttonheader";
import Title from "./title";

export default function Header(){
    return(
    <div className='pt-4 bg-gray-100'>
        <div className="space-x-3 pl-2">
            <ButtonHeader pageLink="/resume" buttonName="Resume"/>
            <ButtonHeader pageLink="/gamedevelopment" buttonName="Game Development"/>
            <ButtonHeader pageLink="/websites" buttonName="Websites"/>
        </div>
    </div>

    )
}