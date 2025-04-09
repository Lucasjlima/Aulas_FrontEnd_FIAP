import React from 'react';
import CompFormulario from '../Components/compFormulario/compFormulario';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';


const Funcionario = () => {
    return (
        <>
        <div className='min-h-screen'>
            <main>
                <Header />
                <CompFormulario />
            </main>
        </div>


            <Footer/>

        </>
    );

}


export default Funcionario;