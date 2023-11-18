import "./socialPieChart.scss";
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import SocialWidget from "../socialWidget/SocialWidget";


const data = [
  { name: 'Group A', value: 8268 },
  { name: 'Group B', value: 12545 },
  { name: 'Group C', value: 7982 },
  { name: 'Group D', value: 9658 },
];
// Any time you add more data value remember to add more color value
const COLORS = ['#3b5998', '#cd201f', '#1da1f2', '#dd4b39'];



const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};



const SocialPieChart = () => {
  return (
    <div className='pieWidgetContainer'>
      <div className='socialPieChart'>
      <ResponsiveContainer 
      // setting the width beyomd 100% might cause unwanted behaviour
      width="100%" 
      height="94%"
      >
        
        <PieChart 
        // width={100} 
        // height={600}
        >
          <Pie
            // innerRadius={60}
            // outerRadius={80}
            outerRadius={160}
            data={data}
            cx="50%"
            cy="55%"
            labelLine={false}
            // label
            label={renderCustomizedLabel}
            // fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      </div>
      <div className="socialWidgetWrapper">
        <SocialWidget type="Facebook"/>
        <SocialWidget type="Youtube"/>
        <SocialWidget type="Twitter"/>
        <SocialWidget type="Linked in"/>
      </div>
    </div>
  )
}

export default SocialPieChart

