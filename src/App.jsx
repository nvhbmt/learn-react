import { useState } from 'react'
import './App.css'
import MyButton from './components/MyButton'
import Input from './components/Input'
// component

function App() {
    // binding data
    const [input, setInput] = useState('minh')

    const handleBlur = () => {
        console.log('blur')
    }

    const handleFocus = () => {
        console.log('focus')
    }

    const handleClick = () => {
        console.log('click')
    }

    return (
        <>
            <Input
                type='text'
                value={input}
                onChange={e => setInput(e.target.value)}
                onBlur={handleBlur}
                onFocus={handleFocus}
                style={{
                    backgroundColor: 'yellow'
                }}
            />
            <Input
                type='text'
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <MyButton
                onClick={handleClick}
                style={{
                    backgroundColor: 'blue'
                }}
                onDoubleClick={() => alert('double clicked!')}
            >
                Click me 1
            </MyButton>
            <MyButton
                style={{
                    // camel case
                    fontSize: '20px'
                }}
            >
                Click me 2
            </MyButton>
            <MyButton>Click me 3</MyButton>
        </>
    )
}

export default App
