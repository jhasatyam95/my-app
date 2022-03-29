import React from 'react'

function Alert(props) {


    const capt = (word1)=>{
        let word2 = word1.toLowerCase();
        return word2.charAt(0).toUpperCase() + word2.slice(1);
    }

  return (
    
     props.alertTitle && <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{capt(props.alertTitle.type)}</strong>: {props.alertTitle.msg}
            {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>
    
  )
}

export default Alert
