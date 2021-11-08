import React, { useState, useEffect } from 'react';
import axios from 'axios'

// https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=SEARCHTERM

const Search = () => {
    const [term, setTerm] = useState('')
 

useEffect(() => {
   const search = async() => {
    await axios.get("en.wikipedia.org/w/api/php?action=query&list=search&format=json&origin=*&srsearch=programming") 
   };
   search();
}, [term])

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input onChange={(e) => setTerm(e.target.value)} value={term} className="input" />
                </div>
            </div>
        </div>
    )
}

export default Search;