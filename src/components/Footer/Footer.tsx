import logo from '../../assets/images/logo.svg';
import facebook from '../../assets/images/facebook.svg';
import instagram from '../../assets/images/instagram.svg';
import linkdin from '../../assets/images/linkdin.svg';
import youtube from '../../assets/images/youtube.svg';



const Footer = () => {
  return (
    <>
      <footer className="bg-[#EBE8E3]">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="">
                <img src={logo} alt="logo" />
              </div>

              <p className="mt-[35px] text-[12px] font-normal text-[#463D3C]   ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>

              <ul className="mt-[40px] flex gap-6">
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-sm font-normal text-[#463D3C] font-cabinetVariable mb-[8px] "
                  >
                    <img src={facebook} alt="" />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-sm font-normal text-[#463D3C] font-cabinetVariable mb-[8px] "
                  >
                    <img src={instagram} alt="" />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-sm font-normal text-[#463D3C] font-cabinetVariable mb-[8px] "
                  >
                    <img src={linkdin} alt="" />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-sm font-normal text-[#463D3C] font-cabinetVariable mb-[8px] "
                  >
                    <img src={youtube} alt="" />
                  </a>
                </li>


              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
              <div>
                <p className="font-normal text-2xl text-[#463D3C] font-cabinetVariable">Links Úteis</p>

                <ul className="mt-6 space-y-[8px] text-sm">
                  <li>
                    <a href="#" className="text-sm font-normal text-[#463D3C] font-cabinetVariable mb-[8px] "> Anunciar </a>
                  </li>

                  <li>
                    <a href="#" className="text-sm font-normal text-[#463D3C] font-cabinetVariable mb-[8px] "> Sobre nós </a>
                  </li>

                  <li>
                    <a href="#" className="text-sm font-normal text-[#463D3C] font-cabinetVariable mb-[8px] ">Blog</a>
                  </li>

                  <li>
                    <a href="#" className="text-sm font-normal text-[#463D3C] font-cabinetVariable mb-[8px] "> Contato </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-normal text-2xl text-[#463D3C] font-cabinetVariable">Central</p>

                <ul className="mt-6 space-y-[8px] text-sm">
                  <li>
                    <a href="#" className="text-sm font-normal text-[#463D3C] font-cabinetVariable mb-[8px] "> contato@huntini.com.br </a>
                  </li>

                  <li>
                    <a href="#" className="text-sm font-normal text-[#463D3C] font-cabinetVariable mb-[8px] ">(51) 00000.0000</a>
                  </li>

                  <li>
                    <a href="#" className="text-sm font-normal text-[#463D3C] font-cabinetVariable mb-[8px] "> Rua Luxor, 301 - Moinhos de Vento
                      Porto Alegre | RS - CEP 00000-000 </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-normal text-2xl text-[#463D3C] font-cabinetVariable">Onde estamos</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-sm font-normal text-[#463D3C] font-cabinetVariable mb-[8px] "> Porto Alegre <br />
                      São Paulo  <br />
                      Rio de Janeiro <br />
                      Recife <br />
                      Portugal <br />
                      Itália
                    </a>
                  </li>


                </ul>
              </div>


            </div>
          </div>
          <hr className=' text-[#463D3C] h-[2px] mt-[40px]  ' />
          <div className='flex justify-between items-center font-cabinetVariable '>
            <p className='text-[12px]'><span className=' font-bold  text-[#463D3C] text-[12px] '>Huntini Imobiliária 2022</span> - CRECI-SP J00.000  |   Todos os Direitos Reservados </p>
            <p className='font-bold text-[#463D3C] text-[12px]'>Politica de privacidade  |  Termos e Condições de uso</p>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer