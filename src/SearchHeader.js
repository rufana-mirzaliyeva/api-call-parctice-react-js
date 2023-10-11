import  {useState} from 'react';
import './App.css';

function  SearchHeader({search}) {

    const [value, setValue] = useState('')
    const formSubmitHandler = (event) => {
        event.preventDefault();
        search(value);

    };

    const changeHandler = (event) => {
       setValue(event.target.value);
        
    }

    return ( 
        <div className= 'search-container'>
            <form className='search-input' onSubmit = {formSubmitHandler}>
                <label>What you are looking for?</label>
                <input value = {value} onChange={changeHandler}/>
            </form>
        </div>
     );
}

export default  SearchHeader;