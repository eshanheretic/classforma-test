import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context';

function Document(props) {
    const { documents, editDoc } = useContext(ProductContext);
    const docu = documents.filter(doc => doc.name === props.match.url.substring(1))[0]
    return (
        <div className='doc-container'>
            <div className='header'>
                <div className='title'> <h1>{docu.name}</h1> </div>
                <div className='metadata'>  {docu.metadata}</div>

                <div className='body'>
                    <textarea onMouseUpCapture={() => editDoc(docu.name, window.getSelection().toString(), 'annotations')} value={docu.content} onChange={(e) => editDoc(docu.name, e.target.value, 'content')}></textarea>
                </div>
                <Link to='/'><button>Back</button></Link>
            </div>
            <div className='annotations'>
                Current
                Annotations:
                <ul >
                    {docu.annotations.map(ann => <li onClick={() => editDoc(docu.name, ann, 'remove')}>{ann}</li>)}
                </ul>
            </div>

        </div>
    )
}
export default Document;