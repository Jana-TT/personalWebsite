interface props{
    link: string
    text: string
}

export default function LinkedStuff({link, text}: props){
    return(
        <div className="flex flex-col justify-center">
            <button className="flex justify-center">
                <a href={link} className="text-center text-lg font-robot pt-6">
                    {text}
                </a>
            </button>
        </div>
    )
}