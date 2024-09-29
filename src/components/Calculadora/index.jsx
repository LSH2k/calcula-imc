import { useState } from 'react';

import styles from './Calculadora.module.css';

const Calculadora = () => {

    const[altura, setAltura] = useState('');
    const[peso, setPeso] = useState('');

    const resultadoIMC = () => {
        if (!altura && !peso || altura == 0) {
            return '';
        }
        const imcCalc = parseFloat((peso / (altura*altura)).toFixed(1));
            return imcCalc;
    };

    const imc = resultadoIMC();

    return (
        <>
            <header className={`${styles.header} text-center p-3`}>
                <h1>Cálculo IMC</h1>
            </header>

            <form className='container d-flex justify-content-center'>
                <label className='fw-bold m-2'>
                    Altura:
                    <input placeholder='Metros' onChange={e => setAltura(e.target.value)} max={3} className='form-control' type="number" />
                </label>
                <label className='fw-bold m-2'>
                    Peso:
                    <input placeholder='Quilos' onChange={e => setPeso(e.target.value)} max={300} className='form-control' type="number" />
                </label>
            </form>
            <div className={`${styles.resultado}`}>
                <p>Seu IMC: <i><b>{imc}</b></i></p>
            </div>

            <table className={`${styles.table} w-50 container table-bordered text-center`}>
                <thead>
                    <tr>
                        <th scope='col'>
                            IMC
                        </th>
                        <th scope='col'>
                            Classificação
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={imc < 18.5 && imc !== '' ? styles.tableRes : ''}>
                        <td>
                            MENOR QUE 18,5
                        </td>
                        <td>
                            MAGREZA
                        </td>
                    </tr>
                    <tr className={imc >= 18.5 && imc < 25 ? styles.tableRes : ''}>
                        <td>
                            ENTRE 18,5 E 24,9
                        </td>
                        <td>
                            NORMAL
                        </td>
                    </tr>
                    <tr className={imc >= 25 && imc < 30 ? styles.tableRes : ''}>
                        <td>
                            ENTRE 25 E 29,9
                        </td>
                        <td>
                            SOBREPESO
                        </td>
                    </tr>
                    <tr className={imc >= 30 && imc < 40 ? styles.tableRes : ''}>
                        <td>
                            ENTRE 30 E 39,9
                        </td>
                        <td>
                            OBESIDADE
                        </td>
                    </tr>
                    <tr className={imc >= 40 ? styles.tableRes : ''}>
                        <td>
                            MAIOR QUE 40
                        </td>
                        <td>
                            OBESIDADE GRAVE
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Calculadora;