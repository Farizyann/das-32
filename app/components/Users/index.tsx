"use client"
import { getusersData, selectusers } from '@/lib/features/user/userSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import Link from 'next/link'
import React, { useEffect } from 'react'

export const Users = () => {
    const users = useAppSelector(selectusers)
    console.log(users);
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getusersData())
    }, [])

    return (
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"20px"}}>
            {users.map(elm => {
                return (
                    <div key={elm.id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {elm.name} {elm.surname}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">...</p>
                        <Link href={'/users/'+elm.id}>See More</Link>
                    </div>

                )
            })}
        </div>
    )
}
