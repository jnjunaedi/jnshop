import { Send } from 'lucide-react';

function Footer() {
  return (
    <footer className="mt-10">
      <div className="w-full py-3 bg-blue-600 flex flex-col gap-3 sm:flex-row sm:gap-0 justify-between items-center px-2">
        <div className="flex  items-center gap-2">
          <span>
            <Send className="text-white" />
          </span>
          <span className="text-white text-xs">Kirim ke Email kami</span>
        </div>
        <div>
          <input type="email" name="" id="" className="me-2 rounded-md py-1.5" />
          <button className="py-1.5 px-2 bg-white rounded-md text-sm">Kirim</button>
        </div>
      </div>
      <div className=" mx-3 mt-5 lg:flex lg:justify-around lg:items-center">
        <div>
          <h2 className="text-xl font-bold">Jn Shop</h2>
          <div className="text-sm text-zinc-700">
            <p className="mt-3"> Hubungi kami (+62) 85834337651</p>
            <p className="mt-1"> E-mail: jn@shop.com</p>
            <p className="mt-1">Jl. Jenderal Sudirman No. 17, Jakarta Pusat, DKI Jakarta 10220, Indonesia</p>
          </div>
        </div>
        <div className="lg:flex">
          <div className="mt-10 me-20">
            <h3 className="font-bold text-lg">Temukan Cepat</h3>
            <ul className="text-sm text-zinc-700 mt-3 flex flex-col gap-2">
              <li>
                <a href="#">Kamera &amp; Fotografi</a>
              </li>
              <li>
                <a href="#">Laptop &amp; Komputer</a>
              </li>
              <li>
                <a href="#">TV &amp; Audio</a>
              </li>
              <li>
                <a href="#">Kesehatan &amp; Kecantikan</a>
              </li>
              <li>
                <a href="#">Bayi &amp; Mainan</a>
              </li>
              <li>
                <a href="#">Kebutuhan Harian &amp; Hewan Peliharaan</a>
              </li>
              <li>
                <a href="#">Rumah &amp; Gaya Hidup</a>
              </li>
              <li>
                <a href="#">Fesyen &amp; Aksesori Wanita</a>
              </li>
              <li>
                <a href="#">Fesyen &amp; Aksesori Pria</a>
              </li>
              <li>
                <a href="#">Fesyen &amp; Aksesori Anak</a>
              </li>
              <li>
                <a href="#">Olahraga &amp; Gaya Hidup</a>
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <h3 className="font-bold text-lg">Layanan Pelanggan</h3>
            <ul className="text-sm text-zinc-700 mt-3 flex flex-col gap-2">
              <li>
                <a href="#">Akun Saya</a>
              </li>
              <li>
                <a href="#">Lacak Pesanan</a>
              </li>
              <li>
                <a href="#">Daftar Keinginan</a>
              </li>
              <li>
                <a href="#">Layanan Pelanggan</a>
              </li>
              <li>
                <a href="#">Pengembalian / Penukaran</a>
              </li>
              <li>
                <a href="#">Tanya Jawab (FAQ)</a>
              </li>
              <li>
                <a href="#">Dukungan Produk</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="mt-5" />
      <div className="text-center mt-5">
        <p className="text-sm text-zinc-600">
          Dibuat oleh {` `}
          <a href="https://instagram.com/jnjunaedi" className="underline text-blue-600">
            Jujun Junaedi
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
