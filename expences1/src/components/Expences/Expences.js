import ExpenceItem from '../ExpenceItem/ExpenceItem'
import './Expences.css'

const expences = (props) => {
    return (

        <div className={'expenses'}>
            <ExpenceItem
                title={props.expences[0].title}
                amount={props.expences[0].amount}
                date={props.expences[0].date}
            />

            <ExpenceItem
                title={props.expences[1].title}
                amount={props.expences[1].amount}
                date={props.expences[1].date}
            />

            <ExpenceItem
                title={props.expences[2].title}
                amount={props.expences[2].amount}
                date={props.expences[2].date}
            />

            <ExpenceItem
                title={props.expences[3].title}
                amount={props.expences[3].amount}
                date={props.expences[3].date}
            />
        </div>

    )
}

export default expences;