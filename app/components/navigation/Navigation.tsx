import Link from 'next/link'

const Navigation = () => {
return (
    <nav>
        <ul className="flex justify-around w-100 py-2">
            <li className="px-4 py-2 font-bold text-white bg-red-500 rounded-md transition ease-in-out delay-150 hover:bg-red-700 ">
                <Link href={'/'}>HOME</Link>
            </li>
            <li className="px-4 py-2 font-bold text-white bg-red-500 rounded-md transition ease-in-out delay-150 hover:bg-red-700 ">
                <Link href={'/contact'}>CONTACT</Link>
            </li>
        </ul>
    </nav>
)
}

export default Navigation