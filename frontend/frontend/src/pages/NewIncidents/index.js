import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import './style.css'
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

export default function NewIncidents(){

    const [title,setTitle]=useState();
    const [description,setDescription]=useState();
    const [values,setValues]=useState();

    const history = useHistory()

    const ongId = localStorage.getItem("ongID")

    async function handleNewIncident(e){
        e.preventDefault()

        const data = {
            title,
            description,
            values,
        }
        try {
            await api.post("incidents",data,{
                headers:{
                    Authorization:ongId
                }
            })

            history.push("/profile")
        } catch (error) {
            alert("erro ao cadastrar caso")
        }
    }


    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="be the hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhesdamente para encontrar um heroi para resolver isso</p>

                    <Link className="black-link " to="/profile">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Voltar para home
                    </Link>


                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Titulo do caso"
                        values={title}
                        onChange={e =>setTitle(e.target.value)}
                        />  
                    <textarea 
                        placeholder="Descrição"
                        values={title}
                        onChange={e =>setDescription(e.target.value)}
                        />
                    <input 
                        placeholder="valor"
                        values={values}
                        onChange={e =>setValues(e.target.value)}
                        />

                   
                     <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}