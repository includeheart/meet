import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CityEventsChart = ({ allLocations, events }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(getData());
    }, [`${events}`]);
    const getData = () => {
        const data = allLocations.map((location) => {
        const count = events.filter((event) => event.location === location).length
        const city = location.split(/, | - /)[0]
        return { count, city };
    })
    return data;
  };

    return (
        <ResponsiveContainer width="100%" height={400}>
            <ScatterChart
                margin={{
                top: 20,
                right: 20,
                bottom: 60,
                left: -30,
                }}
            >
                <CartesianGrid />
                <XAxis type="category" dataKey="city" name="City" angle={60} interval={0} tick={{ dx: 20, dy: 40, fontSize: 14 }} />
                <YAxis type="number" dataKey="count" name="Number of events" allowDecimals={false} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="A school" data={data} fill="#8884d8" />
            </ScatterChart>
        </ResponsiveContainer>
    );
};

CityEventsChart.propTypes = {
    allLocations: PropTypes.arrayOf(PropTypes.string).isRequired,
    events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CityEventsChart;