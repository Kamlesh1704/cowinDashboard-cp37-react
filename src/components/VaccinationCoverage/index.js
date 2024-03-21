import React from 'react'
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {detail} = props
  return (
    <>
      <h1 className="pp">Vaccination Coverage</h1>
      <ResponsiveContainer width="50%" height={240}>
        <BarChart
          width={730}
          height={240}
          data={detail}
          margin={{
            top: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="vaccineDate"
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="dose1" fill="#2d87bb" />
          <Bar dataKey="dose2" fill="#f54394" />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}
export default VaccinationCoverage
