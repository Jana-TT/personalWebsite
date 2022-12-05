interface props {
    header : string
}

export default function HeaderInfo( {header} : props) {
    return(
        <div className="text-lg">
            {header}
        </div>
    )
}