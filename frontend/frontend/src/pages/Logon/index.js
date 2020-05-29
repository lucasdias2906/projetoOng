import React,{useState} from 'react'

import {FiLogIn} from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom'

import api from "../../services/api"

import './style.css'

import logoImg from '../../assets/logo.svg'

import heroesImg from '../../assets/heroes.png'

 export default function Logon() {
    const [id, setid]=useState("");

    const history = useHistory()

    async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await api.post("/sessions",{id})

           

            history.push("/profile")
        } catch (error) {
            alert("falha no login")
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="be the hero" />

                <form onSubmit={handleLogin}>
                    <h1>faça seu logon</h1>

                    <input placeholder="seu ID"
                    value={id} 
                    onChange={e => setid(e.target.value)} />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="black-link " to="/register">
                        <FiLogIn size={16} color="#e02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    )
}