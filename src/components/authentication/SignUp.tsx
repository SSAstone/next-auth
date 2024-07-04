"use client"
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SignUpSchema, SignUpSchemaType } from '@/types/signUp';
import { useRouter } from 'next/navigation';

const SignUp = () => {
    const router = useRouter()
    const form = useForm<SignUpSchemaType>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
    })

    // const onSubmit: SubmitHandler<SignUpSchemaType> = async (data) => {
    //     // console.log(data)
    //     const user: any = await fetch('/api/register', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     }).then((res) => {
    //         console.log(res)
    //     })
    //     const userData = await user.json()
    //     console.log(userData)
        
    // }
    const onSubmit: SubmitHandler<SignUpSchemaType> = async (data) => {
        try {
            const user: Response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...data, role: "user"})
            });
    
            if (!user.ok) {
                throw new Error(`HTTP error! Status: ${user.status}`);
            } else {
                router.push('/sign-in');
            }
    
            const userData = await user.json();
            // console.log(userData);
        } catch (error : any) {
            console.error('Error during fetch:', error.message);
        }
    };
    

    return (
        <div className=' flex justify-center items-center pt-5'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 bg-blue-900 w-1/3 p-8 rounded-md">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-white'>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="username" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-white'>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-white'>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="password" type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
};

export default SignUp;