import './App.css'
import FetchFromGoAPI from './components/fetchData';

function App() {

  return (
    <>
      <div>
       <h1 className="text-3xl font-bold underline">  
         Web Crawler Frontend 
        </h1>
        <FetchFromGoAPI />
      </div>
    </>
  )
}

export default App
