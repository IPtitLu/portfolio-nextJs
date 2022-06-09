import {useRouter} from 'next/router'

function ErrorPage() {
    const router = useRouter()

    console.log(router.query)

    return <h1 className='w-100 flex justify-center mt-80'>
                <span className='border-b-2 border-t-2 border-grey-500 p-4 text-xl text-red-500 rounded-md'>404 page not found</span>
            </h1>
}

export default ErrorPage