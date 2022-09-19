import React from 'react';
import Button from './Button';

export default function MoreButton(props){
        return(
            props.visible ?
            <Button  class="btn btn-load" clickHandler={props.clickHandler} id="load-btn">
                Load more
            </Button> : null
        );
}