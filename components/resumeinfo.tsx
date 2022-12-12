interface props {
    info: string[]
}

export default function ResumeInfo( {info} : props){
    return(
        <div className="font-serif max-w-sm border p-4 border rounded border-2">
            {info.map((e) => 
            <ul key={e}>
                
                {e}
            </ul>
            )}
        </div> 
    )
}