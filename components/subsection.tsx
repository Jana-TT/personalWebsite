interface props {
    subcontent: string
}

export default function Subsection( {subcontent} : props) {
    return(
        <div className="font-bold pt-1">
            {subcontent}
        </div>
    )
}