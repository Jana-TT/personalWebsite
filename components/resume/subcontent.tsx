interface props {
    subcontent: string[]
}

export default function Subcontent({ subcontent }: props) {
    return(
        <div className="font-serif max-w-sm p-4 border rounded border-2 border-blush font-semibold">
            {subcontent.map((e) => 
            <ul key={e}>
                
                {e}
            </ul>
            )}
        </div> 
    )
}