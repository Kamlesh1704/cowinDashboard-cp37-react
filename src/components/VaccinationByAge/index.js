// Write your code here
import React, {PureComponent} from 'react'
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccineByAge = props => {
  const {detail} = props
  const {count, gender} = detail
  return (
    <div>
      <h1 className="pp">Vaccination by Age</h1>
      <ResponsiveContainer width="50%" height={240}>
        <PieChart>
          <Pie
            cx="50%"
            cy="40%"
            data={detail}
            startAngle={0}
            endAngle={360}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#fecba6" />
            <Cell name="44-60" fill="#b3d23f" />
            <Cell name="Above 60" fill="#a44c9e" />
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
export default VaccineByAge
