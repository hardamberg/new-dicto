import React, { useState } from 'react'
import axios from 'axios'

const Domain = () => {

    const [domain,setDomain] = useState({})
    const [search,setSearch] = useState('')
    const handleSubmit = async(e) =>{
        e.preventDefault()
        try {
          const base_url = 'https://api.whoisfreaks.com/v1.0/whois?apiKey=4cd0050c856b4a69a9b9215879d490c5&whois=live&domainName=search'
          const response = await axios.get(base_url)
          setDomain(response.data)
        } catch (error) {
          console.error(error)
        }
         }

         return(
          <>
             <div>
                  <div>
                    <h2>domain prices</h2>
                    <p>Discover more Popular, top level Domains</p>
                  </div>

                  <form onSubmit={handleSubmit}>

                    <input type="search"
                      value={search}
                      onChange={(event)=> setSearch(event.target.value)}
                      placeholder="Find Your Domain Name"
                      name=""
                      id=""
                    />

                    <button type="submit">Search</button>

                  </form>

                  <div>
                    <p>.COM only $5.98</p>
                    <p>.NET only $11.98</p>
                  </div>
                </div>

                <div>
                  <div>
                    {
                       domain &&(
                          <h2>Registered Domain: { domain.domain_registered }</h2>
                       )
                    }
                  </div>

                  <div>
                    <h2>updated Date: {domain.update_date}</h2>
                    <h2>Expired date: {domain.expiry_date}</h2>
                  </div>
                </div>
         
  

  
    <div>
      
    </div>

    </>
  )
}

export default Domain;
