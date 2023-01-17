import React from "react";
import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Header from "../components/Header";
import { useTitle } from "../hooks/useTitle";
import "./LoginPage.css";

const LoginPage: React.FC<{}> = ()=>{
    const setTitle = useTitle("Entrar");
    const login = React.createRef<HTMLDivElement>();
    const createAccount = React.createRef<HTMLDivElement>();
    const changeLoginForm: MouseEventHandler<HTMLButtonElement> = (evt) =>{
        // setCreateAccountForm(!isCreateAccountForm);
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
                                <form method="post">
                                    <div className="input-box invalid">
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
                                        <label htmlFor="password">Senha</label>
                                        <input type="password" name="password" id="password" required/>
                                    </div>
                                    <div className="input-box invalid">
                                        <label htmlFor="password-confirm">Confirmar Senha</label>
                                        <input type="password" name="password-confirm" id="password-confirm" required/>
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