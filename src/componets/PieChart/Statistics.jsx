import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#FF444A', '#00C49F'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


const Statistics = () => {
  const donationItems = JSON.parse(localStorage.getItem("add-donations"))

  const data = [
    { name: 'Total Donation', value: (12 - donationItems.length) },
    { name: 'Your Donation', value: (donationItems.length) }
  ];

  return (
    <div className='flex justify-center items-center'>
      <div>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div>
        <h1 className='text-xl font-semibold my-2'>Total donation<span className='bg-[#FF444A] text-[#FF444A] ml-2'>hello</span></h1>
        <h1 className='text-xl font-semibold my-2'>Your donation<span className='bg-[#00C49F] text-[#00C49F] ml-2'>hello</span></h1>
      </div>
    </div>
  );
};

export default Statistics;