import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { goToHome } from '../Services/Redux/Slice'
import { HeaderDetails } from './HeaderDetails';

function Details() {

    const dispatch = useDispatch();
    const state = useSelector((state) => state.page.value2);

    return (
        <div className='MainContainer'>

            <HeaderDetails />

            <Link to="/" onClick={() => dispatch(goToHome())}>Voltar para a Home</Link>
        </div>
    )
}

export default Details;