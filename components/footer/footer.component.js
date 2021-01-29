 import {FooterContainer, FooterItem, AppButton} from './footer.styles';

 const Footer =()=> {
 	return(
 			<FooterContainer>
 				<FooterItem className='faq'>
 					<p><a href="">Bantuan</a></p>
 					<p><a href="">FAQ(Tanya Jawab)</a></p>
 					<p><a href="">Panduan Belanja</a></p>
 					<p><a href="">Panduan Pelapak</a></p>
 					<p><a href="">Panduan Keamanan</a></p>
 				</FooterItem>
 				<FooterItem className='sunshop'>
 					<p><a href="">Tentang SunShop</a></p>
 					<p><a href="">Aturan Penggunaan</a></p>
 					<p><a href="">Kebijakan Privasi</a></p>
 					<p><a href="">Karir di SunShop</a></p>
 					<p><a href="">Vulnerability Reports</a></p>
 					<p><a href="">Blog SunShop</a></p>
 					<p><a href="">Affiliate Program</a></p>
 					<p><a href="">FAQ (Tanya Jawab)</a></p>
 				</FooterItem>
 				<FooterItem className='pembeli'>
 					<p><a href="">Cara Belanja</a></p>
 					<p><a href="">Pembayaran</a></p>
 					<p><a href="">Jaminan Aman</a></p>
 					<p><a href="">Halaman Tag</a></p>
 					<p><a href="">Jasa Pengadaan</a></p>
 					<p><a href="">Promo</a></p>
 					<p><a href="">BukaReview</a></p>
 				</FooterItem>
 				<FooterItem className='pelapak'>
 					<p><a href="">Cara Berjualan</a></p>
 					<p><a href="">Keuntungan Jualan</a></p>
 					<p><a href="">Indeks Merek</a></p>
 				</FooterItem>
 				<FooterItem className='download'> 
				 <a href="">
						 <AppButton className="playstore">aaa</AppButton>
					</a>				
						 <AppButton href=""></AppButton>
				</FooterItem>
 			</FooterContainer>
 		);
}
    
    
    

    
export default Footer;