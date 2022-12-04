interface props {
    pageLink: string
    title: string
    content: string[]
}

export default function Card({pageLink, title, content} : props) {
    return(
        <a href={pageLink} className="inline-block p-6 border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 hover:outline hover:outline-purple hover:outline-4">
            <h5 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">{title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400"></p>
            {content.map((e) => 
                <ul key={e}>
                    {e}
                </ul>
            )}
        </a>
        
    )
}