import styles from './Perfil.module.css';

// export default () => {
// export default function(){
const Perfil = ({nomeUsuario}) => {
    // const usuario = {
    //     nome: 'Leandro Silva',
    //     avatar: 'https://github.com/leandro-csilva.png'
    // }

    // const { endereco, nome } = props;

    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`http://github.com/${nomeUsuario}.png`} alt="" />
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </header>
    )
}

export default Perfil;