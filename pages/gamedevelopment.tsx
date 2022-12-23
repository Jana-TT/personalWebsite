import Gamedevinfo from "../components/gamedev/gamdevinfo";

export default function GameDevelopment(){
    return(
        <div className="">
            <Gamedevinfo linkPage="https://wolfeycs.itch.io/hullbreakers" imageSource="/headerCapsule.png" text={["Lead Game Designer", "Created an arcade space shooter game", "Worked closely with other game designers, producers", "and writers to bring the game's characters, stories, and worlds to life", "Space arcade game with fast paced combat, quick maneuvering, and strategy", "Use an ever-evolving spacecraft to wipe out endless hordes of enemies and", "relentless bosses in order to make your mark on the leaderboard"]} widthSize={900} heightSize={900}/>
        </div>
    )
}