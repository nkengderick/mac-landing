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
        customer: 'https://eccomerce-client-ten.vercel.app/',
        creator: 'https://macecommerceplatform-hacking-priests-projects.vercel.app/',
      };
      const dashboardRoute = dashboardRoutes[storedRole] || dashboardRoutes.customer;

      // Set a timeout to delay the redirect by 1 second
      const timer = setTimeout(() => {
        // Redirect to the appropriate dashboard
        router.push(dashboardRoute);
      }, 1000);

      // Cleanup the timer if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [router]);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <Loader2 className="animate-spin text-gray-500 mx-auto mb-4" size={48} />
        <p className="text-lg font-medium text-gray-600 mb-2">
          Creating your account...
        </p>
        <p className="text-lg font-medium text-gray-600">
          Redirecting to {userRole === 'creator' ? 'Creator' : 'Customer'} App...
        </p>
      </div>
    </div>
  );
};

export default Profile;
