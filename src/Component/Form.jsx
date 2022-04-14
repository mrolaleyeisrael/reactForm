import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
  super(props);
  // Don't call this.setState() here!
  this.state = { fName: "", lName: "", email: "", };
}

handleChange = (event) => {
  this.setState({ [event.target.name]: event.target.value})
  // this.setState({ lName: event.target.value})
}

// handlelChange = (event) => {
//   // this.setState({ name: event.target.value})
//   this.setState({ lName: event.target.value})
// }

// handleEmail = (event) => {
//   // this.setState({ name: event.target.value})
//   this.setState({ email: event.target.value})
// }

handleSubmit = (e) => {
  e.preventDafault();
  alert('Submission received..!')
  this.setState({
    fName: "",
    lName: "",
    email: ""
  })
};

  render() {
    return (
      <>
        <section className=' flex flex-col md:flex-row justify-center items-center  max-w-full container mx-auto px-5 py-32 md:gap-16 space-y-10'>

          {/* form container */}
          <div className=' w-full max-w-md md:w-1/2 flex flex-col p '>
            <h1 className=' text-center text-white text-4xl'>Registration Form</h1>

            <form onSubmit={this.handleSubmit} className=' space-y-4  mt-16 w-full '>

              {/* first name */}
              <div className=' flex flex-col space-y-2 w-full'>
                <label htmlFor="fName">First Name</label>
                <input onChange={this.handleChange} type="text" name="fName" id="fName" placeholder='Firstname' className=' border-2 focus:outline-none w-full p-2 rounded-xl'/>
              </div>

              {/* last name */}
              <div className=' flex flex-col space-y-2 w-full'>
                <label htmlFor="lName">Last Name</label>
                <input onChange={this.handleChange} type="text" name="lName" id="lName" placeholder='Last Name' className=' border-2 focus:outline-none w-full p-2 rounded-xl'/>
              </div>

              {/* email */}
              <div className=' flex flex-col space-y-2 w-full'>
                <label htmlFor="email">Email</label>
                <input onChange={this.handleChange} type="text" name="email" placeholder='example@mail.com' id="email" className=' border-2 focus:outline-none w-full p-2 rounded-xl'/>
              </div>

              {/* gender */}
              <div className=' flex flex-col space-y-2 w-full'>
                <label htmlFor="gender">Gender</label>

              </div>

              {/* address */}
              <div>
                <label htmlFor="address">Address</label>

              </div>


              {/* bio */}
              <div>
                
              </div>


              <button className=' px-3 py-2 rounded-xl bg-blue-400 outline-none shadow-xl'>Submit</button>
            </form>
          </div>

          <div className=' max-w-md h-[50vh] w-full md:w-1/2 border-2 p-5 rounded-xl'>
            <div className='w-full text-white text-lg'>
              
              <h1>First Name: {this.state.fName}</h1>
              <h1>Last Name: {this.state.lName}</h1>
              <h1>Email Address: {this.state.email}</h1>
              <h1>Gender: {this.state.gender}</h1>

            </div>
          </div>
        </section>
                
      </>
    )
  }
}

export default Form