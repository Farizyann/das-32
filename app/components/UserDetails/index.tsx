"use client"
import { deleteuserByIdData, getuserByIdData, selectuser, updateuserData } from '@/lib/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { IUser } from '@/type/type';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';

export const UserDetails = ({ id }: { id: number }) => {
    const user = useAppSelector(selectuser)
    const router = useRouter()
    console.log(user);
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getuserByIdData(id))
    }, [id])

    const { register, handleSubmit, reset, formState: { errors }, setError } = useForm<IUser>();

    const onSubmit = (data: IUser) => {
        const obj :any = {}
        const x :any = {...data}
        for(let key in x){
            if(x[key]!=""){
                obj[key] = x[key]
            }
        }
        console.log('Form submitted:', data, obj);
        dispatch(updateuserData({ id, obj: { ...obj } }))
        reset();
    };

    return (
        <div>


            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{user.name} {user.surname}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{user.email}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{user.age}</p>
                <button onClick={() => dispatch(deleteuserByIdData(id)).unwrap().then(res => {
                    console.log(res);
                    router.push('/')
                })} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    delete and go back
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </div>

            <hr />
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                    <input
                        type="text"
                        id="name"
                        {...register('name')}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div className="mb-5">
                    <label htmlFor="surname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your surname</label>
                    <input
                        type="text"
                        id="surname"
                        {...register('surname')}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    {errors.surname && <p className="text-red-500 text-xs mt-1">{errors.surname.message}</p>}
                </div>

                <div className="mb-5">
                    <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your age</label>
                    <input
                        type="number"
                        id="age"
                        {...register('age')}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age.message}</p>}
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input
                        type="email"
                        id="email"
                        {...register('email')}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@flowbite.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
