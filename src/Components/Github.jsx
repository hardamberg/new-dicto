import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Github = () => {
     const [git, setGit] = useState("");
    const [user, setUser] = useState("");
    const [error, setError] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (!user) {
            setError("please enter a word");
            return;
        }

        try {
            const base_url = `https://api.github.com/${user}`;
 
            const response = await axios.get(base_url);
            setGit(response.data)
        } catch(error){
            setError("User not found");
            console.error(error);
        }

    }
  return (
    
    <Wrapper>

    <div className='dictionnn'>
        <h1>Github Users info</h1>

        <form action='' onSubmit={handleSubmit}>
            <input type="text"
            placeholder='Enter Your name Here'
            value={user}
            onChange={(e) => setUser(e.target.value) }
            id='' />
            <button id='btn' type="submit">submit</button>
        </form> 
        {
            error && (<p>{error}</p>)
        }

        
            <div>
                {
                    git && (
                      git.map((search, index) => (
                        
                            <div key={index}>
                                <p id='boxx'>{search.login}</p>
                               




                            </div>
                        )
                      ))  

                    
                }
            </div>   
        
    </div>

    </Wrapper>
  )
}
const Wrapper = styled.section`
    
`
export default Github;
