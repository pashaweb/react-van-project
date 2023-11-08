import {useCounterStore} from "../../stores/user-counter-store";


export function Counter() {
    const {count, inc} = useCounterStore()
    console.log('count render')
    return (
        <div>
            <h2>Counter Store</h2>
            <h4>{count}</h4>
            <button onClick={inc}>One Up</button>
        </div>
    )
}
