import { useState, useEffect } from "react";


const Formulario = (props) => {
    const [materiaM, setMateriaM]  = useState(0);
    const [materiaP, setMateriaP]  = useState(0);
    const [materiaC, setMateriaC]  = useState(0);
    const [nome, setNome] = useState('');

    //Ciclo de vida no react
    //mount - quando ele é montado
    //update - quando é atuaizado
    //amount - quando é desmontado

    useEffect(() => {
        console.log('O component iniciaou');

        return () => {
            console.log('O componente finalizou')
        }
    }, [props]);

    useEffect(() => {
        console.log('O stado mudou');
    }, [nome]);

    useEffect(() => {
        console.log('Mudou para o numero ' + materiaM)
    }, [materiaM, materiaP, materiaC])

    const alteraNome = (evento) => {
        // console.log(evento.target.value)
        setNome(nomeAnterior => {
            return evento.target.value
        })
    
    }

    const renderisaResultado = () => {
        const soma = materiaM + materiaP + materiaC;
        const media = soma / 3;
        //console.log(media)

        if (media >= 7 ){
            return (
                <p>Olá, {nome} você foi aprovado</p>
            )
        } else {
            return (
                <p>Olá, {nome} você foi reprovado</p>
            )
        }
    }
    return (
        
        <form action="">
            {[1, 2, 3, 4, 5, 21 ,25].map(item => <li key = {item}> {item}</li>)}
            <input type="text" placeholder="Seu nome" onChange={alteraNome}/>
            <input type="number" placeholder="Nota Matemática" onChange={evento => setMateriaM(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota Português" onChange={evento => setMateriaP(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota Ciências" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
           {renderisaResultado()}
        </form>

    )
}

export default Formulario;