import React, { useRef } from 'react'

function SignupForm() {
    let msgLabelRef= useRef();
    let stateSelectRef=useRef();
    let firstNameInputRef=useRef();
    let lastNameInputRef=useRef();
    let maleRBRef=useRef();
    let femaleRBRef=useRef();
    let selectedGender;
    let salutation;
    let maritalStatus;

    let onClickSubmit =()=>{
       if( selectedGender==="male"){
        salutation ="Mr."
       }else{
        if(maritalStatus==="single"){
        salutation="Miss."
         } else{
            salutation="Mrs."
         } 
         }
        msgLabelRef.current.innerHTML =`${salutation}${firstNameInputRef.current.value} ${lastNameInputRef.current.value} from ${stateSelectRef.current.value} ,your Account has been created. `
    }
  return (
    <div>
        <h1>Signup Form</h1>

        <form>
            <div>
                <label>FirstName</label>
                <input ref={firstNameInputRef}></input>
            </div>
            <div>
                <label>LastName</label>
                <input ref={lastNameInputRef}></input>
            </div>
            <div>
                <label>Gender</label>
                <input type='radio' name='gender' ref={maleRBRef} onChange={()=>{
                       if(maleRBRef.current.checked===true){
                        selectedGender="male"

                       }
                }}
                    ></input>
                <label className='innerLabel'>Male</label>
                <input type='radio' name='gender' ref={femaleRBRef} onChange={()=>{
                       if(femaleRBRef.current.checked===true){
                        selectedGender="female"

                       }
                }}></input>
                <label className='innerLabel'>Female</label>
            </div>
            <div>
                <label>Marital Status</label>
                <input type='radio' name='ms' onChange={(eventObj)=>{
                    console.log(eventObj);
                    if(eventObj.target.checked===true){
                        maritalStatus="single"

                    }
                }

            }></input>
                <label className='innerLabel'>Single</label>
                <input type='radio' name='ms'onChange={(eventObject)=>{
                    console.log(eventObject);
                    if(eventObject.target.checked===true){
                        maritalStatus="married"

                    }
                }

            }></input>
                <label className='innerLabel'>Married</label>
                
            </div>
            <div>
                <label>State</label>
                <select ref={stateSelectRef}>
                    <option>Select State</option>
                    <option value="AP">Andra Pradesh</option>
                    <option value="TS">Telangana</option>
                    <option value="TN">Tamil Nadu</option>
                    <option value="KL">Kerala</option>
                    <option value="KN">Karntaka</option>
                    <option value="MP">Madhya Pradesh</option>
                </select>
            </div>
            <div>
                <label>Email</label>
                <input></input>
            </div>
            <div>
                <label>Password</label>
                <input></input>
            </div>
            <div>
                <label>Age</label>
                <input></input>
            </div>
            <div>
                <button type='button' onClick={()=>{
                    onClickSubmit();
                }}>Submit</button>
            </div>
            <label ref={msgLabelRef} style={{width:"500px"}}></label>
        </form>
      
    </div>
  )
}

export default SignupForm
