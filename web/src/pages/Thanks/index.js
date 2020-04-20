import React from 'react';
import { useHistory } from 'react-router-dom';

import './style.css';

function Thanks() {
    const history = useHistory();

    return (
        <div className="Thanks">
            <header>
                <h1>Obrigado!</h1>
            </header>

            <main>
                <h2>Obrigado pelo seu feedback!</h2>
                <p>Isso nos ajudará muito. <span role='img' aria-label='happy face'>😄</span></p>
                
                <button onClick={ () => history.goBack() }>Voltar</button>
            </main>

            <footer>
                <p>Made with ReactJS and NodeJS.</p>
            </footer>
        </div>
    );
}

export default Thanks;