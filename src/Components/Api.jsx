import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Api = () => {

    // const base =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Hardamberg`
    // const [profile, setprofile] = useState("");

    // useEffect(() => {
    //     const base_url = "https://reqres.in/api/users";
    //     axios.get(base_url)
    //     .then((response)=>{
    //         setprofile(response.data)
    //     }) 
    // }, []);

    const [profile, setProfile] = useState("");
    useEffect(()=>{
        const base_url = "https://api.dictionaryapi.dev/api/v2/entries/en/car"
        axios.get(base_url)
        .then ((response)=>{
            setProfile(response.data)
        })
    })
  return (
    <Wrapper>

        {/* <div>
            <h1>QR CODE</h1>
            <img src={base} alt="" />
        </div> */}
        {/* {
            profile && (
                <div>
                    {
                        profile.data.map((value)=>(
                            <div key={value.id}>
                                <p>My name is :{value.first_name} {value.last_name}</p>
                                <p>My email is :{value.email}</p>
                                <img src={value.avatar} alt="" />
                            </div>
                        ))
                    }
                </div>
            )
        } */}

            <div>
                {
                    profile && (
                        profile.map((words)=>(
                            <div key={words.id}>
                                <p>{words.word}</p>
                                <p>{words.phonetic}</p>
                                <div>
                                    {
                                        words.meanings.map(meaning=>(
                                            <div>
                                                <p>{meaning.partOfSpeech}</p>
                                                <div>
                                                    {
                                                        meaning.definitions.map(definition=>(
                                                            <div>
                                                                <p>{definition.definition}</p>
                                                                <p>{definition.antonyms}</p>
                                                                <p>{definition.example}</p>
                                                            </div>
                                                        ))
                                                    }
                                                </div>

                                                <div>
                                                    {
                                                         meaning.definitions.map(other=>(
                                                            <div>
                                                                <p>{other.synonyms}</p>
                                                            </div>
                                                        )
                                                            )
                                                    }
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                {/* <p>{words.phonetics}</p> */}
    
                            </div>
    
                        ))
                    )
                }
            </div>


    </Wrapper>
  )
}
const Wrapper = styled.div`


`
export default Api;
