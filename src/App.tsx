import { getFeed } from "./services/fetchFeed";

function App() {

  getFeed('https://www.reddit.com/r/linux/.rss');

  return (
    <h1 className="text-3xl font-bold underline">Hello World</h1>
  )
}

export default App
