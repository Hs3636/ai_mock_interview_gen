import Link from 'next/link'
import Image from 'next/image'
import { ReactNode } from 'react'
import { isAuthenticated } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'
import LogoutButton from '@/components/LogoutButton'

const RootLayout = async ({ children }: { children: ReactNode }) => {
    const isUserAuthenticated = await isAuthenticated();

    if (!isUserAuthenticated) {
        redirect('/sign-in');
    }

    return (
        <div className="root-layout">
            <nav className="flex justify-between items-center w-full">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo.svg" alt="logo" height={32} width={38} />
                        <h2 className="text-primary-100">HireGenie</h2>
                    </Link>
                </div>
                {/* Flex container to keep About, Contact, and Logout in a row */}
                <div className="flex items-center gap-6">
                    <Link href="/about" className="text-light-100 hover:text-primary-100 transition-colors">
                        About
                    </Link>
                    <Link href="/contact" className="text-light-100 hover:text-primary-100 transition-colors">
                        Contact
                    </Link>
                    <LogoutButton />
                </div>
            </nav>
            {children}
        </div>
    )
}

export default RootLayout;
