import Image from 'next/image'
import {
  FooterContainer, 
  FooterItems,
  FooterItem, 
  AppDownload, 
  DownloadTitle,
  LinkStyle,
  CopyRight
} from './footer.styles';

const Footer =()=> {
 
  
  return(
    <>
      <FooterContainer>
        <FooterItems desktop margin="0 0 0 1.5rem">
          <p><a href="">Bantuan</a></p>
          <p><a href="">FAQ(Tanya Jawab)</a></p>
          <p><a href="">Panduan Belanja</a></p>
          <p><a href="">Panduan Pelapak</a></p>
          <p><a href="">Panduan Keamanan</a></p>
        </FooterItems>
        <FooterItems desktop>
          <LinkStyle as='a' href="">Tentang SunShop</LinkStyle>
          <LinkStyle as="a" href="">Aturan Penggunaan</LinkStyle>
          <LinkStyle as="a" href="">Kebijakan Privasi</LinkStyle>
          <LinkStyle as="a" href="">Karir di SunShop</LinkStyle>
          <LinkStyle as="a" href="">Vulnerability Reports</LinkStyle>
          <LinkStyle as="a" href="">Blog SunShop</LinkStyle>
          <LinkStyle as="a" href="">Affiliate Program</LinkStyle>
          <LinkStyle as="a" href="">FAQ (Tanya Jawab)</LinkStyle>
        </FooterItems>
          <FooterItems desktop>
          <LinkStyle as="a" href="">Cara Belanja</LinkStyle>
          <LinkStyle as="a" href="">Pembayaran</LinkStyle>
          <LinkStyle as="a" href="">Jaminan Aman</LinkStyle>
          <LinkStyle as="a" href="">Halaman Tag</LinkStyle>
          <LinkStyle as="a" href="">Jasa Pengadaan</LinkStyle>
          <LinkStyle as="a" href="">Promo</LinkStyle>
          <LinkStyle as="a" href="">BukaReview</LinkStyle>
        </FooterItems>
          <FooterItems desktop>
          <LinkStyle as="a" href="">Cara Berjualan</LinkStyle>
          <LinkStyle as="a" href="">Keuntungan Jualan</LinkStyle>
          <LinkStyle as="a" href="">Indeks Merek</LinkStyle>
        </FooterItems>      
        <FooterItems onmobile>
          <DownloadTitle >Download Aplikasinya</DownloadTitle>
          <AppDownload href="#">
            <Image src="/playstore.png" alt=""  width={200} height={70}/>
          </AppDownload>
          <AppDownload href="#" right>
            <Image src="/appstore.png" alt="" width={200} height={70}/>
          </AppDownload>
        </FooterItems>
      </FooterContainer>
      <FooterContainer>
        <FooterItems gray>
          <FooterItem>
              <CopyRight mobile>Copyright 2021 . Sunshop .</CopyRight>
              <CopyRight desktop>© 2019 Hak Cipta Terpelihara PT Sunshop.com</CopyRight>
          </FooterItem>
          <FooterItem second>
            <LinkStyle as="a" href="" second>Peta Situs</LinkStyle>
            <LinkStyle as="a" href="" second>Blog</LinkStyle>
            <LinkStyle as="a" href="" second>Liputan 6</LinkStyle>
          </FooterItem>
        </FooterItems>
      </FooterContainer>
      </>
    );
}
   
   
   

   
export default Footer;