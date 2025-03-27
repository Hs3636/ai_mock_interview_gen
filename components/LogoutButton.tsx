'use client';

import { signOut } from '@/lib/actions/auth.action';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push('/sign-in');
  };

  return (
    <Button 
      onClick={handleLogout}
      className="btn-secondary px-8 py-6 text-lg"
    >
      Logout
    </Button>
  );
};

export default LogoutButton; 