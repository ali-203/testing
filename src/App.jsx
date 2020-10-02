import React, { useState } from "react";
const App = () => {
  const [name, setName] = useState("");
  

const InputEvent = (event) => {
  console.log(event.target.value);
  setName(event.target.value);
};
const onSubmit = () => {
setFullName(name);

};
return(
<>
  <div>
  
  <h1> Hello {fullName} </h1> 
  <input type="text" placeholder="Enter Your Name" onChange={InputEvent} value={name} />
  <button onClick={onSubmit}> Click Me 👍 </button>
</div>
  </>
);
};
  export default App;