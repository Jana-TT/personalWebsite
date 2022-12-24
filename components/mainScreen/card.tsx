interface props {
    pageLink: string
    title: string
    content: string[]
}

export default function Card({pageLink, title, content} : props) {
    return(
        
        <a href={pageLink} className="inline-block p-6 bg-gray-400 border-blush border-4 rounded-lg shadow-md hover:bg-gray-200 hover:outline-galaxy-400 hover:outline hover:outline-3">
            <h5 className="mb-2 text-lg font-semibold">{title}</h5>
            {content.map((e) => 
                <ul key={e}>
                    {e}
                </ul>
            )}
        </a>
        
    )
}