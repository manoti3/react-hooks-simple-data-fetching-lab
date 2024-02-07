// create your App component here
import { useState, useEffect } from 'react'

export default function App() {
	const [dog, setDog] = useState(null)
  const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetch('https://dog.ceo/api/breeds/image/random')
			.then((res) => res.json())
			.then((data) => setDog(data.message))
      .finally(() => setLoading(false))
	}, [])

  console.log(dog)
	return <>{loading ? <p>Loading...</p> : <img src={dog} alt='A Random Dog' />}</>
}