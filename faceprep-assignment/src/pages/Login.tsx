import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const loginHandler = () => {
        if (username === 'foo' && password === 'bar') {
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/home');
        }
        else {
            toast.error('Unauthorized User', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }

    }
    return (
        <div className='w-[100vw] h-[100vh] bg-[#333] flex items-center justify-center'>
            <div className='w-[320px] h-[400px] bg-[#fff] rounded-[10px] flex flex-col relative'>
                <div className='w-[100%] py-[10px] flex items-center justify-center'>
                    <div className='myFont uppercase mt-[30px]'>
                        Login
                    </div>
                </div>
                <div className='flex flex-col gap-[25px] w-[100%] px-[10px] my-[20px]'>
                    <div className='w-[100%]'>
                        <div>Email</div>
                        <input
                            type='text'
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            placeholder='Use foo as username'
                            className='w-[100%] border-[2px] py-[5px]  rounded-full  px-[5px]'
                        />
                    </div>
                    <div>
                        <div>Password</div>
                        <input
                            type='password'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            placeholder='Use bar as password'
                            className='w-[100%] py-[5px] border-[2px] rounded-full px-[5px]'
                        />
                    </div>
                </div>
                <button className='absolute bottom-[50px] left-[50%] bg-[#F9D323] w-[90%] rounded-full myFont border-[1px] px-[15px] py-[10px]'
                    style={{ transform: 'translate(-50%,0)' }}
                    onClick={loginHandler}
                >
                    Login
                </button>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}

export default Login