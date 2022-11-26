import Link from "next/link";

export default function Header(){
    return(
    <div className='pt-4 bg-gray-100'>
        <div className="space-x-3 ">
            <Link href='/resume'>
                <button className="bg-sky-100 hover:bg-sky-200 text-white font-bold py-2 px-4 border border-sky-100 rounded">Resume</button>
            </Link>

            <Link href='/gamedevelopment'>
                <button className="bg-sky-100 hover:bg-sky-200 text-white font-bold py-2 px-4 border border-sky-100 rounded">Game Development</button>
            </Link>
        </div>
    </div>

    )
}