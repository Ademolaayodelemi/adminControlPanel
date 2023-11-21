import "./registrationOverview.scss";
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
    name: '2017',
    gg: 0,
    pp: 0,
    bb: 0,
  },
  {
    name: '2018',
    gg: 90,
    pp: 60,
    bb: 25,
  },
  {
    name: '2019',
    gg: 40,
    pp: 80,
    bb: 35,
  },
  {
    name: '2020',
    gg: 30,
    pp: 47,
    bb: 17,
  },
  {
    name: '2021',
    gg: 150,
    pp: 40,
    bb: 120,
  },
  {
    name: '2022',
    gg: 25,
    pp: 80,
    bb: 40,
  },
  {
    name: '2023',
    gg: 10,
    pp: 10,
    bb: 10,
  },
  // 
];



const RegistrationOverview = ({title}) => {
  return (
    <div className='registrationOverview'>
    <h4 className="registrationTitle">{title}</h4>
    <ResponsiveContainer width="98%" height="98%">
        <AreaChart
          // width={500}
          // height={400}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 30,
          }}
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
          <Area type="monotone" dataKey="pp"  stroke="#8884d8" strokeWidth={0}  fill="#8884d8" fillOpacity={0.8} />
          <Area type="monotone" dataKey="gg"  stroke="#1de9b6" strokeWidth={0} fill="#1de9b6" fillOpacity={0.8} />
          <Area type="monotone" dataKey="bb"  stroke="#03A9F5" strokeWidth={0} fill="#03A9F5" fillOpacity={0.8} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RegistrationOverview
