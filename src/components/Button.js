import React from 'react';

export default function Button(props) {
            return(
            <div className={props.class} onClick={props.clickHandler} id={props.id} >
                {props.children}
            </div>
        );
}
