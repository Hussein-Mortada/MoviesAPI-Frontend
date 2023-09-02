import React, {useState} from 'react';
import axios from 'axios';
import '../App.css';

function RegisterForm() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/users/register', {
        username,
        email,
        password,
      });

    setMessage(response.data);
    } catch (error) {
      console.error('Registration error:', error);
      setMessage('Console Error');
    }
  };


    return (
        <div className='register-form'>
            <section className="vh-100">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black">
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">{message}</p>

                                            <form className="mx-1 mx-md-4" onSubmit={handleRegister} >

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                                                        <label className="form-label" htmlFor="form3Example1c">Your Username</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" id="form3Example3c" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                        <label className="form-label" htmlFor="form3Example3c">Your Email </label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4c" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                    </div>
                                                </div>


                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" className="btn btn-primary btn-lg">Register</button>
                                                </div>

                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default RegisterForm;