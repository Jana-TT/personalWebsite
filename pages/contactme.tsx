import ContactSection from "../components/contact/contactsection";
import LinkedStuff from "../components/contact/linkedstuff";

export default function ContactMe() {
    return(
        <div className="pt-56">
            <ContactSection text="janatt2056@gmail.com" d1="" d2="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" link=""/>
            <ContactSection text="+1 346-766-9608" d1="" d2="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" link=""/>
            <LinkedStuff link="https://github.com/Jana-TT?tab=repositories" text="GitHub: https://github.com/Jana-TT"/>
        </div>
    )
}