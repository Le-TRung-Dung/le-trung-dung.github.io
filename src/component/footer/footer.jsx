import './footer.css'
import logochonie from '../../image/logochonie.png';
import {  GrFacebook } from 'react-icons/gr';
import { BsInstagram , BsFillTelephoneFill} from 'react-icons/bs';
import { IoLogoYoutube } from 'react-icons/io';
import { AiFillHome } from 'react-icons/ai';
import { CgMail } from 'react-icons/cg';
import { useTranslation ,  withTranslation } from 'react-i18next';
import { Link } from "react-router-dom";


const Footer = () => {
	const { t, i18n } = useTranslation();


    return ( 
        <div className="footer-chonie">
     		<div className="footer-chonie-overlay">
     		     <div className="grid">
     		     	<div className="footer-chonie-total">
     			        <div className="footer-chonie-item">
     				        <div className="footer-img">
     					        <img src={logochonie} />
     				        </div>
     				        <div className="footer-chonie-text">
                                <AiFillHome /> 
     					        <p>Số 56 Đặng Thai Mai, Q. Tây Hồ, TP. Hà Nội</p>
     				        </div>
     				        <div className="footer-chonie-text">
							    <BsFillTelephoneFill />
     				     	    <p>0382494528</p>
     				        </div>
     				        <div className="footer-chonie-text">
     				     	    <CgMail />
     				     	    <p> Letrungdung1462001@gmail.com</p>
     				        </div>
     			        </div>
     			        <div className="footer-chonie-terms">
     			     	    <div className="footer-chonie-terms-item">
     			     		     <h4>{t('Policy')}</h4>
     			     	    </div>
     			     	    <div className="footer-chonie-terms-item1">
     			     		     <Link to='/regulations'>
     			     			    {t("General policies and regulations")}
     			     		     </Link>
     			     	    </div>
     			     	    <div className="footer-chonie-terms-item1">
     			     		     <Link to='#'>
     			     			    {t("Policy transaction, payment")}
     			     		     </Link>
     			     	    </div>
     			     	    <div className="footer-chonie-terms-item1">
     			     		     <Link to='#'>
     			     			    {t("Return policy")}
     			     		     </Link>
     			     	    </div>
     			     	    <div className="footer-chonie-terms-item1">
     			     		     <Link to='#'>
     			     			    {t("Privacy Policy")}
     			     		     </Link>
     			     	    </div>
     			     	    <div className="footer-chonie-terms-item1">
     			     		     <Link to='#'>
     			     			     {t("Shipping policy")}
     			     		     </Link>
     			     	    </div>
     			        </div>
     			        <div className="footer-chonie-terms">
     			        	<div className="footer-chonie-terms-item">
     			     		     <h4>CHONIE.CAKE</h4>
     			     	    </div>
     			     	    <div className="footer-chonie-terms-item1">
     			     			<p>Tên đơn vị: Công ty Cổ phần Bánh ngọt Anh Hòa Số giấy chứng nhận đăng ký kinh doanh: 0104802706 Ngày cấp: 21/07/2010 Nơi cấp: Sở Kế hoạch và Đầu tư Tp. Hà Nội</p>
     			     	    </div>
     			     	    <div className="footer-chonie-terms-social">
     			     	    	<Link to='#'>
                                    <GrFacebook/>
     			     	    	</Link>
     			     	    	<Link to='#'>
     			     	    		<BsInstagram />
     			     	    	</Link>
     			     	    	<Link to='https://www.youtube.com/@mizu2001'>
     			     	    		<IoLogoYoutube />
     			     	    	</Link>
     			     	    </div>
     			     	</div>
     		        </div>
     		     </div>
     	     </div>
        </div>
     );
}
 
export default Footer;