"use client"
import Image from "next/image";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        income: 4000,
        expense: 1234,
    },
    {
        name: 'Feb',
        income: 2344,
        expense: 880,
    },
    {
        name: 'Mar',
        income: 1235,
        expense: 8973,
    },
    {
        name: 'Apr',
        income: 4082,
        expense: 4789,
    },
    {
        name: 'May',
        income: 3896,
        expense: 9490,
    },
    {
        name: 'Jun',
        income: 2234,
        expense: 3215,
    },
    {
        name: 'Jul',
        income: 9876,
        expense: 4363,
    },
    {
        name: 'Aug',
        income: 3254,
        expense: 3452,
    },
    {
        name: 'Sep',
        income: 4321,
        expense: 4326,
    },
    {
        name: 'Oct',
        income: 8656,
        expense: 7689,
    },
    {
        name: 'Nov',
        income: 4892,
        expense: 4532,
    },
    {
        name: 'Dec',
        income: 8768,
        expense: 7688,
    },
];

const FinanceChart = () => {
    return (
        <div className='bg-white rounded-xl w-full h-full p-4 '>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Finance</h1>
                <Image src='/moreDark.png' alt='mroe' width={20} height={20}/>
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop:"20px", paddingBottom:"40px" }}/>
                    <Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="expense" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default FinanceChart