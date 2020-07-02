import React, {useState, useEffect} from 'react'
import Calendar from '../../Commons/Calendar'

export default function TabCalendar() {

  const [startDate, setStartDate] = useState(undefined);
  const [isEmpty, setIsEmpty] = useState(false);


  useEffect(() => {
    /*let date = new Date()
    date.setDate( date.getDate() + 5 )
    setStartDate(date)*/
  }, [])

  return (
    <>
      <div className="row">
        <div className="col-3 form-group">


          <Calendar
            size={'sm'}
            startDate={startDate}
            callback={(date, isEmpty) => {
              console.log('callback', date, isEmpty)
              setIsEmpty(isEmpty)
              setStartDate(date)
            }}
          />



        </div>
      </div>
      <p>Date is: {JSON.stringify(startDate)}</p>
      <p>isEmpty: {JSON.stringify(isEmpty || false)}</p>
      <button onClick={() => {
        setStartDate(undefined)
      }} className="btn btn-primary">Clear date
      </button>

      <hr/>

      <figure>
                <pre>
                    <code>
{`<Calendar
    startDate={startDate}
    callback={(date, isEmpty) => { setStartDate(date) }}
/>`}
                    </code>
                </pre>
      </figure>
    </>
  )
}