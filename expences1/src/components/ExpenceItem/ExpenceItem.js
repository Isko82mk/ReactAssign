import './ExpenceItem.css';
import ExpenceDate from '../ExpenceDate/ExpenceDate'


const ExpenceItem = (props) => {
    return (
        <div className="expense-item">
            <ExpenceDate dateData={props.date} />

            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price ">{props.amount}</div>
            </div>

        </div>
    )
}

export default ExpenceItem