import {Input, Fragment} from 'react'

const Contact = () => {
    return (
        <Fragment>
            <div className='w-100 flex justify-center flex-wrap'>
                <div className='w-100'>
                    <h1 className='w-20'>Contact</h1>
                    <input type="text" placeholder='email' className='w-20 border-b-2 border-grey'/>
                </div>
            </div>
        </Fragment>
      )
}

export default Contact