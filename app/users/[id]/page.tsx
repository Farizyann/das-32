import { UserDetails } from '@/app/components/UserDetails';
import { Metadata } from 'next';
import React from 'react'

export default function UserPage({params}: any) {
  return (
    <UserDetails id={params.id}/>
  )
}

export const metadata: Metadata = {
    title: "User",
  };
  