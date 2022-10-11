import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

const Statistics = () => {
    
const data = useLoaderData().data;
    return (
      <div className="container mx-auto mt-5">
        <div className="row">
        <h1 className='font-bolder text-info text-center'>Bar Chart of quiz questions between React, Javascript,CSS, Git</h1>
          <div className="col-lg-4 col-12"></div>
          <div className="col-lg-4 col-12">
            <BarChart
              width={360}
              height={600}
              data={data}
              margin={{
                top: 50,
                right: 30,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="total" fill="#82ca9d" />
            </BarChart>
          </div>
          <div className="col-lg-4 col-12"></div>
        </div>
      </div>
    );
};

export default Statistics;