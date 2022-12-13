interface props {
    info: string[]
    subcontent: string[]
}

export default function ResumeInfo( {info, subcontent} : props){
    return(
        <div className="font-serif max-w-sm p-4 border rounded border-2 border-blush">
            <div className="text-md ">
                {subcontent.map((e) => 
                <ul key={e}>
                    *
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