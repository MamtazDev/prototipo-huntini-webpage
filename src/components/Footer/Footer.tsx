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

              <p className="mt-4 max-w-xs text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>

              <ul className="mt-8 flex gap-6">
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <img src={facebook} alt="" />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <img src={instagram} alt="" />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <img src={linkdin} alt="" />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <img src={youtube} alt="" />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Dribbble</span>

                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              <div>
                <p className="font-medium text-gray-900">Links Úteis</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Anunciar </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Sobre nós </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">Blog</a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Contato </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900">Central</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75"> contato@huntini.com.br </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">(51) 00000.0000</a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Rua Luxor, 301 - Moinhos de Vento
                      Porto Alegre | RS - CEP 00000-000 </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900">Onde estamos</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Porto Alegre
                      São Paulo
                      Rio de Janeiro
                      Recife
                      Portugal
                      Itália
                    </a>
                  </li>


                </ul>
              </div>


            </div>
          </div>
          <hr />

          <div className='flex justify-between '>
            <p>Huntini Imobiliária 2022 - CRECI-SP J00.000  |   Todos os Direitos Reservados </p>
            <p>Politica de privacidade  |  Termos e Condições de uso</p>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer