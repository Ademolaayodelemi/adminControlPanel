import "./lineChart.scss";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  {
    name: 'A',
    gg: 4000,
    bb: 4000,
    pp: 2400,
    yy: 1400,
  },
  {
    name: 'B',
    gg: 3000,
    bb: 3000,
    pp: 1398,
    yy: 2210,
  },
  {
    name: 'C',
    gg: 2000,
    bb: 200,
    pp: 3000,
    yy: 2290,
  },
  {
    name: 'D',
    gg: 2780,
    bb: 278,
    pp: 3908,
    yy: 2000,
  },
  {
    name: 'E',
    gg: 1890,
    bb: 1890,
    pp: 4800,
    yy: 2181,
  },
  {
    name: 'F',
    gg: 2390,
    bb: 2390,
    pp: 3800,
    yy: 2500,
  },
  {
    name: 'G',
    gg: 5490,
    bb: 3490,
    pp: 4300,
    yy: 2100,
  },
  {
    name: 'H',
    gg: 3490,
    bb: 3490,
    pp: 4300,
    yy: 2100,
  },
  {
    name: 'I',
    gg: 3490,
    bb: 5490,
    pp: 2300,
    yy: 2100,
  },
  {
    name: 'J',
    gg: 3490,
    bb: 3490,
    pp: 4300,
    yy: 2100,
  },
  {
    name: 'K',
    gg: 3490,
    bb: 3490,
    pp: 4300,
    yy: 1100,
  },
  {
    name: 'L',
    gg: 5490,
    bb: 3490,
    pp: 6300,
    yy: 2100,
  },
];



const Chart = () => {
  return (
    <div className='lineChart'>
      <ResponsiveContainer width="98%" height="98%">
        <LineChart
          // width={500}
          // height={300}
          data={data}
          // margin={{
          //   top: 5,
          //   right: 30,
          //   left: 20,
          //   bottom: 5,
          // }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" strokeOpacity={0} />
          <YAxis strokeOpacity={0} />
          <Tooltip />
          <Legend />
          {/* Note: feel free to remove the stackId (stackId="1") on each line if they(gg, bb, pp, yy) are too dependent on others */}
          <Line type="monotone" dataKey="gg" stackId="1" stroke="#1de9b6" strokeWidth={4} />
          <Line type="monotone" dataKey="bb" stackId="1" stroke="#03A9F5" strokeWidth={4} />
          <Line type="monotone" dataKey="pp" stackId="1" stroke="#8884d8" strokeWidth={4} activeDot={{ r: 1 }} />
          <Line type="monotone" dataKey="yy" stackId="1" stroke="#f4c22b" strokeWidth={4} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
