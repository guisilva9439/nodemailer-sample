import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import ReactLoading from 'react-loading';

import './style.css';
import api from '../../services/api';

function SendMessage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    function handleClick(e) {
        const sectionForm = document.querySelector('main section');

        sectionForm.classList.toggle('hide');

        sectionForm.className === 'hide' ? 
            e.target.textContent = 'Enviar uma mensagem' : e.target.textContent = 'Cancelar';
    }

    async function handleSubmit(e) {
        e.preventDefault();

        setLoading(true);

        try {
            await api.post('/send', {
                name,
                email,
                message
            });

            history.push('/thanks');
        } catch(err) {
            history.push('/error');
        }
    }

    return (
        <div className="sendMessage">
            <header>
                <h1>Envie-nos uma mensagem</h1>
            </header>

            <main>
                <h2>Precisamos do seu feedback</h2>
                <p>Nos ajude enviando seu feedback. Com ele, podemos melhorar cada vez mais.</p>
                
                <button 
                    className='showForm' 
                    onClick={ handleClick }
                >
                    Enviar uma mensagem
                </button>

                <section className='hide'>
                    <form onSubmit={ handleSubmit }>
                        <input 
                            placeholder='Nome'
                            value={ name }
                            onChange={ e => setName(e.target.value) }
                        />

                        <input 
                            placeholder='E-mail' 
                            value={ email }
                            onChange={ e => setEmail(e.target.value) }
                        />

                        <div className='outline'>
                            <textarea 
                                placeholder='Sua Mensagem' 
                                value={ message }
                                onChange={ e => setMessage(e.target.value) }
                            />

                            <button type='submit'>
                                {
                                    loading ? 'Carregando...' : 'Enviar'
                                }
                            </button>
                        </div>
                    </form>

                    <p>Entraremos em contato assim que possível. ❤</p>
                </section>
            </main>

            <footer>
                <p>Made with ReactJS and NodeJS.</p>
            </footer>
        </div>
    );
}

export default SendMessage;