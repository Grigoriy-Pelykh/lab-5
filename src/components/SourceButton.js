import React from 'react';
import Button from './Button';

export default function SourceButton(props){
        return(
            <Button class="btn btn-sources" clickHandler={props.clickHandler} id={props.id}>
                {props.children}
            </Button>
        );
}