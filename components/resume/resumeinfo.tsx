interface props {
    info: string[]
}

export default function ResumeInfo( {info} : props){
    return(
        <div className="font-serif max-w-sm p-4 border rounded border-2 border-blush">
            {info.map((e) => 
            <ul key={e}>
                
                {e}
            </ul>
            )}
        </div> 
    )
}