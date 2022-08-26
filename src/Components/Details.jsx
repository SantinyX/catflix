import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Footer } from '../Layouts/Footer';
import { goToHome } from '../Services/Redux/Slice'
import { BodyDetails, BtnStyle, InfoDetails, MainDetails } from './DetailsStyle';
import { HeaderDetails } from './HeaderDetails';

function Details() {

    const dispatch = useDispatch();
    const state = useSelector((state) => state.page.value2)
    const imgDetails = `https://image.tmdb.org/t/p/w500/`

    return (

        <BodyDetails>

            <HeaderDetails />
            <MainDetails>
                <div className='imgDetails'>
                    <img src={`${imgDetails}${state.data.poster_path}`} alt="" />
                </div>

                <InfoDetails>
                    <p><b>Sinopse: </b>{state.data.overview}</p>
                    <br />
                    <br />
                    <p><b>Data de lançamento: </b>{state.data.release_date}</p>
                    <br />
                    <br />
                    <p><b>Nota: </b>{state.data.vote_average}</p>
                    <br />
                    <br />
                    <Link to="/" onClick={() => dispatch(goToHome())}>Voltar para a Home</Link>
                </InfoDetails>
                
            </MainDetails>

            <Footer />

        </BodyDetails>
    )
}

export default Details;