import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Heading, Link, Text } from 'react-aria-components'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const abortController = new AbortController()
    async function fetchIt() {
      const res = await fetch('http://localhost:8000/api', {signal: abortController.signal})
      console.log(res.ok && await res.json())
    }
    fetchIt()
    return () => abortController.abort('Shoot...');
  }, [])

  return (
    <main>
      <div className='flex justify-evenly'>
        <Link href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </Link>
        <Link href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Link>
      </div>
      <Heading level={1}>Vite + React</Heading>
      <div className="card">
        <Button onPress={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Text elementType='p'>
          Edit <code>src/App.tsx</code> and save to test HMR
        </Text>
      </div>
      <Text elementType='p' className="read-the-docs">
        Click on the Vite and React logos to learn more
      </Text>
    </main>
  )
}

export default App
