import React, { useState } from 'react'
import './ExpenceItem.css';
import ExpenceDate from '../ExpenceDate/ExpenceDate';
import Card from '../UI/Card/Card'


const ExpenceItem = (props) => {


    const [title, setTitle] = useState(props.title)

    // const clickHandler = () => {
    //     //console.log('New Title')
    //     setTitle('New Title')
    // }

    return (

        <li>
            <Card className="expense-item">
                <ExpenceDate dateData={props.date} />

                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price ">{props.amount}</div>
                </div>
                {/* <button onClick={clickHandler}>Change Title</button> */}
            </Card>
        </li>



    )
}

export default ExpenceItem