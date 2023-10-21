import React from "react";
import classes from "./NewsUpdates.module.css";
import AboutNews from '../../../AboutAECP/NewsComponent'

const NewsUpdates = () => {
    return (
    <AboutNews notShowHeader={true} itemsPerPage={4} />
    )
}

export default NewsUpdates;