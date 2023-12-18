import { useNavigate } from 'react-router-dom';

//styles
import "./Footer.css"

const Footer = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/termos');
    };

    const handleClick2 = () => {
        navigate('/politicas')
    }

    return (
        <footer>
            <div className="footer">
                <div>
                    <p className="text1">Os resultados referentes ao serviço foram avaliados e comprovados por nossos alunos.<br /> Não garantimos os resultados iguais para todos, estes variam de pessoa para pessoa dependendo de diversos fatores individuais. As informações fornecidas destina-se ao seu conhecimento geral e não garantimos um resultado específico, e nem um valor exato de lucro, todo resultado será de inteira responsabilidade do cliente que faz às apostas.</p>
                    <p className="text2"> <a onClick={handleClick}>Termos de Uso</a> | <a onClick={handleClick2}>Políticas de Privacidade</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer