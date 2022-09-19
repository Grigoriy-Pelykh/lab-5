import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

export default function Spinner(props) {
  return (
    props.visible ?
    <div style={{ width: '100px', margin: 'auto', display: 'block' }}>
      <ClipLoader color="#1f3079" size={200}/> 
    </div> : null
  );
}
