import { Accordion, Button, Nav, Navbar } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            {/* navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-all">
                <div className="container">
                    <Navbar.Brand href='#' className='brand' />
                    <div className="offcanvas-body" id="offcanvasRight">
                        <div className="navbar-nav ms-auto">
                            <Nav.Link className='text-dark pe-3'>Our Services</Nav.Link>
                            <Nav.Link className='text-dark pe-3'>Why Us</Nav.Link>
                            <Nav.Link className='text-dark pe-3'>Testimonial</Nav.Link>
                            <Nav.Link className='text-dark pe-3'>FAQ</Nav.Link>
                            <Link to="/login">
                                <Button type="button" className="btn bg-btn">Register</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* header */}
            <div className="container-fluid bg-all">
                <div className="row">
                    <div className="col-md-6 mt-5 grid-rent">
                        <h2><b>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</b></h2>
                        <p className="pt-3">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga
                            terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                        <Link to="/filter">
                            <Button type="button" className="btn bg-btn">Mulai Sewa Mobil</Button>
                        </Link>
                    </div>
                    <div className="col-md-6 mt-5 grid-car">
                        <img alt="" src="/images-landingpage/img_car@2x.png" className="size-car" />
                    </div>
                </div>
            </div>

            {/* mbak mbak */}
            <div className="container">
                <div className="row">
                    <div className="col-sm grid-service grid-best">
                        <img alt="" src="/images-landingpage/img_service.png" className="size-service" />
                    </div>
                    <div className="col-sm grid-service">
                        <h3><b>Best Car Rental for any kind of trip in (Lokasimu)!</b></h3>
                        <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi
                            mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                        <div className="d-flex flex-row">
                            <div className="p-2">
                                <img src="/images-landingpage/Group53.png" alt="" />
                            </div>
                            <div className="p-2">Sewa Mobil Dengan Supir di Bali 12 Jam</div>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="p-2">
                                <img src="/images-landingpage/Group53.png" alt="" />
                            </div>
                            <div className="p-2">Sewa Mobil Lepas Kunci di Bali 24 Jam</div>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="p-2">
                                <img src="/images-landingpage/Group53.png" alt="" />
                            </div>
                            <div className="p-2">Sewa Mobil Jangka Panjang Bulanan</div>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="p-2">
                                <img src="/images-landingpage/Group53.png" alt="" />
                            </div>
                            <div className="p-2">Gratis Antar - Jemput Mobil di Bandara</div>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="p-2">
                                <img src="/images-landingpage/Group53.png" alt="" />
                            </div>
                            <div className="p-2">Layanan Airport Transfer / Drop In Out</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* why us */}
            <section className="grid-service">
                <div className="container mt-5">
                    <div className="faq">
                        <h3><b>Why Us?</b></h3>
                        <p>Mengapa harus pilih Binar Car Rental?</p>
                    </div>
                    <div className="why-text">
                        <div className="row">
                            <div className="col-md ">
                                <div className="card icon-promotion">
                                    <div className="card-body">
                                        <img alt="" src="/images-landingpage/icon_complete.png" />
                                        <h6 style={{ marginTop: '10px' }}><b>Mobil Lengkap</b></h6>
                                        <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md grid-service1">
                                <div className="card icon-promotion">
                                    <div className="card-body">
                                        <img alt="" src="/images-landingpage/icon_price.png" />
                                        <h6 style={{ marginTop: '10px' }}><b>Harga Murah</b></h6>
                                        <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md grid-service1">
                                <div className="card icon-promotion">
                                    <div className="card-body">
                                        <img alt="" src="/images-landingpage/icon_24hrs.png" />
                                        <h6 style={{ marginTop: '10px' }}><b>Layanan 24 Jam</b></h6>
                                        <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md grid-service1">
                                <div className="card icon-promotion">
                                    <div className="card-body">
                                        <img alt="" src="/images-landingpage/icon_professional.png" />
                                        <h6 style={{ marginTop: '10px' }}><b>Sopir Profesional</b></h6>
                                        <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* carousel */}
            <div className="container-fluid grid-service grid-service1">
                <div className="row">
                    <div className="col-sm text-center">
                        <h3><b>Testimonial</b></h3>
                        <p className="pt-2">Berbagai review positif dari para pelanggan kami</p>
                    </div>
                </div>
            </div>
            <div className="owl-carousel owl-theme">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card item">
                            <div className="card-body">
                                <div className="card-left">
                                    <img alt="" src="/images-landingpage/img_photo.png" />
                                </div>
                                <div className="card-right">
                                    <div className="faq-icon icon-pos faq">
                                        <img src="/images-landingpage/Star1.png" alt="" />
                                        <img src="/images-landingpage/Star1.png" alt="" />
                                        <img src="/images-landingpage/Star1.png" alt="" />
                                        <img src="/images-landingpage/Star1.png" alt="" />
                                        <img src="/images-landingpage/Star1.png" alt="" />
                                    </div>
                                    <p className="icon-pos">“Lorem ipsum dolor sit amet, consectetur furete elit, sed do eiusmod lorem ipsum dolor
                                        sit amet,
                                        consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod”</p>
                                    <p className="fw-bold">John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card item">
                            <div className="card-body">
                                <div className="card-left">
                                    <img alt="" src="/images-landingpage/img_photo_(1).png" />
                                </div>
                                <div className="card-right">
                                    <div className="icon-pos faq">
                                        <img src="/images-landingpage/Star1.png" alt="" />
                                        <img src="/images-landingpage/Star1.png" alt="" />
                                        <img src="/images-landingpage/Star1.png" alt="" />
                                        <img src="/images-landingpage/Star1.png" alt="" />
                                        <img src="/images-landingpage/Star1.png" alt="" />
                                    </div>
                                    <p className="icon-pos">“Lorem ipsum dolor sit amet, consectetur furete elit, sed do eiusmod lorem ipsum dolor
                                        sit amet,
                                        consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod”</p>
                                    <p className="fw-bold">John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card item">
                            <div className="card-body">
                                <div className="card-left">
                                    <img alt="" src="/images-landingpage/img_photo_(2).png" />
                                </div>
                                <div className="card-right">
                                    <div className=" icon-pos faq">
                                        <img src="/images-landingpage/Star1.png" alt="" />
                                        <img src="/images-landingpage/Star1.png" alt="" />
                                        <img src="/images-landingpage/Star1.png" alt="" />
                                        <img src="/images-landingpage/Star1.png" alt="" />
                                        <img src="/images-landingpage/Star1.png" alt="" />
                                    </div>
                                    <p className="icon-pos">“Lorem ipsum dolor sit amet, consectetur furete elit, sed do eiusmod lorem ipsum dolor
                                        sit amet,
                                        consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod”</p>
                                    <p className="fw-bold">John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* sewa mobil */}
            <div className="container grid-service">
                <div className="jumbotron grid-rentcar">
                    <div className="row">
                        <div className="col-sm text-center text-light">
                            <h1 className="pb-3 pt-5">Sewa Mobil di (Lokasimu) Sekarang</h1>
                            <p className="spacing-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et
                                dolore magna aliqua. </p>
                            <Link to="/filter">
                                <Button type="button" className="btn bg-btn mt-5 mb-5">Mulai Sewa Mobil</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="container grid-service grid-service1">
                <div className="row">
                    <div className="col-sm faq">
                        <h4><b>Frequently Asked Question</b></h4>
                        <p className="pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div className="col-sm">
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Apa saja syarat yang dibutuhkan?</Accordion.Header>
                                <Accordion.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                    richardson ad squid. 3
                                    wolf
                                    moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                    eiusmod.
                                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                    shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                    ea
                                    proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw
                                    denim
                                    aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
                                <Accordion.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                    richardson ad squid. 3
                                    wolf
                                    moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                    eiusmod.
                                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                    shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                    ea
                                    proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw
                                    denim
                                    aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Berapa hari sebelumnya sebaiknya booking sewa mobil?</Accordion.Header>
                                <Accordion.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                    richardson ad squid. 3
                                    wolf
                                    moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                    eiusmod.
                                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                    shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                    ea
                                    proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw
                                    denim
                                    aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Apakah Ada biaya antar-jemput?</Accordion.Header>
                                <Accordion.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                    richardson ad squid. 3
                                    wolf
                                    moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                    eiusmod.
                                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                    shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                    ea
                                    proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw
                                    denim
                                    aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Bagaimana jika terjadi kecelakaan</Accordion.Header>
                                <Accordion.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                    richardson ad squid. 3
                                    wolf
                                    moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                    eiusmod.
                                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                    shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                    ea
                                    proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw
                                    denim
                                    aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>

            {/* footer */}
            <div className="container mb-5 grid-service grid-service1">
                <div className="row">
                    <div className="col-sm">
                        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-334-808</p>
                    </div>
                    <div className="col-sm footer">
                        <h6>Our services</h6>
                        <h6 className="pt-2">Why Us</h6>
                        <h6 className="pt-2">Testimonial</h6>
                        <h6 className="pt-2">FAQ</h6>
                    </div>
                    <div className="col-sm footer">
                        <p>Connect with us</p>
                        <img alt="" src="/images-landingpage/icon_facebook.png" />
                        <img alt="" src="/images-landingpage/icon_instagram.png" className="ps-3" />
                        <img alt="" src="/images-landingpage/icon_twitter.png" className="ps-3" />
                        <img alt="" src="/images-landingpage/icon_mail.png" className="ps-3" />
                        <img alt="" src="/images-landingpage/icon_twitch.png" className="ps-3" />
                    </div>
                    <div className="col-sm grid-service1">
                        <p>Copyright Binar 2022</p>
                        <img alt="" src="/images-landingpage/Rectangle_74.png" className="pr-5" />
                    </div>
                </div>
            </div>

        </div>
    )
}
