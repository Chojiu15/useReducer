import React, { useReducer } from 'react'


function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
}

const App = () => {

    const [count, dispatch] = useReducer(reducer, 0)

    return (
        <>
            <div>
                {count}
            </div>
            <button onClick={() => dispatch({ type: 'increment' })} >Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })} >Decrement</button>

        </>
    )
}

export default App