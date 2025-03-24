import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'


const Page = () => {
  return (
    <div>
      <>
        <section className="card-cta">
          <div className="flex flex-col gap-6 max-w-lg">
            <h2>Get Interview-ready with AI-Powered Pratice & Feedback</h2>
            <p className="text-lg">
              Practice with realistic mock interviews and get instant feedback to improve your skills.
            </p>
            <Button asChild className="btn-primary max-sm:w-full">
              <Link href="/interview">Start an Interview</Link>
            </Button>
          </div>
          <Image src="/robot.png" alt="robo-dude" width={400} height={400} className="max-sm:hidden" />
        </section>
        <section className="flex flex-col gap-6 mt-8">
          <h2>Your Interviews</h2>
          <div className="interviews-section">
            {dummyInterviews.map((interview) => (
              <InterviewCard key={interview.id} {...interview} />
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-6 mt-8">
          <h2>Take an Interview</h2>
          <div className="interviews-section">
            {dummyInterviews.map((interview) => (
              <InterviewCard key={interview.id} {...interview} />
            ))}
            {/* <p>There are no interviews available</p> */}
          </div>
        </section>
      </>
    </div>
  )
}

export default Page
