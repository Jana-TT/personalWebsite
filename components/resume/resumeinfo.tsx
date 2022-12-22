interface props {
    info: string[]
    subcontent: string[]
    title: string[]

    d1: string
    d2: string
    d3: string
}

export default function ResumeInfo( {info, subcontent, title, d1, d2, d3} : props){
    return(
            <div className="font-serif max-w-md p-4 border rounded border-2 border-blush bg-gray-400 text-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg%22%3E"><path d={d1}></path><path d={d2}></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={d3}></path></svg>
                <div className="text-lg">
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