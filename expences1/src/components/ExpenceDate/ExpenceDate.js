import './ExpenceDate.css'

const ExpenceDate = (props) => {
    const month = props.dateData.toLocaleString('en-US', { month: 'long' })

    const day = props.dateData.toLocaleString('en-US', { day: '2-digit' })

    const year = props.dateData.getFullYear()
    return (

        <div className={'expense-date '}>
            <div className={'expense-date__month'} >{month}</div>
            <div className={'expense-date__year'}>{day}</div>
            <div className={'expense-date__day'}>{year}</div>
        </div>

    )


}

export default ExpenceDate