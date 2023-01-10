import Link from "next/link";
import HeaderInfo from "../components/animations/headerinfo";
import Image from "next/image";
import ContactInfo from "../components/contactsection/contactinfo";
import ContactInfoPng from "../components/contactsection/contactinfopng";


export default function ContactMe() {
    return(
    
        <div className="overflow-visible flex space-x-3 container mx-auto mt-16 pl-24">
            <div>
                <Image src="/webdevLogo3.png" alt="" width={600} height={600}/> 
            </div>
            
            <div className="py-8 lg:py-16 px-4 mx-auto pr-40 whitespace-nowrap">
                    <h2 className="mb-4 text-lg text-center font-cool">
                        <HeaderInfo header="Contact Me!" d1="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"  d2="" d3=""/>
                    </h2>
                <ContactInfo content="janattsite@gmail.com" pageLink="" d1="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"/>
                <ContactInfoPng content="Jana-TT" pageLink="https://github.com/Jana-TT?tab=repositories%22%7D%3E%22%7D%3E" imageSource="/githubLogo.png" widthSize={28} heightSize={20}/>
                <ContactInfoPng content="Jana Tahan" pageLink="https://www.linkedin.com/in/jana-tahan-2a13a7253/" imageSource="/linkedinLogo.png" widthSize={20} heightSize={20}/>
            </div>
        </div>
        
    )
}