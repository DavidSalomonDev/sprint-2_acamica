import React from 'react'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import style from './inputs.module.css'

const DateTime = () => {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2021-06-01T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className={style.dateTime}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    className={style.modal}
                    margin="normal"
                    id="date-picker-dialog"
                    label="Cualquier fecha"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </MuiPickersUtilsProvider>
        </div>
    )
}

export default DateTime
