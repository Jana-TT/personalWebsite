interface props {
    info: string[]
}

export default function Info( {info} : props){
    return(
        <div className="text-center text-lg pt-16">

            {info.map((e) => 
            <ul key={e}>
                {e}
            </ul>
            )}
        </div> 
    )
}