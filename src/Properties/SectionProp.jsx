import React from 'react'
import { Link } from 'react-router-dom'

function SectionProp() {
    return (
        <div>
            <div className="section properties">
                <div className="container">
                    <ul className="properties-filter">
                        <li>
                            <button className="is_active" data-filter="*" type="button">
                                Show All
                            </button>
                        </li>
                        <li>
                            <button data-filter=".adv" type="button">
                                Apartment
                            </button>
                        </li>
                        <li>
                            <button data-filter=".str" type="button">
                                Villa House
                            </button>
                        </li>
                        <li>
                            <button data-filter=".rac" type="button">
                                Penthouse
                            </button>
                        </li>
                    </ul>
                    <div className="row properties-box">
                        <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 adv">
                            <div className="item">
                                <img src="assets/images/property-01.jpg" alt="" />
                                <span className="category">Luxury Villa</span>
                                <h6>$2.264.000</h6>
                                <h4>
                                    18 Old Street Miami, OR 97219
                                </h4>
                                <ul>
                                    <li>
                                        Bedrooms: <span>8</span>
                                    </li>
                                    <li>
                                        Bathrooms: <span>8</span>
                                    </li>
                                    <li>
                                        Area: <span>545m2</span>
                                    </li>
                                    <li>
                                        Floor: <span>3</span>
                                    </li>
                                    <li>
                                        Parking: <span>6 spots</span>
                                    </li>
                                </ul>
                                <div className="main-button">
                                    <Link to="/details">Schedule a visit</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 str">
                            <div className="item">
                                <img src="assets/images/property-02.jpg" alt="" />
                                <span className="category">Luxury Villa</span>
                                <h6>$1.180.000</h6>
                                <h4>
                                    54 New Street Florida, OR 27001
                                </h4>
                                <ul>
                                    <li>
                                        Bedrooms: <span>6</span>
                                    </li>
                                    <li>
                                        Bathrooms: <span>5</span>
                                    </li>
                                    <li>
                                        Area: <span>450m2</span>
                                    </li>
                                    <li>
                                        Floor: <span>3</span>
                                    </li>
                                    <li>
                                        Parking: <span>8 spots</span>
                                    </li>
                                </ul>
                                <div className="main-button">
                                    <Link to="/details">Schedule a visit</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 adv rac">
                            <div className="item">
                                <img src="assets/images/property-03.jpg" alt="" />
                                <span className="category">Luxury Villa</span>
                                <h6>$1.460.000</h6>
                                <h4>
                                    26 Mid Street Portland, OR 38540
                                </h4>
                                <ul>
                                    <li>
                                        Bedrooms: <span>5</span>
                                    </li>
                                    <li>
                                        Bathrooms: <span>4</span>
                                    </li>
                                    <li>
                                        Area: <span>225m2</span>
                                    </li>
                                    <li>
                                        Floor: <span>3</span>
                                    </li>
                                    <li>
                                        Parking: <span>10 spots</span>
                                    </li>
                                </ul>
                                <div className="main-button">
                                    <Link to="/details">Schedule a visit</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 str">
                            <div className="item">
                                <img src="assets/images/property-04.jpg" alt="" />
                                <span className="category">Apartment</span>
                                <h6>$584.500</h6>
                                <h4>
                                    12 Hope Street Portland, OR 12650
                                </h4>
                                <ul>
                                    <li>
                                        Bedrooms: <span>4</span>
                                    </li>
                                    <li>
                                        Bathrooms: <span>3</span>
                                    </li>
                                    <li>
                                        Area: <span>125m2</span>
                                    </li>
                                    <li>
                                        Floor: <span>25th</span>
                                    </li>
                                    <li>
                                        Parking: <span>2 cars</span>
                                    </li>
                                </ul>
                                <div className="main-button">
                                    <Link to="/details">Schedule a visit</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac str">
                            <div className="item">
                                <img src="assets/images/property-05.jpg" alt="" />
                                <span className="category">Penthouse</span>
                                <h6>$925.600</h6>
                                <h4>
                                    34 Hope Street Portland, OR 42680
                                </h4>
                                <ul>
                                    <li>
                                        Bedrooms: <span>4</span>
                                    </li>
                                    <li>
                                        Bathrooms: <span>4</span>
                                    </li>
                                    <li>
                                        Area: <span>180m2</span>
                                    </li>
                                    <li>
                                        Floor: <span>38th</span>
                                    </li>
                                    <li>
                                        Parking: <span>2 cars</span>
                                    </li>
                                </ul>
                                <div className="main-button">
                                    <Link to="/details">Schedule a visit</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac adv">
                            <div className="item">
                                <img src="assets/images/property-06.jpg" alt="" />
                                <span className="category">Modern Condo</span>
                                <h6>$450.000</h6>
                                <h4>
                                    22 Hope Street Portland, OR 16540
                                </h4>
                                <ul>
                                    <li>
                                        Bedrooms: <span>3</span>
                                    </li>
                                    <li>
                                        Bathrooms: <span>2</span>
                                    </li>
                                    <li>
                                        Area: <span>165m2</span>
                                    </li>
                                    <li>
                                        Floor: <span>26th</span>
                                    </li>
                                    <li>
                                        Parking: <span>3 cars</span>
                                    </li>
                                </ul>
                                <div className="main-button">
                                    <Link to="/details">Schedule a visit</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac str">
                            <div className="item">
                                <img src="assets/images/property-03.jpg" alt="" />
                                <span className="category">Luxury Villa</span>
                                <h6>$980.000</h6>
                                <h4>
                                    14 Mid Street Miami, OR 36450
                                </h4>
                                <ul>
                                    <li>
                                        Bedrooms: <span>8</span>
                                    </li>
                                    <li>
                                        Bathrooms: <span>8</span>
                                    </li>
                                    <li>
                                        Area: <span>550m2</span>
                                    </li>
                                    <li>
                                        Floor: <span>3</span>
                                    </li>
                                    <li>
                                        Parking: <span>12 spots</span>
                                    </li>
                                </ul>
                                <div className="main-button">
                                    <Link to="/details">Schedule a visit</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac adv">
                            <div className="item">
                                <img src="assets/images/property-02.jpg" alt="" />
                                <span className="category">Luxury Villa</span>
                                <h6>$1.520.000</h6>
                                <h4>
                                    26 Old Street Miami, OR 12870
                                </h4>
                                <ul>
                                    <li>
                                        Bedrooms: <span>12</span>
                                    </li>
                                    <li>
                                        Bathrooms: <span>15</span>
                                    </li>
                                    <li>
                                        Area: <span>380m2</span>
                                    </li>
                                    <li>
                                        Floor: <span>3</span>
                                    </li>
                                    <li>
                                        Parking: <span>14 spots</span>
                                    </li>
                                </ul>
                                <div className="main-button">
                                    <Link to="/details">Schedule a visit</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac adv">
                            <div className="item">
                                <img src="assets/images/property-01.jpg" alt="" />
                                <span className="category">Luxury Villa</span>
                                <h6>$3.145.000</h6>
                                <h4>
                                    34 New Street Miami, OR 24650
                                </h4>
                                <ul>
                                    <li>
                                        Bedrooms: <span>10</span>
                                    </li>
                                    <li>
                                        Bathrooms: <span>12</span>
                                    </li>
                                    <li>
                                        Area: <span>860m2</span>
                                    </li>
                                    <li>
                                        Floor: <span>3</span>
                                    </li>
                                    <li>
                                        Parking: <span>10 spots</span>
                                    </li>
                                </ul>
                                <div className="main-button">
                                    <Link to="/details">Schedule a visit</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="pagination">
                                <li>
                                    <a href="#">1</a>
                                </li>
                                <li>
                                    <a className="is_active" href="#">
                                        2
                                    </a>
                                </li>
                                <li>
                                    <a href="#">3</a>
                                </li>
                                <li>
                                    <a href="#">&gt;&gt;</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SectionProp