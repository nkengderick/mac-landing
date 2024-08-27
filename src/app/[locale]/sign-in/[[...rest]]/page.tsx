"use client"
import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg p-8 max-w-4xl">
        <div className="flex justify-center items-center">
          <SignIn />
        </div>
      </div>
    </div>
  );
}
