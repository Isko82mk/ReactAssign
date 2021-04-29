import React from 'react'
import ChartBar from '../ChartBar/ChartBar'

import './Chart.css'

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(data => data.value)
    const totalMaxValue = Math.max(...dataPointValues)

    console.log(dataPointValues)
    console.log(totalMaxValue)

    return (
        <div className='chart'>
            {
                props.dataPoints.map(data => <ChartBar
                    key={data.id}
                    value={data.value}
                    maxValue={totalMaxValue}
                    label={data.label} />)
            }
        </div>
    )
}

export default Chart;