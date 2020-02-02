import React from 'react'
import {connect} from 'react-redux'
import {increaseAction, decreaseAction} from '../modules/counter'

const Buttons = (props) =>{
    return(
        <div>
            <button onClick={()=> {props.dispatch(increaseAction())}}> + </button>
            <button onClick={()=> {props.dispatch(decreaseAction())}}> - </button>
        </div>
    )
}
export default connect()(Buttons)