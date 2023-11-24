import "./enrolmentAnalytics.scss";
import { 
  LineChart, 
  Line, XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, Legend, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  {
    name: '2017',
    pp: 0,
    gg: 0,
    bb: 0,
  },
  {
    name: '2018',
    pp: 90,
    gg: 60,
    bb: 25,
  },
  {
    name: '2019',
    pp: 40,
    gg: 80,
    bb: 35,
  },
  {
    name: '2020',
    pp: 30,
    gg: 47,
    bb: 17,
  },
  {
    name: '2021',
    pp: 150,
    gg: 40,
    bb: 120,
  },
  {
    name: '2022',
    pp: 25,
    gg: 80,
    bb: 40,
  },
  {
    name: '2023',
    pp: 10,
    gg: 10,
    bb: 10,
  },
  // 
];


const EnrolmentAnalytics = ({title}) => {
  return (
    <div className='enrolmentAnalytics'>
    <h4 className="enrolmentTitle">{title}</h4>
<ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" strokeOpacity={0}/>
          <YAxis strokeOpacity={0}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pp" stroke="#8884d8" strokeWidth={3} fill="#8884d8"  activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="gg" stroke="#1de9b6" strokeWidth={3} fill="#1de9b6"  />
          <Line type="monotone" dataKey="bb" stroke="#03A9F5" strokeWidth={3} fill="#03A9F5"  />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default EnrolmentAnalytics
