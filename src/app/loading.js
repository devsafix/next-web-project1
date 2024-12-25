"use client"
import { Progress } from '@/components/ui/progress';
import React, { useState } from 'react';

const Loading = () => {

    const [progress, setProgress] = useState(10)

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(20), 1000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className='w-96 mx-auto min-h-screen flex justify-center items-center'>
            <Progress value={progress} className="w-[100%]" />
        </div>
    );
};

export default Loading;