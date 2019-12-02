import React,{useState, useEffect} from 'react'
import Calendar from '../../Commons/Calendar'

export default function TabCalendar(){

    const [startDate, setStartDate] = useState(new Date('2020-05-23'));


    useEffect(()=>{

        let date = new Date()
        date.setDate( date.getDate() + 5 )

        setStartDate(date)

    },[])

    return (
        <>
            <div className="row">
                <div className="col-3 form-group">


                    <Calendar
                        size={'sm'}
                        startDate={startDate}
                        callback={(date) => {
                            console.log(date)
                            setStartDate(date)
                        }}
                    />



                </div>
            </div>
            <p>Date is: {JSON.stringify(startDate)}</p>
            <br/>
            <figure>
                <pre>
                    <code>
{`<Calendar
    startDate={startDate}
    callback={(date) => { setStartDate(date) }}
/>`}
                    </code>
                </pre>
            </figure>
        </>
    )
}