import React from 'react'

export default function About() {
  return (
    <>
    <div className="accordion my-5" id="accordionExample">
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About Text-Analyzer
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       Text-Analyzer is a basic text editor.It helps in better modification of your text.It could be utilized while converting your text either to lowercase or to uppercase or to capitalize the first letter of the word.This could also help to have word counts in your text.
      </div>
    </div>
  </div>
 </div>
  
</>
  )
}
