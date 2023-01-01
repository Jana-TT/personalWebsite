interface props {
    info: string[]
    subcontent: string[]
    title: string[]
}

export default function ResumeInfo( {info, subcontent, title} : props){
    return(
            <div className="font-robot max-w-md p-4 border rounded border-2 border-blush bg-gray-400 text-md">
                <div className="text-lg whitespace-nowrap">
                    {title.map((e) => 
                    <ul key={e}>
                        {e}
                    </ul>
                    )}
                </div> 

                <div className="text-md2 pt-1 pb-1">
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