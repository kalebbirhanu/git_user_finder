import { useState } from "react";
import axios from "axios";


const Github_user_finder = () => {
  const[input, setInput] = useState('');
  const[user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const handleUser = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${input}`)
      setUser(response.data);
      setError(null);
    } catch (error) {
setError('couldnot fetch data from url', error);
setUser(null);

    }
  }
  return (
    <>
     <h1> Github_user_finder </h1>
      <input type="text" placeholder="Enter  github username" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleUser}>GetUser</button>
      {error && <p>{error}</p> }
      {user && (
        <div>
          <h3>{user.login}</h3>
          <p>folllowers:  {user.follower}</p>
          <p>folllowing:  {user.following}</p> 
          <p>repositeries: {user.public_repos}</p>
        </div>
      )}
      </>
  )
}

export default Github_user_finder;