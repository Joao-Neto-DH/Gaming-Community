import React, { useEffect, useRef } from "react";
import { MouseEventHandler } from "react";
import { Form, Link, useActionData } from "react-router-dom";
import Container from "../components/Container";
import Header from "../components/Header";
import { useTitle } from "../hooks/useTitle";
import { signin } from "./login/login";
import "./LoginPage.css";

export async function actionLogin({request}: any){
    const formData = await request.formData();
    const datas = Object.fromEntries(formData);   

    return await signin(datas as any)
}

function error412(data: any){
    const { errors, message } = data;
                
                if (errors instanceof Array) {
                    errors.forEach(error=>{
                        const input = document.querySelector(`[name=${error.param}]`);
                        
                        if(input){
                            const parent = input.parentElement;
                            parent?.classList.add("invalid");
                        }
                    });
                }else{
                    alert(message)
                }
}

function success200(data: any) {
    const {user, token} = data;
    console.log(user);
}

const LoginPage: React.FC<{}> = ()=>{
    const setTitle = useTitle("Entrar");
    const login = useRef<HTMLDivElement>(null);
    const createAccount = useRef<HTMLDivElement>(null);

    const sub: any = useActionData();
    
    useEffect(()=>{
        if (sub) {
            switch (sub.status) {
                case 412: error412(sub.data); break;
                case 200: success200(sub.data); break;
            
                default: alert(JSON.stringify(sub.data)); break;
            }            
        }
    }, [sub]);

    const changeLoginForm: MouseEventHandler<HTMLButtonElement> = () =>{
        const active = "active";
        if(login.current?.classList.contains(active)){
            login.current.classList.remove(active)
            createAccount.current?.classList.add(active);
            setTitle("Cadastrar")
        }else{
            login.current?.classList.add(active)
            createAccount.current?.classList.remove(active);
            setTitle("Entrar")
        }
    }

    return(
        <>
            <Header/>
            <div
                style={{
                    height:"5rem"
                }}
            ></div>
            <main className="login-content">
                <div className="login-inner">
                    <div ref={login} className={`login-form login-signin active`}>
                        <Container>
                            <>
                                <h2>LOGIN</h2>
                                <hr />
                                <Form method="post">
                                    <div className="input-box">
                                        <label htmlFor="email2">
                                            Email
                                        </label>
                                        <input type="email" name="email" id="email2" required />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="password2">Senha</label>
                                        <input type="password" name="password" id="password2" required/>
                                    </div>
                                    <Link to="/login/password/recovery">Esqueci a senha</Link>
                                    <button type="submit" className="btn">Entrar</button>
                                    <button type="button" className="btn secondary" onClick={changeLoginForm}>Criar Conta</button>
                                </Form>
                                <div className="or-divider">
                                    <hr />
                                    ou
                                    <hr />
                                </div>
                                <ul>
                                    <li><Link to="/facebook">F</Link></li>
                                    <li><Link to="/facebook">G</Link></li>
                                    <li><Link to="/facebook">I</Link></li>
                                </ul>
                            </>
                        </Container>
                    </div>
                    <div ref={createAccount} className={`login-form login-signup`}>
                        
                    <Container>
                            <>
                                <h2>CADASTRO</h2>
                                <hr />
                                <form method="post">
                                    <div className="input-box invalid">
                                        <label htmlFor="name">
                                            Nome
                                        </label>
                                        <input type="text" name="name" id="name" required />
                                    </div>
                                    <div className="input-box invalid">
                                        <label htmlFor="email">
                                            Email
                                        </label>
                                        <input type="email" name="email" id="email" required />
                                    </div>
                                    <div className="input-box invalid">
                                        <label htmlFor="password-create">Senha</label>
                                        <input type="password" name="password" id="password-create" autoComplete="true" required/>
                                    </div>
                                    <div className="input-box invalid">
                                        <label htmlFor="password-confirm">Confirmar Senha</label>
                                        <input type="password" name="password-confirm" id="password-confirm" autoComplete="true" required/>
                                    </div>
                                    <button type="submit" className="btn">Entrar</button>
                                    <button type="button" className="btn secondary" onClick={changeLoginForm}>Já tenho uma conta</button>
                                </form>
                                <div className="or-divider">
                                    <hr />
                                    ou
                                    <hr />
                                </div>
                                <ul>
                                    <li><Link to="/facebook">F</Link></li>
                                    <li><Link to="/facebook">G</Link></li>
                                    <li><Link to="/facebook">I</Link></li>
                                </ul>
                            </>
                        </Container>
                    </div>
                </div>
            </main>
        </>
    );
}

export default LoginPage;