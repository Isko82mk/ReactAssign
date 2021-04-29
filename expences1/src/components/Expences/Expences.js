import React, { useState } from 'react'
import ExpenceItem from '../ExpenceItem/ExpenceItem'
import ExpencesFilter from '../ExpencesFilter/ExpencesFilter'
import './Expences.css'

const Expences = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = (value) => {
        setFilteredYear(value)
    }

    const filteredExpenceByYear = props.expences.filter(element => {
        return element.date.getFullYear().toString() === filteredYear
    })


    let expencesContent = <p style={{ color: 'white' }}>No expences found</p>

    if (filteredExpenceByYear.length > 0) {
        expencesContent = (
            filteredExpenceByYear.map(ex => {
                return <ExpenceItem
                    key={ex.id}
                    title={ex.title}
                    amount={ex.amount}
                    date={ex.date}
                />
            })
        )
    }

    return (
        <div>

            <div className={'expenses'}>

                <ExpencesFilter
                    onChangeFilter={filterChangeHandler}
                    selected={filteredYear}
                />

                {expencesContent}


            </div>
        </div>


    )
}

export default Expences;