import Map from'./Component/Map';
import {useState,useEffect} from 'react';
import Loader from './Component/Loader';
import Header from './Component/Header';

function App() {
  const [eventData,setEventData]=useState([]);
  const [loading,setLoading]=useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)
    }
    console.log(eventData)
    fetchEvents()
  }, [])

    return (
        <div >
          <Header/>
          {!loading? <Map eventData={eventData}/>:<Loader/>}
        </div>
    )
}

export default App;
