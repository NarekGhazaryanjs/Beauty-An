import Card from "../../Card/Card";
import classes from '../../../ui/Global.module.css'
import { useState } from "react";
import Input from "../../../components/Input/Input";
import Button from '../../../components/Button/Button'
import Select from "../../../components/Select/Select";
import Option from "../../../components/Option/Option";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Order = (props) => {
    const options = [
        {value: '', text: '--Choose an option--', id: 1},
        {value: 'Manikyur', text: 'Manikyur', id: 2},
        {value: 'Pedikyur', text: 'Pedikyur', id: 3},
        {value: 'Gellak', text: 'Gellak', id: 4},
    ];
    const email = 'narekghazaryanjs@gmail.com';
    const [choosenDay, setChoosenDay] = useState('')
    const [choosenTime, setChoosenTime] = useState('')
    let selected = options[0].value;

    const getCalendarDetailsHandler = (event) => {
        const choosedDay  = event.target.value;
        setChoosenDay(choosedDay)
    }

    const getHours = (event) => {
        const choosedHour = event.target.value;
        setChoosenTime(choosedHour)
    }

    const orderChangeHandler = event => {
       selected = event.target.value
       console.log(selected)
    }
    

    
    const form = useRef();

    const sendEmail = (e,choosenDay) => {
    e.preventDefault();

    emailjs.sendForm('service_5m6xpbe', 'template_fpd1kd7', form.current, '8Uw9LocK9V69Wp1uP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }


    return (
        <Card style={{marginTop: '10vh'}} className={classes['.main']}> 
            <Input placeholder='choose the day' type='date' onChange={getCalendarDetailsHandler}  />
            <Input placeholder='choose time' type='number' onChange={getHours} />
            <Select value={selected} onChange={orderChangeHandler}>
              {options.map(option => (
                <Option key={option.value} value={option.value}>
                  {option.text}
                </Option>
              ))}
            </Select>


            <div>
            <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
               <input type="text" name="user_name" />
               <label>Message</label>
               <textarea name="message" />
               <input type="submit" value="Send" />
            </form>
            </div>
           
            <Button > order </Button>
        </Card>
    )
}

export default Order