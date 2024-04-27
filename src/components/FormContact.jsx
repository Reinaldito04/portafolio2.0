import React from 'react';
import axios from 'axios'; // Importar Axios
import './Input.css';
import { useState } from 'react';

function FormContact() {

    const [name,setName]=useState("");
    const [mail,setMail]=useState("");
    const [message,setMessage]=useState(""); 
    const [error, setError] = useState("");
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleMailChange = (event) => {
        setMail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };
    const isValidEmail = (email) => {
        // Expresión regular para validar el formato del correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const enviarFormulario = async () => {
        if (!name || !mail || !message) {
            setError("Todos los campos son obligatorios");
            return;
        }

        if (!isValidEmail(mail)) {
            setError("El formato del correo electrónico no es válido");
            return;
        }

        try {
            const response = await axios.post('https://apimailjs.onrender.com/send', {
                nombre: name,
                mail: mail,
                message: message
            });
            console.log(response.data); // Aquí puedes manejar la respuesta del servidor si es necesario
            alert('Correo enviado correctamente');
        } catch (error) {
            console.error('Error al enviar el correo electrónico:', error);
            alert('Error al enviar el correo electrónico');
        }
    };

    return (
        <>
           
           {error && <p className='error'>{error}</p>}
            <div className="inputGroup">
                <input 
                    value={name}
                    onChange={handleNameChange}
                    type="text" 
                    name="nombre" 
                    required="" 
                    autoComplete="off" 
                />
                <label htmlFor="nombre">Name</label>
            </div>
            <div className="inputGroup">
                <input 
                    value={mail}
                    onChange={handleMailChange}
                    type="text"
                    name="mail" 
                    required="" 
                    autoComplete="off" 
                />
                <label htmlFor="mail">Email</label>
            </div>
            <div className="inputGroup">
                <textarea 
                    value={message}
                    onChange={handleMessageChange}
                    name="message" 
                    required="" 
                    autoComplete="off"
                ></textarea>
                <label htmlFor="message">Mensaje</label>
            </div>
            <div className="container contenedor-boton">
                <button onClick={enviarFormulario}>
                    <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                            >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                    fill="currentColor"
                                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <span>Send</span>
                </button>
            </div>
            
        </>
    );
}

export default FormContact;
