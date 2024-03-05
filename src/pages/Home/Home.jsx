
import React from 'react';

import LandingPage1 from '../../components/LandingPage/LandingPage1';
// import Header1 from '../../components/Header/Header1';
import PastGiveawys1 from '../../components/PastGiveaways/PastGiveawys1';
import InstagramPreview1 from '../../components/InstagramPreview/InstagramPreview1';
import Faq1 from "../../components/Faq/Faq1";
import ChoosePlane from "../../components/PackagePrice/ChoosePlane";
import DiscountRegistrations1 from "../../components/DiscountRegistrations/DiscountRegistrations1"
import Footer1 from '../../components/Footer/Footer1';

const Home = () => {



  return (
<>
< div className='h-screen '>
{/* <Header1/> */}
<LandingPage1/>
<PastGiveawys1/>
<InstagramPreview1/>
<Faq1/>
<ChoosePlane/>
<DiscountRegistrations1/>
<Footer1/>

</div>
</>

  );
};

export default Home;
