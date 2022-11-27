import React, { useState } from "react";

export default function Form(props) {
  const [text, settext] = useState();

  const handalupclick = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showalert("Converted To Upper Case!","success")
};
  const handalloclick = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showalert("Converted To Lower Case!","success")
};
const handalextrespace = () => {
  let newtext=text.split(/[ ]+/);
  settext(newtext.join(" "));
  props.showalert("Removed Extra Space!","success")
}


  const handalclerclick = () => {
    settext(" ");
    props.showalert("Text Cleard!","success")

};

  function handalclick(event) {
        settext(event.target.value);
    }

    const handalcopy = () => {
      var text = document.getElementById("mybox");
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
      props.showalert("Copied To Clipboad!","success")
    }

  return (
    <>
      <div className="container  my-3" >
        <h2 style={{color:props.mode==='white'?'black':'white'}}>{props.name}</h2>
     <textarea className="form-control my-2" value={text} style={{color:props.mode==='white'?'#1B1212':'white',backgroundColor:props.mode}} onChange={handalclick} id="mybox" rows="8"  ></textarea>
      <div style={{color:props.mode==='white'?'black':'white'}}>
      <button className="btn btn-primary mx-2"  onClick={handalupclick}> Convert To Uppercase </button>
      <button className="btn btn-primary mx-2"  onClick={handalloclick}> Convert To Lower </button>
      <button className="btn btn-primary mx-2"  onClick={handalclerclick }> Clear </button>
      <button className="btn btn-primary mx-2"  onClick={handalcopy}> Copy Text </button>
      <button className="btn btn-primary mx-2"  onClick={handalextrespace}> Remove Extra space </button>


     <h3 >Text Preview</h3>
     <h6>{text}</h6>
     </div>
        </div>
    </>
  );
}