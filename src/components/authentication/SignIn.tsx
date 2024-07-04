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
import { SignInSchema, SignInSchemaType } from '@/types/signIn';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';


const SignIn = () => {
    const callbackUrl = useSearchParams().get('callbackUrl')
    console.log(callbackUrl)
    const router = useRouter()

    const form = useForm<SignInSchemaType>({
        resolver: zodResolver(SignInSchema),
        defaultValues: {
            // username: "Shiam",
            email: "",
            password: "",
        },
    })

    const onSubmit: SubmitHandler<SignInSchemaType> = async (data) => {
        
        try {
            const user: any = await signIn('credentials', {
                email: data.email,
                password: data.password,
                // redirect: false,
                callbackUrl: callbackUrl || '/'
            })
            console.log("🚀 ~ file: SignIn.tsx:44 ~ constonSubmit:SubmitHandler<SignInSchemaType>= ~ user:", user)
            if (!user?.ok) {
                alert(user.error)
                throw new Error('Invalid credentials')

            }
            // const userData = await user.json()
            // console.log(userData)
        } catch (error : any) {
            console.log(error)
        }
    }    

    return (
        <div className=' flex justify-center items-center pt-5'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 bg-blue-900 w-1/3 p-8 rounded-md">
                    
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

export default SignIn;