
import './App.css';
import { useRef } from 'react';

function App() {
  const userRef = useRef();
  const passwordRef = useRef();
 const handleLogin = (e)=>{
 e.preventDefult();
  const user =userRef.current.value 
  const password = passwordRef.current.value; 
  userRef.current.value= ''; 
   passwordRef.current.value = '';

   let massage =`
   userName: ${user}
   password: ${password}
   `;
   alert(massage)

 }  
 return (
    <div className="form-Container">
    
   <form onSubmit={(e)=>handleLogin(e)} className='input-container'>
   <h1> LogIn From </h1>
   <div >
      <label htmlFor="UserName">UserName</label>
      <input 
      id='UserName'
      ref={userRef}
       type="text" 
       placeholder='tupe your name'
       />
    </div>
    <div>
      <label htmlFor="PassWord">PassWord</label>
      <input 
      type="password"
      ref={passwordRef}
       id="PassWord"
       placeholder='type your password'
       />
    </div>
    <button type="submit">LogIn</button>
   </form>
    </div>
  );
}

export default App;
