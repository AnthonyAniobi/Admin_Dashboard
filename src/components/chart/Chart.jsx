import React from 'react';
import './chart.scss';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: "January", Total: 1200 },
    { name: "February", Total: 2100 },
    { name: "March", Total: 800 },
    { name: "April", Total: 1600 },
    { name: "May", Total: 900 },
    { name: "June", Total: 1700 },
];

const Chart = () => {
    return (
        <div className='chart'>
            <div className="title">Last 6 Months revenue</div>
            <ResponsiveContainer width="100%" aspect={2 / 1}>
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    {/* <defs>
                        <LinearGradient id="colorUv" x1="0" y1="0" y2="1">
                            <stop offset="5%" stopColor='#8884d8' stopOpacity={0.8} />
                            <stop offset="95%" stopColor='#8884d8' stopOpacity={0} />
                        </LinearGradient>
                    </defs> */}
                    <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    {/* <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" /> */}
                    {/* <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" /> */}
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart