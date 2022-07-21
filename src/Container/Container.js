import { Card,Accordion,Form,Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Container(){
    return(
        <div className="Container">            
            <div className='Carousel'>
                <Carousel fade>
                    <Carousel.Item>
                        <img className="d-block w-100 " src={require('./image/2.jpg')} alt=""></img>
                    </Carousel.Item> 

                    <Carousel.Item> 
                        <img className="d-block w-100 " src={require('./image/3.jpeg')} alt=""></img>
                    </Carousel.Item> 

                    <Carousel.Item> 
                        <img className="d-block w-100 " src={require('./image/4.jpeg')} alt=""></img>
                    </Carousel.Item>
                </Carousel>                
            </div>
            <div className='container text-center my-5'>
                <h3 className='font_size'>Apply for Import Export Code (IEC) Online | Same Day Processing | Anywhere from India</h3>
                <p className='my-3'>Register your import export business under Directorate General of Foreign Trade, Ministry of Commerce and Industry, Govt. of India. IEC expert of Online Legal India™ will file with the DGFT office on your behalf.</p>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='coloum col-lg-5 col-md-10 py-4 px-4 mx-auto my-5'>
                        <h4 className='text-lg-start text-md-center'>Import Export License (IEC) Registration Form</h4>
                        <p className='text-lg-start text-md-center'>Get FREE advice from IEC Experts - Get Started</p>
                        <Form>
                            <div className='mx-lg-2 mx-md-auto'>
                                <Form.Group className="my-3" controlId="formBasicEmail">
                                    <Form.Label className="text-lg-start abs">Name</Form.Label>
                                    <Form.Control type="email" placeholder="Your Name" />
                                </Form.Group>
                                <Form.Group className="my-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Your Email Address" />
                                </Form.Group>

                                <Form.Group className="my-3" controlId="formBasicEmail">
                                    <Form.Label>Mobile Number</Form.Label>
                                    <Form.Control type="email" placeholder="Your Phone Number (Without 0 or +91)" />
                                </Form.Group>
                                
                                <Form.Label>Select State </Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>State</option>
                                    <option value="1">Andhra Pradesh</option>
                                    <option value="2">Arunachal Pradesh</option>
                                    <option value="3">Assam</option>
                                    <option value="4">Bihar</option>
                                    <option value="5">Chhattisgarh</option>
                                    <option value="6">Delhi</option>
                                    <option value="7">Goa</option>
                                    <option value="8">Gujarat</option>
                                    <option value="9">Haryana</option>
                                    <option value="10">Himachal Pradesh</option>
                                    <option value="11">Jammu & Kashmir</option>
                                    <option value="12">Jharkhand</option>
                                    <option value="13">Karnataka</option>
                                    <option value="14">Kerala</option>
                                    <option value="15">Madhya Pradesh</option>
                                    <option value="16">Maharashtra</option>
                                    <option value="17">Manipur</option>
                                    <option value="18">Meghalaya</option>
                                    <option value="19">Mizoram</option>
                                    <option value="20">Nagaland</option>
                                    <option value="21">Odisha</option>
                                    <option value="22">Punjab</option>
                                    <option value="23">Rajasthan</option>
                                    <option value="24">Sikkim</option>
                                    <option value="25">surat</option>
                                    <option value="26">Tamil Nadu</option>
                                    <option value="27">Telangana</option>
                                    <option value="28">Tripura</option>
                                    <option value="29">Uttarakhand</option>
                                    <option value="30">Uttar Pradesh</option>
                                    <option value="31">West Bengal</option>
                                    <option value="32">Out Of India</option>
                                </Form.Select>
                            </div>
                            <button type="button" className="btn btn-outline-primary my-3 px-5 button">Get Started</button>
                        </Form>
                    </div>            
                    <div className='col-lg-6 col-md-10 px-4 py-1 mx-auto my-5'>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What is Import Export Code (IEC)? </Accordion.Header>
                                <Accordion.Body>
                                An Importer Exporter Code (IEC) is a key business identification number which is mandatory for export from India or Import to India. No export or import shall be made by any person without obtaining an IEC. For services exports however, IEC shall not be necessary except when the service provider is taking benefits under the Foreign Trade Policy. An individual or a business entity needs a 10 digit code to import or export products or services. This code is known as Import Export Code or IEC and it is issued by DGFT, Ministry of Commerce and Industries, Govt. of India.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>When is IEC code required?</Accordion.Header>
                                <Accordion.Body>
                                • Customs authorities need it to clear shipments during imports.<br/>
                                • The bank needs it to transfer the money when imports are made.<br/>
                                • Similarly during export the shipments the IEC is required.<br/>
                                • When exporter is supposed to receive money in foreign currency, IEC code is required to transfer the money to his account directly.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Fee</Accordion.Header>
                                <Accordion.Body>
                                    <table className='table table-bordered table-hover'>
                                        <thead>
                                        <tr>
                                            <th cope="col" colSpan='2'>IEC Registration Fees</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td cope='row'>Aayaat Niryaat Form Submit</td>
                                            <td>Zero</td>
                                        </tr>
                                        <tr>
                                            <td cope="row">Filing at DGFT</td>
                                            <td>Zero</td>
                                        </tr>
                                        <tr>
                                            <td cope="row">Professional Fees</td>
                                            <td colSpan="2">Rs. 1999</td>
                                        </tr>
                                        <tr>
                                            <td cope="row">Govt. Fees (Exclude)</td>
                                            <td colSpan="2">Rs. 500</td>
                                        </tr>
                                        <tr>
                                            <th cope="col" colSpan='2'>Rs. 1999 Only</th>
                                        </tr>
                                    </tbody>
                                    </table>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Who can apply for IEC Code?</Accordion.Header>
                                <Accordion.Body>
                                    The IEC code registration is applicable for all business registrations:
                                    <li>Proprietorship</li>
                                    <li>Partnership</li>
                                    <li>LLP</li>
                                    <li>Limited Company</li>
                                    <li>Trust</li>
                                    <li>HUF</li>
                                    <li>Society</li>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>IEC Certificate Sample</Accordion.Header>
                                <Accordion.Body>
                                    <img src={require('./image/8.jpg')} alt="" ></img>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>  
            </div>
            <div className=''>
                <a href="#" className="top">^</a>
            </div>
            <div className='container'>
                <div className='div my-5 mx-auto justify-content-evenly'>                    
                    <ul>
                        <div className='v1'>
                            <li>
                                <img src={require('./image/5.png')} alt=""></img>
                            </li>
                            <li>GOOGLE PARTNER</li>
                        </div>
                    </ul>
                    <ul>
                        <div className='v1'>
                            <li>
                                <img src={require('./image/6.png')} alt="" className='v4'></img>
                            </li>
                            <li>ISO 9001:2015 CERTIFIED</li>
                        </div>
                    </ul>
                    <ul>
                       <div className='v1'>
                        <li>  
                            <img src={require('./image/7.png')} alt=""></img>
                        </li>
                        <li>MSME REGISTERED</li>
                        </div>
                    </ul>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-8'>
                        <div class="client_box_area v1">
                            <div className="row">
                                <div class="col-lg-6 client_box_area_2">
                                    <h5>GOVT. RECOGNITION</h5>    
                                    <img src={require('./image/46.png')} alt="" ></img> 
                                </div>
                                <div class="col-lg-6 client_box_area_1">
                                    <h5>AUTHORIZED PARTNER</h5>    
                                    <div className='row mx-auto my-4'>
                                        <div class="col-sm-6 client_box_area_3">
                                            <img src={require('./image/47.png')} alt=""></img>
                                        </div>
                                        <div class="col-sm-6 client_box_area_4">
                                            <img src={require('./image/48.png')} alt="."></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </div>        
            <div className='container my-5'>
                <div className='h1'>
                    <h1 className='py-3'>Recent Issued IEC Licenses</h1>
                </div>            
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-12 text-center'>
                        <Card className='card1 mx-auto my-2' style={{ width: '17rem' }}>
                        <Card.Body>
                        <Card.Title>A S R Plastic</Card.Title>
                        <Card.Text>
                            <div className='div1 my-3'>
                                <div className='div2'>
                                    <p>IEC No.</p>
                                    <p>NEKPS8XXXX</p>
                                </div>
                                <div className='div2'>
                                    <p>Date of Issue</p>
                                    <p>18/10/2021</p>
                                </div>
                                <div className='div2'>
                                    <p>Place</p>
                                    <p>Karnataka</p>
                                </div>
                            </div>
                        </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 text-center'>
                        <Card className='card1 mx-auto my-2' style={{ width: '17rem' }}>
                        <Card.Body>
                        <Card.Title>Star Electronics</Card.Title>
                        <Card.Text>
                            <div className='div1 my-3'>
                                <div className='div2'>
                                    <p>IEC No.</p>
                                    <p>ANOPR5XXXX</p>
                                </div>
                                <div className='div2'>
                                    <p>Date of Issue</p>
                                    <p>20/10/2021</p>
                                </div>
                                <div className='div2'>
                                    <p>Place</p>
                                    <p>West Bengal</p>
                                </div>
                            </div>
                        </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 text-center'>
                        <Card className='card1 mx-auto my-2' style={{ width: '17rem' }}>
                        <Card.Body>
                        <Card.Title>Bismil Traders</Card.Title>
                        <Card.Text>
                            <div className='div1 my-3'>
                                <div className='div2'>
                                    <p>IEC No.</p>
                                    <p>AHGPA7XXXX</p>
                                </div>
                                <div className='div2'>
                                    <p>Date of Issue</p>
                                    <p>22/10/2021</p>
                                </div>
                                <div className='div2'>
                                    <p>Place</p>
                                    <p>West Bengal</p>
                                </div>
                            </div>
                        </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 text-center'>
                        <Card className='card1 mx-auto my-2' style={{ width: '17rem' }}>
                        <Card.Body>
                        <Card.Title>Sri Vari Traders</Card.Title>
                            <Card.Text>
                                <div className='div1 my-3'>
                                    <div className='div2'>
                                        <p>IEC No.</p>
                                        <p>AEGPV1XXXX</p>
                                    </div>
                                    <div className='div2'>
                                        <p>Date of Issue</p>
                                        <p>23/10/2021</p>
                                    </div>
                                    <div className='div2'>
                                        <p>Place</p>
                                        <p>Tamil Nadu</p>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                </div>                            
                <div className='col-5 mx-auto py-3'>
                    <button type="button" class="btn btn-secondary button">Apply IEC License</button>
                </div>
            </div>   
            <div className='container'> 
                <div className='h1 my-5'> 
                    <h2 className='pt-5'>Document Required</h2>
                </div>  
                <div className="row">
                    <div className="col-lg-4 col-md-6 my-3 text-center v2">
                        <img src={require('./image/9.png')}  alt=""></img>
                        <p>Two Colour Photographs of Promoters/Individuals/ Company/ Director</p>         
                    </div>
                    <div className="col-lg-4 col-md-6 my-3 text-center v2">
                        <img src={require('./image/10.png')}  alt=""></img>
                        <p>PAN Card of each Shareholders and directors</p>                
                    </div>
                    <div className="col-lg-4 col-md-6 my-3 text-center v2">
                        <img src={require('./image/11.png')}  alt=""></img>
                        <p>Identity Proof (Voter ID / Driving License/ Passport).</p>
                    </div>                    
                    <div className="col-lg-4 col-md-6 my-3 text-center v2">
                        <img src={require('./image/12.png')}  alt=""></img>
                        <p>Address Proof (Bank Statement / Electricity, Mobile, Telephone Bill)</p>         
                    </div>
                    <div className="col-lg-4 col-md-6 my-3 text-center v2">
                        <img src={require('./image/13.png')}  alt=""></img>
                        <p>Proof of Registered Office</p>                
                    </div>
                    <div className="col-lg-4 col-md-6 my-3 text-center v2">
                        <img src={require('./image/14.png')}  alt=""></img>
                        <p>Utility Bill as proof must be Latest</p>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-12 col-sm-12 mx-auto my-5 text-lg-start text-md-center text-sm-center'>
                        <h1>Advantages of IEC for Import Export Businesses</h1>
                        <img src={require('./image/15.jpg')} alt="" className='shadow-lg mt-5 bg-body rounded v1'></img>
                    </div>
                    <div className='col-lg-7 col-md-12 col-sm-12 mx-auto my-5'>                    
                        <div className='flex1 my-3'>
                            <div className='row d-lg-inline-flex'>
                                <div className='col-md-2 col-lg-2 col-sm-12 text-sm-center text-lg-start my-sm-3'>
                                    <img src={require('./image/16.jpg')} alt=""></img>
                                </div>
                                <div className='text-md-start col-md-10 col-lg-10 text-sm-center col-sm-12 text-lg-start'>
                                    <h6>International Market Reach</h6>
                                    <p>Import Export Code helps you in order to take your business to the international market. Not only that, it will increase your revenue as well as growth.</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex1 my-3'>
                            <div className='row'>
                                <div className='col-md-2 col-lg-2 col-sm-12 text-sm-center text-lg-start my-sm-3'>
                                    <img src={require('./image/17.jpg')} alt=""></img>
                                </div>
                                <div className='text-md-start col-md-10 col-lg-10 text-sm-center col-sm-12 text-lg-start'>
                                    <h6>Niryat Bandhu Scheme</h6>
                                    <p>The Niryat Bandhu scheme of DGFT Main Objective is to Help Entrepreneurs, Exporters, Importers, and students of this Subject to help learn and provide certification in Export & Import Management.</p>  
                                </div>
                            </div>
                        </div>
                        <div className='flex1 my-3'>
                            <div className='row'>
                                <div className='col-md-2 col-lg-2 col-sm-12 text-sm-center text-lg-start my-sm-3'>
                                    <img src={require('./image/18.jpg')} alt=""></img>
                                </div>
                                <div className='col-md-10 col-lg-10 text-sm-center col-sm-12 text-lg-start text-md-start'>
                                    <h6>Reduces the Risk of Illegal Transportation</h6>
                                    <p>IEC helps you to get rid of any illegal transportation or fraudulent imports and exports. IEC registration is a centralized registration which helps the officials to supervise and manage the transaction in a better manner which is undertaken as a part of cross border business.</p>
                                </div>    
                            </div>
                        </div>
                        <div className='flex1 my-3'>
                            <div className='row'>
                                <div className='col-md-2 col-lg-2 col-sm-12 text-sm-center text-lg-start my-sm-3'>
                                    <img src={require('./image/19.jpg')} alt=""></img>
                                </div>
                                <div className='text-md-start col-md-10 col-lg-10 text-sm-center col-sm-12 text-lg-start'>
                                    <h6>Easy Avail Benefit of Govt. Schemes</h6>
                                    <p>IEC Code offers great benefit for Import Export business. An IEC registered business entity would be qualified to avail benefits or subsidies declared by the Customs, Export Promotion Council and other several authorities. After filing Letter of Undertaking under GST, the exporters are not required to pay taxes to make exports. If the exports are made by payment of taxes, the exporter can claim refunds of the paid tax amount.</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex1 my-3'>
                            <div className='row'>
                                <div className='col-md-2 col-lg-2 col-sm-12 text-sm-center text-lg-start my-sm-3'>
                                    <img src={require('./image/20.jpg')} alt=""></img>
                                </div>
                                <div className='text-md-start col-md-10 col-lg-10 text-sm-center col-sm-12 text-lg-start'>
                                    <h6>Other Benefits</h6>
                                    <p>Companies that register for the Import Export Code could make the most of several other benefits offered by customs, the Export Promotion Council, and the Director General of Foreign Trade.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            <div className='container'>
                <div>
                    <div className='h1'>
                        <h2 className='py-3'>How we work?</h2>
                    </div>
                </div>                    
                <div className='row mx-auto'>  
                    <div className='flex3'>
                        <Card className='col-md-6 col-sm-12 card1 mx-auto my-3' style={{ width: '13rem' }}>
                        <Card.Body>
                            <Card.Text>
                            <div className='div1 px-2 py-2'>
                                <p>Fill the Form & Make the Payment</p>
                                <p className='text-center my-4'>⟶</p>
                            </div>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        <Card className='col-md-6 col-sm-12 card1 mx-auto my-3' style={{ width: '13rem' }}>
                        <Card.Body>
                            <Card.Text>
                            <div className='div1 px-2 py-2 text-center'>
                                <p>Get a call from IEC expert</p><br/>
                                <p className='text-center'>⟶</p>
                            </div>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        <Card className='col-md-6 col-sm-12 card1 mx-auto my-3' style={{ width: '13rem' }}>
                        <Card.Body>
                            <Card.Text>
                            <div className='div1 px-2 py-2 text-center'>
                                <p>Upload All the Necessary Documents</p><br/>
                                <p className='text-center'>⟶</p>
                            </div>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        <Card className='col-md-6 col-sm-12 card1 mx-auto my-3' style={{ width: '13rem' }}>
                        <Card.Body>
                            <Card.Text>
                            <div className='div1 px-2 py-2 text-center'>
                                <p>Dedicated IEC Expert will Apply for IEC License</p><br/>
                                <p className='text-center'>⟶</p>
                            </div>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        <Card className='col-md-12 col-sm-12 card1 mx-auto my-3' style={{ width: '13rem' }}>
                        <Card.Body>
                            <Card.Text>
                            <div className='div1 px-2 py-2 text-center'>
                                <p>Congratulations! Your Import Export Code will be Sent to You</p><br/>
                                <p className='text-center'>⟶</p>
                            </div>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-5 mx-auto'>
                    <button type="button" className="btn btn-secondary my-3 button">Apply IEC License</button>
                </div>
            </div>                        
            <div className='container shadow-lg bg-body rounded'>
                <div className='row'>
                    <h2 className='my-5 text-center'>Popular Services</h2>
                    <div className='col-lg-7 col-md-12 mx-auto'>
                        <div className='row Lable my-3'>
                            <div className='col-md-6 col-xs-6'>
                                <img src={require('./image/21.jpg')} alt=""></img>
                            </div>
                            <div className='col-md-6 col-xs-6'>
                                <img src={require('./image/22.jpg')} alt=""></img>
                            </div>
                        </div>
                        <div className='row Lable my-3'>
                            <div className='col-md-6 col-xs-6'>
                                <img src={require('./image/23.jpg')} alt=""></img>
                            </div>
                            <div className='col-md-6 col-xs-6'>
                                <img src={require('./image/24.jpg')} alt=""></img>
                            </div>
                        </div>
                        <div className='row Lable my-3'>
                            <div className='col-md-6 col-xs-6'>
                                <img src={require('./image/25.jpg')} alt=""></img>
                            </div>
                            <div className='col-md-6 col-xs-6'>
                                <img src={require('./image/26.jpg')} alt=""></img>
                            </div>
                        </div>
                        <div className='row Lable my-3'>
                            <div className='col-md-6 col-xs-6'>
                                <img src={require('./image/27.jpg')} alt=""></img>
                            </div>
                            <div className='col-md-6 col-xs-6'>
                                <img src={require('./image/28.jpg')} alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-12 mx-auto my-3 text-center'>
                        <div className='right-side'>
                            <h3>India's Leading Legal Service Provider</h3>
                            <img src={require('./image/29.png')} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='associated'>
                    <h1 className='my-5 text-center'>Associated with</h1>
                    <div className='Associated v3'>
                        <div className='img1 v3'>
                            <img src={require('./image/30.png')} alt=""></img>
                        </div>
                        <div className='img1 v3'>
                            <img src={require('./image/31.png')} alt=""></img>
                        </div>
                        <div className='img1 v3'>
                            <img src={require('./image/32.png')} alt=""></img>
                        </div>
                        <div className='img1 v3'>
                            <img src={require('./image/33.png')} alt=""></img>
                        </div>
                        <div className='img1 v3'>
                            <img src={require('./image/34.png')} alt=""></img>
                        </div>
                    </div>
                </div>                
                <div className='row'>
                    <div className='col-lg-7'>
                        <h2 className='text-center my-5'>Appreciated / Awarded by</h2>
                        <div className='awab_one_inner2 v3'>
                            <div class="awaboi_block awaboi_block1 v3">
                                <img src={require('./image/35.png')} alt=""></img>
                            </div>
                            <div class="awaboi_block awaboi_block1 v3">
                                <img src={require('./image/36.png')} alt=""></img>
                            </div>
                            <div class="awaboi_block awaboi_block1 v3">
                                <img src={require('./image/37.png')} alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5 mx-auto'>
                        <h2 className='text-center my-5'>Certified / Recognized by</h2>
                        <div className='awab_one_inner3'>
                            <div class="awaboi_block3 v3">
                                <img src={require('./image/38.png')} alt=""></img>
                            </div>
                            <div class="awaboi_block3 v3">
                                <img src={require('./image/39.png')} alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 my-5'>
                        <Accordion>
                            <Accordion.Item eventKey="0" className='mx-4 my-3'>
                                <Accordion.Header>What Is IEC Code?</Accordion.Header>
                                <Accordion.Body>
                                    It generally takes only 1 day to get your Import Export Code/IEC License. But in certain cases, it may take another day since it is based on final approval from DGFT. So it takes 1-5 working days to get your Import Export License registration certificate.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className='mx-4 my-3 '>
                                <Accordion.Header>How to Apply For IEC Code Online?</Accordion.Header>
                                <Accordion.Body>
                                    The application process for getting an IEC Code is very easy and convenient. Just follow the steps and complete the process of getting IEC Code: <br/>
                                    <ol type='1'>
                                        <li>Fill the form & make the payment – Registration Form</li>
                                        <li>Get in touch with our IEC experts</li>
                                        <li>Complete all the documents related compliance requirements</li>
                                        <li>Get your IEC Code in just a single day</li>
                                    </ol>
                                </Accordion.Body>
                            </Accordion.Item>                   
                            <Accordion.Item eventKey="2" className='mx-4 my-3'>
                                <Accordion.Header>What Documents Are Required To Get IEC Code Online?</Accordion.Header>
                                <Accordion.Body>
                                    <ol type='1'>
                                        <li>Photograph of the applicant</li>
                                        <li>Copy PAN Card</li>
                                        <li>Bank certificate/cancelled cheque</li>
                                        <li>A copy of Aadhar/Voter ID</li>
                                        <li>Address proof of the office premise</li>
                                    </ol>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className='mx-4 my-3'>
                                <Accordion.Header>What Is The Fee Applicable For IEC Code?</Accordion.Header>
                                <Accordion.Body>
                                    <ol type='1'>
                                        <li>Rs. 1999 (If your aadhaar is linked with your mobile or if you have DSC)</li>
                                        <li>If your mobile number is not linked with aadhaar then you must have DSC (Digital Signature Certificate) - Visit Here</li>
                                        <li>A nominal fee of Rs. 500 is paid to the government.</li>
                                    </ol>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4" className='mx-4 my-3'>
                                <Accordion.Header>How Many Days It Will Take To Get IEC Code Online?</Accordion.Header>
                                <Accordion.Body>
                                    It generally takes only 1 day to get your Import Export Code/IEC License. But in certain cases, it may take another day since it is based on final approval from DGFT. So it takes 1-5 working days to get your Import Export License registration certificate.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5" className='mx-4 my-3'>
                                <Accordion.Header>Can I Import Without IEC Code Registration?</Accordion.Header>
                                <Accordion.Body>
                                    No, you cannot import legally if you do not possess a valid Import Export Code Registration Certificate. As per current notification by DGFT (Directorate General of Foreign Trade), No export or import shall be made by any person without obtaining an IEC unless specifically exempted.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                   </div> 
                    <div className='col-lg-6 my-5'>
                        <Accordion>
                            <Accordion.Item eventKey="6" className='mx-4 my-3'>
                                <Accordion.Header>Is it mandatory to update IEC every year?</Accordion.Header>
                                <Accordion.Body>
                                    All IEC holders are now legally required to update and validate their IEC Details, even if there are no changes, from April to June once every year through Online system, failing which their IEC shall be de-activated and no import or export activity will be possible.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7" className='mx-4 my-3'>
                                <Accordion.Header>Can a person/entity have more than 1 IEC Code?</Accordion.Header>
                                <Accordion.Body>
                                    No. Only 1 IEC is issued to a person/entity. So if more than 1 IEC code is issued, then the same should be surrendered to the Regional Office for cancellation.
                                </Accordion.Body>
                            </Accordion.Item>                 
                            <Accordion.Item eventKey="8" className='mx-4 my-3'>
                                <Accordion.Header>Is there any tax levied based on IE Code?</Accordion.Header>
                                <Accordion.Body>
                                    IE Code is not a tax registration. However, certain customs duty may be levied depending on the product.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="9" className='mx-4 my-3'>
                                <Accordion.Header>Can individuals/proprietors obtain IE Code?</Accordion.Header>
                                <Accordion.Body>
                                    Anyone who is acting as sole proprietor of a business can obtain IE code Registration.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="10" className='mx-4 my-3'>
                                <Accordion.Header>What is the penalty levied for not registering for IE code?</Accordion.Header>
                                <Accordion.Body>
                                    As trade is not possible without a valid IEC, the penalty levied may be the pay duty depending upon the quantum of the goods.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="11" className='mx-4 my-3'>
                                <Accordion.Header>Does Custom department use IEC?</Accordion.Header>
                                <Accordion.Body>
                                    Yes, IEC number is reflected in all customs documents related to exports and imports.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>                
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Container;