import "./infoBarChart.scss";
import { 
  BarChart, 
  Bar, 
  Rectangle, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';



const data = [
  {
    name: 'Jan',
    bb: 4000,
    gg: 2400,
    pp: 2400,
  },
  {
    name: 'Feb',
    bb: 3000,
    gg: 1398,
    pp: 2210,
  },
  {
    name: 'Mar',
    bb: 2000,
    gg: 9800,
    pp: 2290,
  },
  {
    name: 'Apr',
    bb: 2780,
    gg: 3908,
    pp: 2000,
  },
  {
    name: 'May',
    bb: 1890,
    gg: 4800,
    pp: 2181,
  },
  {
    name: 'Jun',
    bb: 2390,
    gg: 3800,
    pp: 2500,
  },
  {
    name: 'Jul',
    bb: 3490,
    gg: 4300,
    pp: 2100,
  },
  {
    name: 'Aug',
    bb: 3490,
    gg: 4300,
    pp: 2100,
  },
  {
    name: 'Sep',
    bb: 3490,
    gg: 4300,
    pp: 2100,
  },
  {
    name: 'Oct',
    bb: 3490,
    gg: 4300,
    pp: 2100,
  },
  {
    name: 'Nov',
    bb: 3490,
    gg: 4300,
    pp: 2100,
  },
  {
    name: 'Dec',
    bb: 3490,
    gg: 4300,
    pp: 2100,
  },
];



const InfoBarChart = () => {
  return (
    <div className='barChart'>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" strokeOpacity={0}/>
          <YAxis strokeOpacity={0}/>
          <Tooltip />
          <Legend />
          {/*Rememer to remove the stackId="a" property from the Bar if you are getting an unwanted behaviour  */}
          <Bar dataKey="gg" fill="#1DE9B6" barSize={9}/>
          <Bar dataKey="bb" fill="#03A9F5" barSize={9}/>
          <Bar dataKey="pp" fill="#A389D5" barSize={9}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default InfoBarChart
