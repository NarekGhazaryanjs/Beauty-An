import { useEffect, useState } from "react";
import Image from "../../../components/Image/Image";
import List from "../../../components/List/List";
import Listitem from "../../../components/Listitem/Listitem";
import Text from "../../../components/Text/Text";
import classes from '../../Global.module.css';
import Wrapper from "../../Wrapper/Wrapper";


const Workers = (props) => {
    const [workers, setWorkers] = useState([])
    useEffect(() => {
      fetch('./database.json')
      .then(data => data.json())
      .then(res => res.workers)
      .then(workers => {
        console.log(workers);
        setWorkers(workers)
      })
    },[])

   return (
        <Wrapper> 
            <List className={classes['list-block']}>
                {workers.map(worker => {
                    return (
                       <Listitem className={classes['list-block__item']} key={worker.id}>
                           <Text> Աշխատակցի Անուն: {worker.name} </Text>
                           <Text> Աշխատանքային փորձ {worker.expierence} Տարի </Text>
                           <Text> Քաղաք {worker.region} </Text>
                           <Image  src={`images/${worker.img}`} />
                       </Listitem>
                    )
                })}
            </List>
        </Wrapper>
    )
}

export default Workers