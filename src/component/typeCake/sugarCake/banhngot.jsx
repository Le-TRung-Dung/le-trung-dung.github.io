import './banhngot.css'
import { useSelector } from 'react-redux';
import Container from '../../container/container';


const SugarCake = () => {

	const products = useSelector((state)=>state.productSlice.product);
    

    return ( 
        <>
        <div className="bannerlogin">
     		<div className="banneroverlay">
     			<div className="bannertext">
     				<h2>Bánh ngọt</h2>
     			</div>
     		</div>
        </div>
        <div className='main-content'>
            <div className='grid'>
                <div className='wrapper'>
                    <div className='inner'>
                        <h1 className='text_center'>Bánh Ngọt</h1>
                    </div>
                    <Container />
                </div>
            </div>
        </div>
        </>
     );
}
 
export default SugarCake;