import React from 'react'

export default function Checkbox(props) {
    return (
        <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id={props.labelName} name="example1" onChange={props.handleChange(props.stateName)} />
            <label className="custom-control-label" htmlFor={props.labelName}>{props.labelName}</label>
        </div>
    )
}
