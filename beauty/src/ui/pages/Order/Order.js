import Card from "../../Card/Card";
import classes from '../../../ui/Global.module.css'
import { useState } from "react";
import Input from "../../../components/Input/Input";
import Button from '../../../components/Button/Button'
import Select from "../../../components/Select/Select";
import Option from "../../../components/Option/Option";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Form from "../../../components/Form/Form";
import Text from "../../../components/Text/Text";
import Textarea from "../../../components/Textarea/Textarea";


const Order = (props) => {
    const options = [
        {value: '', text: '--Choose an option--', id: 1},
        {value: 'Manikyur', text: 'Manikyur', id: 2},
        {value: 'Pedikyur', text: 'Pedikyur', id: 3},
        {value: 'Gellak', text: 'Gellak', id: 4},
    ];

    const [name, setName] = useState('');
    const [choosenDay, setChoosenDay] = useState('')
    const [choosenTime, setChoosenTime] = useState('')
    const [choosenAddress, setChoosenAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [selected, setSelected] = useState(options[0].value) ;
    // let selectedRef = useRef('')

    const getCalendarDetailsHandler = (event) => {
        const choosedDay  = event.target.value;
        setChoosenDay(choosedDay);
    }

    const getHours = (event) => {
        const choosedHour = event.target.value;
        setChoosenTime(choosedHour)
    }

    const getPhone = (event) => {
        const choosedPhone = event.target.value;
        setPhone(choosedPhone)
    }

    const  orderChangeHandler = (event) => {
        setSelected(event.target.value)
    }

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5m6xpbe', 'template_fpd1kd7', form.current, '8Uw9LocK9V69Wp1uP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }

    const getAddress = (event) => {
        setChoosenAddress(event.target.value)
    }

    const getName = (event) => {
        setName(event.target.value)
    }

    const allData = {
        adress:  choosenAddress,
        day: choosenDay,
        time: choosenTime,
        type: selected,
        telephone: phone,
        userName: name
    }


    return (
        <Card  className={classes['main']}> 
            <Card className={classes['form-of-user']}>
                <Input placeholder='choose the day' type='date' onChange={getCalendarDetailsHandler}  />
                <Input placeholder='choose time' type='time' onChange={getHours} />
                <Input placeholder="address" type="text" onChange={getAddress} />
                <Input placeholder="phone number" type="tel" onChange={getPhone} />
                <Select defaultValue={selected} onChange={orderChangeHandler}>
                  {options.map(option => (
                    <Option key={option.value} value={option.value}>
                      {option.text}
                    </Option>
                  ))}
                </Select>
                <Form className={classes['form']}  formref={form} onSubmit={sendEmail}>
                      <Card>
                         <Text>Name</Text>
                         <Input name="user_name" onChange={getName} />
                      </Card>
                   
                      <Textarea  readOnly  style={{display: "none"}} value={JSON.stringify(allData)} name="message" />
                      <Button className={classes['order-button']}> order </Button>
                </Form>
            </Card>
        </Card>
    )
}

export default Order