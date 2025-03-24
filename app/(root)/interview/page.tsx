import React from 'react'
import Agent from '@/components/Agent'
import { getCurrentUser } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation';

const Page = async () => {

    const user = await getCurrentUser();

    return (
        <div>
            <h3 className='mb-3'>Interview Generation</h3>
            <Agent userName={user?.name || ''} userId={user?.id} type='generate'/>
        </div>
    )
}

export default Page
