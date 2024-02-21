import React from "react";
import {
    BrowserRouter as Router,
    Routes,                             // import router and their components then only we can achieve a router 
    Route,
} from "react-router-dom";
import Homepage from "./Homepage";
import Aboutpage from "./Aboutpage";
import Animalspage from "./Animalspage";
import Birdspage from "./Birdspage";
import Contactus from "./Contact";
import nilgirilogo from './nilgiritharlogo.jpg';
import cheetahlogo from './cheetahlogo.jpg';
import elephantlogo from './elephantlogo.jpg';
import megamalailogo from './megamalailogo.png';

// Main page of this project

function Mainpage(){
    return(
        // Using Router anvigate one page to another 
        <Router>
            <Routes>
                        <Route
                            exact
                            path="/"  // path is defined as which page we want to navigate
                            element={<Homepage/>}  // Import a home page 
                        ></Route>

                        <Route
                            exact
                            path="/About"
                            element={
                            <Aboutpage   // Datas of Aboutpage 
                                reserveTitle="54TH TIGER RESERVE IN INDIA"
                                aboutTitle="About Megamalai Wildlife Sanctuary"
                                aboutDescription1="On 6 April 2021, the Government of India approved the creation of new Tiger Reserve in tamil nadu[4] and on 11 April 2021, Meghamalai Tiger Reserve was created.[5] Meghamalai Tiger Reserve will now comprise both the Srivilliputhur Grizzled Squirrel Wildlife Sanctuary & Tirunelveli Wildlife Sanctuary. With its new status as a Tiger reserve, Meghamalai Tiger Reserve has become the 5th Tiger Reserve of Tamil Nadu[6] and 51st Tiger Reserve in India.[7] It is to be noted that Meghamalai Tiger Reserve also acts as a contiguous patch of forest (earlier buffer zone) for the Periyar Wildlife Sanctuary, via the Grizzled Squirrel Wildlife Sanctuary. In addition, it is believed that Meghamalai Tiger Reserve will become the crucial corridor/contiguous forest stretch and aid in the movement of wildlife from Periyar Tiger Reserve, to Meghamalai Forests. Wildlife conservationists also hope that with the formation of the Meghamalai Tiger Reserve, greater protection will also be accorded the Vaigai river which originates in Meghamalai.[8] The Tiger reserve will also be known as the Meghamalai-Srivilliputhur Tiger Reserve"
                                aboutDescription2="For a long time, there has been a pending proposal with the Tamil Nadu Forest Department to establish the Megamalai Wildlife Sanctuary on 600 km2 of forest in the division. The suggested priority tasks in the sanctuary include: the control of poaching, the use of pesticides for the elimination of ganja (Cannabis sativa) and the cultivation as well as scientific management of watersheds. The Megamalai Wildlife Sanctuary can be an excellent buffer to the Periyar Tiger Reserve and Grizzled Squirrel Wildlife Sanctuary which can immensely strengthen the conservation in the southern Western Ghats – the range of hills south of the Palakkad Gap."
                                aboutDescription3="Then the high wavys group of estates were managed by Hindustan Unilever, the company started a non-profit organization called the Megamalai Wildlife and Environment Association. It worked with the forest department to protect the endangered species and safeguard the forest and its creatures; it did so by putting up signs promoting the preservation of nature and animals along the Ghat road of Meghamalai. Unfortunately, most of these signs were destroyed in an expansion project that took place on the Ghat road. The forest department has put new signs to replace the damaged ones."
                            />
                                }
                        >
                        </Route>


                         <Route
                            exact
                            path="/Animals"
                            element={
                                <Animalspage // Data of Animals page
                                pageTitle="Animals"
                                animal1Title="Nilgiri Thar"
                                animal1Logo={nilgirilogo}
                                animal1Alt="nilgirilogo"
                                animal1Subtitle="Tamilnadu State Animal"
                                animal1Description="The Nilgiri tahr is a stocky goat with short, coarse fur and a bristly mane. Males are larger than females and of darker colour when mature. Both sexes have curved horns, reaching up to 40 cm (16 in) for males and 30 cm (12 in) for females. Adult males weigh 80 to 100 kg (180 to 220 lb) and stand about 100 cm (39 in) tall at the shoulder. Adult males develop a light grey area on their backs, thus are called saddlebacks"
                                animal2Title="Cheetah"
                                animal2Logo={cheetahlogo}
                                animal2Alt="cheetahlogo"
                                animal2Subtitle="Fastest Animal"
                                animal2Description="The cheetah was first described in the late 18th century. Four subspecies are recognised today that are native to Africa and central Iran. An African subspecies was introduced to India in 2022. It is now distributed mainly in small, fragmented populations in northwestern, eastern and southern Africa and central Iran. It lives in a variety of habitats such as savannahs in the Serengeti, arid mountain ranges in the Sahara, and hilly desert terrain."
                                animal3Title="Elephant"
                                animal3Logo={elephantlogo}
                                animal3Alt="elephantlogo"
                                animal3Subtitle="Largest Animal"
                                animal3Description="Elephants are scattered throughout sub-Saharan Africa, South Asia, and Southeast Asia and are found in different habitats, including savannahs, forests, deserts, and marshes. They are herbivorous, and they stay near water when it is accessible. They are considered to be keystone species, due to their impact on their environments. Elephants have a fission–fusion society, in which multiple family groups come together to socialise. Females (cows) tend to live in family groups, which can consist of one female with her calves or several related females with offspring. The leader of a female group, usually the oldest cow, is known as the matriarch."
                            />                            
                                    }
                        >

                        </Route>
                        
                        
                         <Route
                            exact
                            path="/Birds"
                            element={
                                <Birdspage //Datas of Birds page
                                pageTitle="Birds in Meghamalai"
                                bird1Title="National Bird Of India"
                                bird1Description="The Indian peafowl (Pavo cristatus), also known as the common peafowl, and blue peafowl, is a peafowl species native to the Indian subcontinent. It has been introduced to many other countries. Male peafowl are referred to as peacocks, and female peafowl are referred to as peahens, although both sexes are often referred to colloquially as a 'peacock'."
                                bird2Title="State Bird Of Tamilnadu"
                                bird2Description="The emerald dove or common emerald dove (Chalcophaps indica), also called Asian emerald dove and grey-capped emerald dove, is a widespread resident breeding pigeon native to the tropical and subtropical parts of the Indian Subcontinent and Southeast Asia. The dove is also known by the names of green dove and green-winged pigeon. The common emerald dove is the state bird of the Indian state of Tamil Nadu."
                                bird3Title="Cormorants"
                                bird3Description="Cormorants and shags are medium-to-large birds, with body weight in the range of 0.35–5 kilograms (0.77–11.02 lb) and wing span of 60–100 centimetres (24–39 in). The majority of species have dark feathers. The bill is long, thin and hooked. Their feet have webbing between all four toes. All species are fish-eaters, catching the prey by diving from the surface. They are excellent divers, and under water they propel themselves with their feet with help from their wings; some cormorant species have been found to dive as deep as 45 metres (150 ft)."
                            /> 
                                    }
                        >

                        </Route>
                        
                        <Route
                            exact
                            path="/Contactus"
                            element={
                                <Contactus // Datas of contactus page
                                pageTitle="Contact Us"
                                logo={megamalailogo}
                                organizationName="Megamalai Tiger reserve"
                                division="Head Division"
                                location="Aundipatty (Taluk), Theni District"
                                addressLine1="Chinnamanur Road"
                                pincode="625515"
                                mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251738.46301960904!2d77.15561514954818!3d9.645665846691474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06e220ff8697f1%3A0xf576d7c048845f44!2sMegamalai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1707885555496!5m2!1sen!2sin"
                                thankYouMessage="Thank you"
                                visitAgainMessage="Visit Again !!!"
                            />                            
                                     }
                        >

                        </Route>
           </Routes>    
        </Router>
                    
    );
}
export default Mainpage;
