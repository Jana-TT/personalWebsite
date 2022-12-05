interface props {
    info: string[]
}

export default function ResumeInfo( {info} : props){
    return(
        <div className="pt-3">
            {info.map((e) => 
            <ul key={e}>
                
                {e}
            </ul>
            )}
        </div> 
    )
}