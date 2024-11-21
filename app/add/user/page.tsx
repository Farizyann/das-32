import { AddUser } from '@/app/components/AddUser';
import { Metadata } from 'next';
import React from 'react'

export default function AddUserPage() {
  return (
    <AddUser/>
  )
}

export const metadata: Metadata = {
    title: "Add User",
  };
  