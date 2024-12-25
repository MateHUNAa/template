import { useState, useEffect } from 'react'

interface INUIMessage {
  type: string;
  state: boolean;
}

function App() {
  const [visible, setVisibility] = useState<boolean>(false)

  useEffect(() => {
    const handleNUImessage = (event: MessageEvent) => {
      const message = event.data as INUIMessage

      if (message.type === "mVisibility") {
        setVisibility(message.state)
      }

      addEventListener("message", handleNUImessage)

      return () => {
        removeEventListener('message', handleNUImessage)
      }
    }
  }, [])

  return (
    <div className="App">
      {visible && (
        <div>

        </div>
      )}
    </div>
  )
}

export default App
