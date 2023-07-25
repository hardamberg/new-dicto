import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';



const Results = ()=> {
    const [diction, setDiction] = useState("");
    const [word, setWord] = useState("");
    const [error, setError] = useState("")

    const handleSubmit = async(e) => { 
        e.preventDefault();

        if (!word) {
            setError("please enter a word");
            return;
        }

        try {
            const base_url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
 
            const response = await axios.get(base_url);
            setDiction(response.data)
            
        } catch(error){
            setError("word not found");
            console.error(error);
        }
    }
    return(
        <Wrapper>
            <div className='dictionnn'>
                <h1>DICTIONARY ON THE GO</h1>
                <form action='' onSubmit={handleSubmit}>
                    <input type="text"
                    placeholder='Enter Your Word Here'
                    value={word}
                    onChange={(e) => setWord(e.target.value) }
                    id='' />
                    <button id='btn' type="submit">submit</button>
                </form> 
                
                {
                    error && (<p>{error}</p>)
                }
                <div>
                    <div>
                        {
                            diction && (
                              diction.map((search, index) => (
                                search.meanings.map(meaning => (
                                    <div key={index}>
                                        <p id='boxx'>{meaning.partOfSpeech}</p>
                                        {
                                            meaning.definitions.map(definition => (
                                                <div>
                                                    <p id='box2'>{definition.definition}</p>
                                                    <p id='box2'>{definition.synonyms}</p>
                                                    <p id='box2' >{definition.antonyms}</p>
                                                    <p id='box2'>{definition.example}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ))
                              ))  
                            )
                        }
                    </div>   
                </div>

                
            </div>
            </Wrapper>
        )
}
const Wrapper = styled.div`
min-height: 100vh;
background-color:grey;
color: white;
display: flex;
justify-content: center;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;


.dictionnn h1{
    font-size: 30px;
    background-color: transparent;
    color: white;
    width: 100%;
    display:flex;
    justify-content: center;


}

.dictionnn form input{
    padding: 7px;
    border: none;
}

#btn{
    padding: 7px;
    border-radius: 20px;
    border: none;
   margin-left: 10px;
}
#boxx{
    /* height: 5vh; */
    /* width: 50%; */
    padding: 10px;
    color: black;
}
#box2{
    padding: 5px;
}


@media screen and (max-width:900px) {

    .dictionnn form input{
    margin-left: 50px;
    margin-bottom: 10px;
    
}
.dictionnn{
    padding: 20px;
}

    
}




`

export default Results;