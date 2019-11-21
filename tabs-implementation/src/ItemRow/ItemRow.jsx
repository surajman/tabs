/* eslint-disable */
import React from 'react';
import './ItemRow.css';
import { format, differenceInDays } from 'date-fns';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const formatDate = (epochDate) => format(epochDate, 'MMM yyyy, dd');

const ItemRow = (props) => {
    const { createdOn, region, name, csvSrc, priceText, image_url, calendarSrc, priceSrc, statsSrc, handleSelect, handleChange, openCalander, isCalendarOpen } = props;
    const timeDiff = differenceInDays(createdOn, new Date());
    return (
        <div className="row-container">
            <div className="date-container">
                <div>
                    {formatDate(createdOn)}
                </div>
                <div>
                    {timeDiff > 0 ? timeDiff+' days ago' : -1 * timeDiff + 'days before'}
                </div>
            </div>
            <div className="campaign-container">
                <img src={`${process.env.PUBLIC_URL}${image_url}`} alt="image" className="main-icon" /> &nbsp;
                <span className="item-details">
                    <div>
                        {name}
                    </div>
                    <div>
                        {region}
                    </div>
                </span>
            </div>
            <div className="price-container">
                <img src={`${process.env.PUBLIC_URL}${priceSrc}`} className="helper-icon"></img>
                {priceText}
            </div>
            <div className="action-container">
                <img src={`${process.env.PUBLIC_URL}${csvSrc}`} className="helper-icon"></img> &nbsp; CSV &nbsp;&nbsp;
                <img src={`${process.env.PUBLIC_URL}${statsSrc}`} className="helper-icon"></img> &nbsp; Report &nbsp;&nbsp;
                <span onClick={() => openCalander(name)}>
                    <img src={`${process.env.PUBLIC_URL}${calendarSrc}`} className="helper-icon"></img> &nbsp; Schedule Again
                </span>
                {isCalendarOpen ? <div className="calendar-style">
                    <DatePicker
                    selected={createdOn}
                    onChange={date => handleChange(date, name)}
                    inline /></div> : null}
            </div>
        </div>
    );
}
export default ItemRow;