import React from 'react';
import FilterButton from "./FilterButton";
import InputField from "./InputField";

export default function SearchBar(props){
        return(
            <div className="main-search">
                <InputField clickHandler={props.queryHandler}/>
                <FilterButton clickHandler={props.queryHandler}/>
            </div>
        );
}