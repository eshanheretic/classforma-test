import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function HeadPage({ documents }) {
    const [inp, setInp] = useState('')
    function retList() {
        const res = documents.map((doc) => {
            if (doc.name.toLowerCase().includes(inp.toLowerCase()))
                return <Link to={doc.name}><li>{doc.name}</li></Link>
        })
        return res;
    }
    return (
        <div className="container">
            <div className='search'>
                <input placeholder='Search Docs' type='text' value={inp} onChange={(e) => setInp(e.target.value)} />
            </div>
            <ul>
                {retList()}
            </ul>
        </div>
    );
}
export default HeadPage;