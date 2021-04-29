import React, { useState } from 'react'

import ExpencesFilter from '../ExpencesFilter/ExpencesFilter'
import ExpencesList from '../ExpencesList/ExpencesList';
import Card from '../UI/Card/Card'
import ExpencesChart from '../ExpencesChart/ExpencesChart'

import './Expences.css'

const Expences = (props) => {

    const [filteredYear, setFilteredYear] = useState('2021')

    const filterChangeHandler = (value) => {
        setFilteredYear(value)
    }

    const filteredExpenceByYear = props.expences.filter(element => {
        return element.date.getFullYear().toString() === filteredYear
    })

    return (

        <Card clasName='expenses' >
            <ExpencesFilter
                onChangeFilter={filterChangeHandler}
                selected={filteredYear}
            />
            <ExpencesChart
                expence={filteredExpenceByYear}
            />
            <ExpencesList
                expenses={filteredExpenceByYear} />
        </Card>

    )
}

export default Expences;