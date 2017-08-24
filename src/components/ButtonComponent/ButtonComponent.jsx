import React from 'react';
import { render } from 'react-dom';

const ButtonComponent = (props) => (
	/*const handler = props.eventHandler ? props.eventHandler : false;*/
	<button className={props.buttonData.decorators} onClick={() => props.eventHandler(props.rowIndex, props.buttonData.buttonText)}>{props.buttonData.buttonText}</button>
);

export default ButtonComponent;