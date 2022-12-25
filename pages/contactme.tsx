import HeaderInfo from "../components/animations/headerinfo";
import Card from "../components/mainScreen/card";

export default function ContactMe() {
    return(
        <div className="mt-8 pt-56">
            <div className="flex pb-6 justify-center">
                <HeaderInfo header="Contact Me!" d1="" d2="" d3=""/>
            </div>

            <div className="flex justify-center text-lg items-stretch space-x-6">
                <Card pageLink="" title="Email" content={["janatt2056@gmail.com"]}/>  
                <Card pageLink="" title="Phone Number" content={["+1 346-966-9608"]}/>  
                <Card pageLink="https://github.com/Jana-TT" title="GitHub" content={["Jana-TT"]}/> 
            </div> 
        </div>
    )
}