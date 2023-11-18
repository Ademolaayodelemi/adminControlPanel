import "./areaChart.scss";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';


const data = [
  {
    name: 'Mon',
    pp: 2000,
    gg: 2400,
    bb: 1000,
  },
  {
    name: 'Tue',
    pp: 3000,
    gg: 1398,
    bb: 2000,
  },
  {
    name: 'Wed',
    pp: 4000,
    gg: 9800,
    bb: 3000,
  },
  {
    name: 'Thu',
    pp: 5000,
    gg: 3908,
    bb: 7000,
  },
  {
    name: 'Fri',
    pp: 6000,
    gg: 4800,
    bb: 5000,
  },
  {
    name: 'Sat',
    pp: 7000,
    gg: 3800,
    bb: 6000,
  },
  // 
];


const Chart = () => {
  return (
    <div className='areaChart'>
      <ResponsiveContainer width="98%" height="98%">
        <AreaChart
          // width={500}
          // height={400}
          data={data}
          // margin={{
          //   top: 10,
          //   right: 30,
          //   left: 0,
          //   bottom: 0,
          // }}
        >

          {/* <defs> 
          // this part for gradient fill
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="50%" stopColor="#8884d8" stopOpacity={1}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={1}/>
            </linearGradient>
          </defs> */}
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" strokeOpacity={0} />
          <YAxis strokeOpacity={0}/>
          <Tooltip />
          <Area type="monotone" dataKey="pp"  stroke="#8884d8" strokeWidth={4}  fill="#8884d8" fillOpacity={0.1} />
          <Area type="monotone" dataKey="gg"  stroke="#1de9b6" strokeWidth={4} fill="#1de9b6" fillOpacity={0.1} />
          <Area type="monotone" dataKey="bb"  stroke="#03A9F5" strokeWidth={4} fill="#03A9F5" fillOpacity={0.1} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
