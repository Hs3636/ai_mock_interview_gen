'use client';

import { CardSpotlight } from './ui/card';

export const InterviewCardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <CardSpotlight className="w-[360px] max-sm:w-full min-h-96">
      {children}
    </CardSpotlight>
  );
}; 