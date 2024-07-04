"use client";
import React from 'react';
import { useSession } from "next-auth/react";
import { redirect } from 'next/navigation'

const Dashboard = () => {
    const { data: session } = useSession(
        // {
        //     required: true,
        //     onUnauthenticated() {
        //         // redirect('/dashboard')
        //         redirect('/api/auth/signin?callbackUrl=/dashboard')
        //     }
        // }
    )
    console.log(session?.user);
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
};

export default Dashboard;