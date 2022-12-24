interface props{
    d1: string
    d2: string
    text: string
}

export default function ContactSection({d1, d2, text}: props) {
    return(
        <div className="text-center pt-20 flex justify-center">

            <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-20 h-20"><path d={d1}></path><path strokeLinecap="round" strokeLinejoin="round" d={d2}/></svg>
            </div>

            <div className="flex pt-8 pl-4 font-robot justify-center text-md2">
                {text}
            </div>

        </div>
    )
}