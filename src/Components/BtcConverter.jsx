import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import "../Components/BtcConverter.css"

const BtcConverter = () => {

    const [busdAmount, setBusdAmount] = useState('');
    const [nairaAmount, setNairaAmount] = useState('');

    const handleConversion = () => {
        const apiURL = 'https://dashboard.encryptbox.co.uk/api/v1/live/getbuyrate';
        const token = '0Coc24mjYhlsJ8bPSZWYKGjVKYHeWBhDjgqlqiFK4Hf9FsLN5HTMpRxej85pMwGx';

        axios.post(apiURL,{
            "amount": busdAmount,
            "coin_name": "busd"
        }, {
           headers:{
            token: token
           },
        })

        .then(response=>{
            const { coin } = response.data;
            setNairaAmount(coin);
        })

        .catch(error =>{
            console.error('Conversion API Error:', error);

            });
    }

  return (
    <div className='body'>
        <input type='number' value={busdAmount} onChange={e => setBusdAmount(e.target.value)} />
        <button onClick={handleConversion}>convert</button>
        <p>Naira Amount: {nairaAmount}</p>
      
    </div>
  );
}

export default BtcConverter;

