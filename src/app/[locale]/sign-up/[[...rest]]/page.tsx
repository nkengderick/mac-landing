"use client";
import { SignUp } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

export default function Page() {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const storedRole = localStorage.getItem('userRole');
    setRole(storedRole);
  }, []);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg p-8 max-w-4xl">
        <div className="flex justify-center items-center">
          <SignUp />
        </div>
      </div>
    </div>
  );
}
