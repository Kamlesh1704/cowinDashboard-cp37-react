import React, {PureComponent} from 'react'
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccineByGender = props => {
  const {detail} = props
  const {count, age} = detail
  return (
    <div>
      <h1 className="pp">Vaccination by gender</h1>
      <ResponsiveContainer width="50%" height={240}>
        <PieChart>
          <Pie
            cx="50%"
            cy="40%"
            data={detail}
            startAngle={0}
            endAngle={180}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="#fecba6" />
            <Cell name="Female" fill="#b3d23f" />
            <Cell name="Others" fill="#a44c9e" />
          </Pie>
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
export default VaccineByGender
