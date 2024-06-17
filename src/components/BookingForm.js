import React from 'react';
import { useState } from 'react';

const BookingForm = (props) => {
    const [date, setDate]=useState("");
    const [times, setTimes]=useState("");
    const [guests, setGuest]=useState("");
    const [occasion, setOccasion]=useState("");

    const handleSubmit =(e) => {
        e.preventDefualt();
        props.submitForm(e);
    }
    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
  return (
    <header>
        <section>
            <form onSubmit={handleSubmit}>
                <fieldset className='formField'>
                    <div>
                        <label htmlFor="book-date">choose date:</label>
                        <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)}
                        type='date' required/>
                    </div>

                    <div>
                        <label htmlFor='book-time'>choose time:</label>
                        <select id='book-time' value={times} onChange={(e) => setTimes(e.target.value)} required>
                            <option value="">select a time</option>
                            {
                                props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                            }
                        </select>
                    </div>

                    <div>
                        <label htmlFor='book-guests'>Number of guests:</label>
                        <input id="book-guests" min='1' value={guests} onChange={(e) => setGuest(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="book-occasion">Occasion</label>
                        <select id='book-occasion' key={occasion} value={occasion} onChange ={e => setOccasion(e.target.value)} >
                            <option >Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </div>

                    <div className='btnRecieve'>
                        <input aria-label='on Click' type='submit' value={"Make Your Reservation"}></input>
                    </div>
                </fieldset>
            </form>
        </section>
    </header>
  );
};

export default BookingForm;
