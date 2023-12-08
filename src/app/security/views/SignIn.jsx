import { useState } from 'react'
import { Input } from '../../shared/components/Input'
import { Button } from '../../shared/components/Button'
import '../style/Login.css'

const MessageDescription = ({ title, p1, p2 }) => {
    return  <div>
                    <p className="text-center font-bold text-xl mb-2">{title}</p>
                    <p className="text-center ">{p1} <br/> {p2}</p>
                </div>
}

const MessageLogin = ({ condition }) => {
    if(condition == '')
        return  <MessageDescription title="Valida tu correo electronico" p1="Si conoces que tienes un correo" p2="ingresalo para validarlo." />
    else if(condition == 'register')
        return  <MessageDescription title="Crear cuenta" p1="Ingresa tus datos para poder crear tu cuenta" p2="y disfrutar de todos nuestros servicios." />
    else if (condition == 'login')
        return  <MessageDescription title="Cuenta registrada" p1="Tu cuenta se encuentra registrada" p2="ingresa tus credenciales." />
}

const FormLogin = ({ type, _email }) => {
    
    if(type == 'register'){
        const [register, setRegister] = useState({ name: '', email: _email,  number: '', password: ''});
        const { name, email, number, password } = register

        const onChangeRegister = (e) => {
            const { name, value } = e.target
            setRegister((prev) => ({
                ...prev,
                [name]: value
            }))
        }

        const onClickSendRegister = () => {
            console.log(register)
        }

        return <div className='my-5'>
            <div className='row mb-3'>
                <Input label="Name:" placeholder="Name" type="text" value={name} onChange={onChangeRegister} name="name" />
            </div>
            <div className='row mb-3'>
                <Input label="Number:" placeholder="Number" type="number" value={number} onChange={onChangeRegister} name="number" />    
            </div>
            <div className='row mb-5'>
                <Input label="Password:" placeholder="password" type="password" value={password} onChange={onChangeRegister} name="password" />    
            </div>
            <div className='row mb-3'>
                <Button name="Registrarse" color="primary" onClick={onClickSendRegister}/>
            </div>
        </div>
    }
    else if(type == 'login'){

        const [login, setLogin] = useState({email: _email, password: ''})
        const { email, password } = login

        const onChangeLogin = (e) => {
            const {name, value} = e.target
            setLogin((prev) => ({
                ...prev,
                [name]: value
            }))
        }

        const onClickSendLogin = () => {
            console.log(login)
        }

        return <div className='my-5'>
            <div className="row mb-5">
                <Input label="Password:" placeholder="password" type="password" value={password} onChange={onChangeLogin} name="password" />
            </div>            
            <div className='row mb-3'>
                <Button name="Ingresar" color="primary" onClick={onClickSendLogin}/>
            </div>
        </div>
    }

}

export function SignIn(){

    const [stateRegister, setStateRegister] = useState('')
    const [email, setEmail] = useState('')
    
    const onChangeEmail = (e) => setEmail(e.target.value)    
    const onChangeStateRegister = () => setStateRegister('')

    const onClickStateRegister = () => {
        if(email == 'N')
            setStateRegister('login')
        else
            setStateRegister('register')
    }

    return(
        <div className="w-full h-screen">
            <div className='w-full flex flex-col items-center'>
                <div className="w-16 h-16 bg-black rounded-full m-5"></div>
                <MessageLogin condition={stateRegister} />
                <div className='m-5 block input-size'>
                    {
                        stateRegister == '' ?
                        <div className='flex flex-col justify-center'>
                            <div className='row mb-5'>
                                <Input label="Email:" placeholder="Ejm: gmail.com" type="text" value={email} onChange={onChangeEmail} name="name" />
                            </div>
                            <div className='row'>
                                <Button name="Ingresar" disable={false} color="primary" onClick={onClickStateRegister}/>
                            </div>                                                        
                        </div>                        
                        :
                        <div className='flex flex-col justify-center'>
                            <p className='block text-gray-500 text-base'>Correo Electronico<br/>{email} <span className='text underline hover:cursor-pointer text-black' onClick={onChangeStateRegister}>Change</span></p>
                            <FormLogin type={stateRegister} _email={email}></FormLogin>
                        </div>                        
                    }
                </div>
            </div>
        </div>
    )
}