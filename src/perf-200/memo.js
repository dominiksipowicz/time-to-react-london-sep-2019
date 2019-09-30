import React, {useState} from 'react';

const MyComponent = ({text}) => {
    console.log('rendering: '+text)
    return (<div>{text}</div>)
}
  
function Perf200() {
    const [state, setState] = useState([
        {text: 'test'},
        {text: 'test'}
    ])

    const handleClick = () => {setState([...state, {text:'new'}])}

    return (
        <>
            <button onClick={handleClick}> ADD NEW RECORD</button>
            {state.map(
                (element, i) => (<MyComponent key={i} text={element.text} />)
            )}
        </>
    );
}

export default Perf200;