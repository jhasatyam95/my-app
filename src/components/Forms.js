import React,{useState} from 'react'


 
export default function Forms(props) {

  const uppercaseClick = () => {
    // console.log('clicked hai')
    let newText = text.toUpperCase();
    setText(newText);
    props.displayAlert('Converted to UPPERCASE','success');
  }

  const lowercaseClick = () => {
    // console.log('clicked hai')
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.displayAlert('Converted to lowercase','success');
  }
  const clearAllClick = () => {
    // console.log('clicked hai')
    let newText = text.toLocaleLowerCase();
    setText('');
  }

  const handleOnChange = (event) => {
    console.log('on change clicked hai');
    setText(event.target.value);
  }



  const [text,setText] = useState('');

  return (
    <>
      <div className='container py-5'>
            <label htmlFor='textarea' className="form-label">{props.name}</label>
            <textarea className="form-control" id="textarea" rows='7' value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#545353':'white'}}></textarea>
            <button className='btn btn-outline-primary mt-2 me-2' onClick={uppercaseClick} style={{border:props.mode==='dark'?'1px solid white':'1px solid black',color:props.mode==='dark'?'white':'black'}}>Convert to uppercase</button>
            <button className='btn btn-outline-primary mt-2 me-2' onClick={lowercaseClick} style={{border:props.mode==='dark'?'1px solid white':'1px solid black',color:props.mode==='dark'?'white':'black'}}>Convert to lowercase</button>
            <button className='btn btn-outline-primary mt-2 me-2' onClick={clearAllClick} style={{border:props.mode==='dark'?'1px solid white':'1px solid black',color:props.mode==='dark'?'white':'black'}}>Clear all</button>
      </div>

      <div className='container'>

        <h2>Word summary</h2>
        <p>Character count : {text.length}</p>
        <p>Word Count : {text.split(' ').length}</p>

        <h2>Preview</h2>
        <p>{text === "" ?'Enter Text for preview':text}</p>

      </div>
    </>
  )
}
