import React from 'react'
import Agent from '@/components/Agent'

const Page = () => {
    return (
        <div>
            <h3 className='mb-3'>Interview Generation</h3>
            <Agent userName='You' type='generate'/>
        </div>
    )
}

export default Page
