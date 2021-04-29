
import Chart from '../Chart/Chart/Chart'


const ExpencesChart = (props) => {


    const charDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Fev', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Okt', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },

    ]

    for (const expence of props.expence) {
        const expenceMonth = expence.date.getMonth()
        charDataPoints[expenceMonth].value += expence.amount
        console.log(expenceMonth)
    }

    return (
        <Chart
            dataPoints={charDataPoints}
        />
    )
}

export default ExpencesChart;