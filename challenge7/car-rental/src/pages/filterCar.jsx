import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import { Navigate } from 'react-router-dom';

export default function FilterCar() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [user, setUser] = useState({});
    useEffect(() => {

        const fetchData = async () => {
            try {
                // Check status user login
                // 1. Get token from localStorage
                const token = localStorage.getItem("token");

                // 2. Check token validity from API
                const currentUserRequest = await axios.get(
                    "http://localhost:8087/auth/me",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const currentUserResponse = currentUserRequest.data;

                if (currentUserResponse.status) {
                    setUser(currentUserResponse.data.user);
                }
            } catch (err) {
                setIsLoggedIn(false);
            }
        };

        fetchData();
    }, []);

    const logout = () => {
        localStorage.removeItem("token");

        setIsLoggedIn(false);
        setUser({});
    };
    return isLoggedIn ? (
        <div>
            {/* navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-all">
                <div className="container">
                    <Navbar.Brand href='/' className='brand' />
                    <div className="offcanvas-body" id="offcanvasRight">
                        <div className="navbar-nav ms-auto">
                            <Nav.Link className='text-dark pe-3'>Our Services</Nav.Link>
                            <Nav.Link className='text-dark pe-3'>Why Us</Nav.Link>
                            <Nav.Link className='text-dark pe-3'>Testimonial</Nav.Link>
                            <Nav.Link className='text-dark pe-3'>FAQ</Nav.Link>
                            <Nav.Link className='text-dark ps-4'>hello kak! {user.name}</Nav.Link>
                            <Button variant="danger" type="button" className="btn" onClick={(e) => logout(e)}>Logout</Button>
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
                    </div>
                    <div className="col-md-6 mt-5 grid-car">
                        <img alt="" src="/images-landingpage/img_car@2x.png" className="size-car" />
                    </div>
                </div>
            </div>

            {/* filter */}
            <div className="container position-sewa">
                <div className="card border-sewa">
                    <div className="card-body shadow border-sewa">
                        <div className="row">
                            <div className="col-11">
                                <div className="row">
                                    <div className="col-md-12 col-lg-3 col-sm-12">
                                        Tipe Driver
                                        <div className="mb-3">
                                            <select id="inputDriverAvailability" className="form-select">
                                                <option hidden>Pilih Tipe Driver</option>
                                                <option value="true">Dengan Sopir</option>
                                                <option value="false">Tanpa Sopir</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-3 col-sm-12">
                                        Tanggal
                                        <div className="mb-3">
                                            <input type="date" className="form-control" id="inputDate"
                                                placeholder="pilih tanggal booking" />
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-3 col-sm-12">
                                        Waktu Jemput/Ambil
                                        <div className="mb-3">
                                            <select id="inputTime" className="form-select">
                                                <option hidden>Pilih Tipe Driver</option>
                                                <option value="08:00">08:00 WIB</option>
                                                <option value="09:00">09:00 WIB</option>
                                                <option value="10:00">10:00 WIB</option>
                                                <option value="11:00">11:00 WIB</option>
                                                <option value="12:00">12:00 WIB</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-3 col-sm-12">
                                        Waktu Jemput/Ambil
                                        <div className="mb-3">
                                            <select id="inputPassangers" className="form-select">
                                                <option hidden>Pilih Tipe Driver</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-1 col-sm-3 pos-form">
                                <button type="submit" className="btn bg-btn btn-sewa" id="load-btn">Cari Mobil</button>
                            </div>
                            <button id="clear-btn" className="bg-btn size-card">Clear</button>
                        </div>
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
    ) : (
        <Navigate to="/login" replace />
    );
}
