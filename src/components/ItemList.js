import React from 'react'
import {Item} from "./Item";
import "./item.css";


export const ItemList = ({items}) => {
    return(
        <div className='itemFlex'>
        {
            items.map(data => 
                <Item key={data.id} title = {data.title} description ={data.description} price ={data.price} pictureUrl ={data.pictureUrl}></Item>)
        }
        </div>


    );

}

