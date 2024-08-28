"use client"

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from "next/image";

const data = [
    {
        name: 'Mon',
        present: 40,
        absent: 20,
    },
    {
        name: 'Tue',
        present: 40,
        absent: 24,
    },
    {
        name: 'Wed',
        present: 40,
        absent: 24,
    },
    {
        name: 'Thu',
        present: 40,
        absent: 24,
    },
    {
        name: 'Fri',
        present: 40,
        absent: 24,
    },
];

const AttendaceChart = () => {
    return (
        <div className='bg-white rounded-lg p-4 h-full'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Attendance</h1>
                <Image src='/moreDark.png' alt='moredark' width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={20}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
                    <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
                    <YAxis axisLine={false}/>
                    <Tooltip contentStyle={{borderRadius: "10px", borderColor:"Lightgray"}}/>
                    <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop:"20px", paddingBottom:"40px" }}/>
                    <Bar dataKey="present" fill="#8884d8" legendType='circle'  radius={[10,10,0,0]}/>
                    <Bar dataKey="absent" fill="#82ca9d" legendType='circle' radius={[10,10,0,0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AttendaceChart