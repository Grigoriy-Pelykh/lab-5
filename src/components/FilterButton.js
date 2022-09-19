import React from 'react';
import Button from './Button';

export default function FilterButton(props){
        return(
            <Button  class="btn btn-filter" clickHandler={props.clickHandler} id="filter-btn">
                Filter
            </Button>
        );
}