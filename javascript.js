//FUNCTION TO DISPLAY THE PHONE INFO WHEN MORE INFO BUTTON IS CLICKED
function moreInfo() {
    document.getElementById("info-sec").style.display = "none";
    document.getElementById("more-Info").innerHTML = `
                            <h4>Huawei P Smart 2019</h4>
                          <table class="table"> 
                            <tbody>
                                <tr>
                                <th scope="row">Warranty</th>
                                <td>Limited (6 months)</td>
                                </tr>
                                <tr>
                                <th scope="row">Digital Camera Resolution</th>
                                <td>13 MP</td>
                                </tr>
                                <tr>
                                <th scope="row">Audio Jacks</th>
                                <td>3.5 mm stereo (TRS)</td>    
                                </tr>
                                 <tr>
                                <th scope="row">Screen Size</th>
                                <td>6.21 in</td>    
                                </tr>
                                 <tr>
                                <th scope="row">Is 4G enabled</th>
                                <td>Yes</td>   
                                </tr>
                                 <tr>
                                <th scope="row">Sim Card Type</th>
                                <td>Single Sim</td>     
                                </tr>
                                 <tr>
                                <th scope="row">Device Storage Capacity</th>
                                <td>64 GB</td>    
                                </tr>
                                 <tr>
                                <th scope="row">Component RAM Size</th>
                                <td>3 GB</td>    
                                </tr>
                                 <tr>
                                <th scope="row">Device Operating Systems</th>
                                <td>Android</td>        
                                </tr>
                                 <tr>
                                <th scope="row">Battery Capacity</th>
                                <td>3400 mAh</td>      
                                </tr>
                                 <tr>
                                <th scope="row">Has Wireless Charging Compatibility</th>
                                <td>Yes</td>               
                                </tr>
                            </tbody>
                            </table>
                                    `;
}

//FUNCTION TO DISPLAY THE FEATURES OF THE PHONE TO THE features-sec DIV
function features() {
    document.getElementById("info-sec").style.display = "none";
    document.getElementById("more-Info").style.display = "none";
    document.getElementById("price-sec").innerHTML = "";
    document.getElementById("features-sec").innerHTML = `
                                <ul>
                                    <li>Display: 6.21 Inch FullView Display With Dewdrop Design</li>
                                    <li>Processor: Octa-core Hisilicon Kirin 710 Processor with 3GB RAM</li>
                                    <li>ROM: 64GB ROM | SD Slot Up To 512GB</li>
                                    <li>Camera: Dual AI Rear 13MP+ 2MP| 16MP Selfie</li>
                                    <li>Sensor: Fingerprint Sensor | Face Unlock</li>
                                    <li>Network: 4G (LTE)</li>
                                    <li>Power: 3400mAh Battery |micro USB Connection</li>
                                    <li>SIM: Nano SIM (Single SIM Version)</li>
                                </ul>`;
}

//FUNCTION TO DISPLAY THE PRICE OF THE PHONE TO THE price-sec DIV
function priceDisplay() {
    document.getElementById("info-sec").style.display = "none";
    document.getElementById("more-Info").style.display = "none";
    document.getElementById("features-sec").innerHTML = "";
    document.getElementById("price-sec").innerHTML = `
                                <h3>FROM R 4,199</h3>
                                <p>FREE DELIVERY</p>
                                <p>eB41,990 - eB42,990 </p>
                                <p>Discovery Miles 41,990 - 42,990</p>
                                <p>On Credit: R390 - R400 / month</p>
                            `;
}

//FUNCTION TO DISPLAY THE PRICE OF THE PHONE TO THE price-sec DIV
function contactDisplay() {
    document.getElementById("info-sec").style.display = "none";
    document.getElementById("more-Info").style.display = "none";
    document.getElementById("features-sec").innerHTML = "";
    document.getElementById("price-sec").innerHTML = `
                                <h3>CONTACT US</h3>
                               <p>Product & Technical Support</p>
                                <p>South Africa Hotline</p>
                                <p>0860 861111</p>
                                <p>24 hours</p>
                            `;
}
