interface props {
    info: string[]
    subcontent: string[]
    title: string[]
}

export default function ResumeInfo( {info, subcontent, title} : props){
    return(
        <div className="font-serif max-w-sm p-4 border rounded border-2 border-blush">
            <div className="text-md2">
                {title.map((e) => 
                <ul key={e}>
                    {e}
                </ul>
                )}
            </div> 

            <div className="text-md ">
                {subcontent.map((e) => 
                <ul key={e}>
                    {e}
                </ul>
                )}
            </div> 

            <div className="">
                {info.map((e) => 
                <ul key={e}>
                        
                    {e}
                </ul>
                )}
            </div>

        </div>
    )
}