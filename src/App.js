import React from "react"
import "./index.css"



// export default function Form() {
//   const [formData, setFormData] = React.useState(
//       {
//           firstName: "", 
//           lastName: "", 
//           email: "", 
//           comments: "", 
//           isFriendly: true,
//           employment: "",
//           favColor: ""
//       }
//   )
  
//   function handleChange(event) {
//       const {name, value, type, checked} = event.target
//       setFormData(prevFormData => {
//           return {
//               ...prevFormData,
//               [name]: type === "checkbox" ? checked : value
//           }
//       })
//   }
  
//   function handleSubmit(event) {
//       event.preventDefault()
//       // submitToApi(formData)
//       console.log(formData)
//   }
  
//   return (
//       <form onSubmit={handleSubmit}>
//           <input
//               type="text"
//               placeholder="First Name"
//               onChange={handleChange}
//               name="firstName"
//               value={formData.firstName}
//           />
//           <input
//               type="text"
//               placeholder="Last Name"
//               onChange={handleChange}
//               name="lastName"
//               value={formData.lastName}
//           />
//           <input
//               type="email"
//               placeholder="Email"
//               onChange={handleChange}
//               name="email"
//               value={formData.email}
//           />
//           <textarea 
//               value={formData.comments}
//               placeholder="Comments"
//               onChange={handleChange}
//               name="comments"
//           />
//           <input 
//               type="checkbox" 
//               id="isFriendly" 
//               checked={formData.isFriendly}
//               onChange={handleChange}
//               name="isFriendly"
//           />
//           <label htmlFor="isFriendly">Are you friendly?</label>
//           <br />
//           <br />
          
//           <fieldset>
//               <legend>Current employment status</legend>
//               <input 
//                   type="radio"
//                   id="unemployed"
//                   name="employment"
//                   value="unemployed"
//                   checked={formData.employment === "unemployed"}
//                   onChange={handleChange}
//               />
//               <label htmlFor="unemployed">Unemployed</label>
//               <br />
              
//               <input 
//                   type="radio"
//                   id="part-time"
//                   name="employment"
//                   value="part-time"
//                   checked={formData.employment === "part-time"}
//                   onChange={handleChange}
//               />
//               <label htmlFor="part-time">Part-time</label>
//               <br />
              
//               <input 
//                   type="radio"
//                   id="full-time"
//                   name="employment"
//                   value="full-time"
//                   checked={formData.employment === "full-time"}
//                   onChange={handleChange}
//               />
//               <label htmlFor="full-time">Full-time</label>
//               <br />
//           </fieldset>
//           <br />
          
//           <label htmlFor="favColor">What is your favorite color?</label>
//           <br />
//           <select 
//               id="favColor" 
//               value={formData.favColor}
//               onChange={handleChange}
//               name="favColor"
//           >
//               <option value="red">Red</option>
//               <option value="orange">Orange</option>
//               <option value="yellow">Yellow</option>
//               <option value="green">Green</option>
//               <option value="blue">Blue</option>
//               <option value="indigo">Indigo</option>
//               <option value="violet">Violet</option>
//           </select>
//           <br />
//           <br />
//           <button>Submit</button>
//       </form>
//   )
// }

export default function App() {
    
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
    const [formData,setFormData] = React.useState({
        email:"",
        password:"",
        cpassword:"",
        subscribeToNewsLetter:true
    })

    function handleSubmit(event) {
        event.preventDefault();
        if(formData.password===formData.cpassword){
            console.log("HEWLLFKSDLFKJSADF");
        }
        else console.log("lol");
    }

    function handleChange(event){
       const {name,value,type,checked} = event.target;
       setFormData((prev)=>{
         return{
            ...prev,
            [name]:type === "checkbox" ? checked : value
         }
       })
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleChange}
                    value={formData.email}
                    name="email"
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    onChange={handleChange}
                    value={formData.password}
                    name="password"
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleChange}
                    value={formData.cpassword}
                    name="cpassword"
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        checked = {formData.subscribeToNewsLetter}
                        onChange={handleChange}
                        name="subscribeToNewsLetter"
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
