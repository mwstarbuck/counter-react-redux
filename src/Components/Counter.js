import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <h1>{this.props.ctr}</h1>
                <button className="btn" onClick={() => this.props.onIncrementCounter()}>Increment</button>
                <button className="btn" onClick={() => this.props.onDecrementCounter()}>Decrement</button>
                <button className="btn" onClick={() => this.props.onAddCounter()}>Add 10</button>
                <button className="btn" onClick={() => this.props.onSubtractCounter()}>Subtract 10</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        ctr: state.counter
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
        onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
        onAddCounter: () => dispatch({ type: 'ADD', value: 10 }),
        onSubtractCounter: () => dispatch({ type: 'SUBTRACT', value: 10 })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)