"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react'; // Assuming you're using Lucide icons

const Profile = () => {
  const router = useRouter();
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the role from localStorage
    const storedRole = localStorage.getItem('userRole');
    if (storedRole) {
      setUserRole(storedRole);
      // Define the dashboards based on roles
      const dashboardRoutes: { [key: string]: string } = {
        creator: '/dashboard/creator',
        customer: '/dashboard/customer',
      };
      const dashboardRoute = dashboardRoutes[storedRole] || dashboardRoutes.customer;
      
      // Redirect to the appropriate dashboard
      router.push(dashboardRoute);
    }
  }, [router]);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <Loader2 className="animate-spin text-gray-500 mx-auto mb-4" size={48} />
        <p className="text-lg font-medium text-gray-600">
          Redirecting to {userRole === 'creator' ? 'Creator' : 'Customer'} App...
        </p>
      </div>
    </div>
  );
};

export default Profile;
