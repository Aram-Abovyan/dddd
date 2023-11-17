import './App.css';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCat, addCats } from './redux/catsSlice';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const { cats } = useSelector((state) => state.cats)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(
      'https://api.thecatapi.com/v1/images/search?limit=10',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'live_UPOxOpEt6IGw6UavGzXgWDWrEyQrjZWROPJUbTVLnbBGi3cbkkVsm13s0KYeGKbR'
        },
      }
    ).then(response => response.json())
    .then(res => {
      console.log('res', res)
      dispatch(addCats(res))
    })
  }, [])

  return (
    <div className="App">
      <ul>
        {cats.map(({url}) => (<li key={uuidv4()}><img src={url} /></li>))}
      </ul>
      <button
        onClick={() => {
          fetch(
            'https://api.thecatapi.com/v1/images/search',
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'live_UPOxOpEt6IGw6UavGzXgWDWrEyQrjZWROPJUbTVLnbBGi3cbkkVsm13s0KYeGKbR'
              },
            }
          ).then(response => response.json())
          .then(res => {
            console.log('res', res)
            dispatch(addCat(res[0]))
          })
        }}
      >
        Add Cat
      </button>
    </div>
  );
}

export default App;
