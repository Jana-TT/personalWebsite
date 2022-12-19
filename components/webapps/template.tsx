interface props {
    imageSource: string
    description: string
}

export default function Template( {imageSource, description}: props) {
    return(

        <div className="justify-center flex pt-6">
            <img src={imageSource}/>

            <div className="pl-6">
                {description}
            </div>

        </div>
    )
}