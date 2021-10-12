import { useState } from "react"



export default function ZipSearch (props) {
    const [zip, setZip] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();

        props.search(zip);
        setZip('');
    }

    return(
        <div>
            <p>Can't find your city? Search with your zip code!</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name="zip" value={zip} onChange ={event => setZip(event.target.value)} />
                <input type='submit' value='Submit'/>
            </form>
        </div>
        
    )
}