"use client";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SelectRole = () => {
  const router = useRouter();
  const [role, setRole] = useState<'creator' | 'customer' | null>(null);

  const handleRoleSelection = (selectedRole: 'creator' | 'customer') => {
    setRole(selectedRole);
    localStorage.setItem('userRole', selectedRole);
    router.push('/profile');
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-full max-w-md p-8 text-center">
        <h1 className="text-2xl font-bold mb-6">Please Tell Us How </h1>
        <div className="space-y-4">
          <Button
            onClick={() => handleRoleSelection('creator')}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Local Art Creator
          </Button>
          <Button
            onClick={() => handleRoleSelection('customer')}
            className="w-full bg-green-600 hover:bg-green-700"
          >
            Global Customer
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default SelectRole;
