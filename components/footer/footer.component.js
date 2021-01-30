 import {FooterContainer, FooterItem, AppDownload} from './footer.styles';

 const Footer =()=> {
 	return(
 			<FooterContainer>
			 <FooterItem>
				 <h6>Download Aplikasinya</h6>
				 <AppDownload href="#">
					 <img src="/playstore.png" alt=""/>
				 </AppDownload>
				 <AppDownload href="#" right>
					 <img src="appstore.png" alt=""/>
				 </AppDownload>
			 </FooterItem>
			 <FooterItem gray>
			 	<div>
				 <p>Copyright 2021 . Sunshop . </p>
				</div>
				 <div>
					 <a href="">Peta Situs</a>
					 <a href="">Blog</a>
					 <a href="">Liputan 6</a>
				 </div>
			 </FooterItem>
 				{/* <FooterItem className='faq'>
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
				</FooterItem> */}
 			</FooterContainer>
 		);
}
    
    
    

    
export default Footer;