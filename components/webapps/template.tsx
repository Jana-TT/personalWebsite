import Image from "next/image"

interface props {
    imageSource: string
    description: string
}

export default function Template( {imageSource, description}: props) {
    return(

        <div className="justify-center flex pt-6">
            <Image src={imageSource} alt={""}/>

            <div className="pl-6">
                {description}
            </div>

        </div>
    )
}