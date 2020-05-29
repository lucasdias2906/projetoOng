import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import api from "../../services/api"

import './style.css'

import logoImg from '../../assets/logo.svg'

export default function Register(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [whatsapp,setWhatsapp] = useState("");
    const [city,setCity] = useState("");
    const [uf,setUF] = useState("");

    const history = useHistory()


    async function handleRegister(e){
        e.preventDefault()

        const data ={
            name,
            email,
            whatsapp,
            city,
            uf
        }

       try {
        const response = await api.post("ongs", data)

        alert(`seu id de acesso ${response.data.id}`)

        history.push("/")

       } catch (error) {
           alert("erro no cadastro")
       }
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="be the hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu Cadastro, entre na plataforma e ajude essas pessoas a encontrarem os casos da sua ONG</p>

                    <Link className="black-link " to="/">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Não tenho cadastro
                    </Link>


                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        type="email"
                        placeholder="Digite seu EMAIL"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input placeholder="Digite seu Whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                    <input placeholder="Digite sua Cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                        <input placeholder="UF" 
                        value={uf}
                        onChange={e => setUF(e.target.value)}
                        style={{width:80}}/>
                    </div>
                        <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}