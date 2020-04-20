import React from 'react';
import { useHistory } from 'react-router-dom';

import './style.css';

function RequestError() {
    const history = useHistory();

    return (
        <div className="Error">
            <header>
                <h1>Oops!</h1>
            </header>

            <main>
                <h2>Erro na requisição</h2>
                <p>Tente novamente mais tarde.</p>
                
                <button onClick={ () => history.goBack() }>Tentar novamente</button>
            </main>

            <footer>
                <p>Made with ReactJS and NodeJS.</p>
            </footer>
        </div>
    );
}

export default RequestError;