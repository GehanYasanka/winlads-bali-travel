import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Card from "../../components/SubCard/SubCard";
// import FreeEntryCard from "../FreeEntry/FreeEntryCard";

const ChoosePlane = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F7F7F7]">
      <motion.p
        initial={{ opacity: 0, y: "-40%" }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ duration: 0.5, delay: 0 }}
        className="my-3 text-center text-base sm:text-lg 2xl:text-xl special:text-3xl font-bold xl:tracking-[18px] sm:tracking-[16px] tracking-[12px] uppercase"
      >
        {" "}
      
      </motion.p>
      <div className="w-full bg-chose-plan">
        <div className="flex flex-col items-center w-full px-1 md:px-4 py-10 lg:py-16 gap-4">
          <div className="grid xl:grid-cols-5 grid-cols-2 md:grid-cols-2 gap-4 px-3 xs:px-32 md:px-0">
            <Card
              title="Starter Tier"
              // titleColor="white"
              title2="1"
              titleColor2="black"
              // price="$ 9.99"
              desc1="$9.99"
              // desc2="Referral Commission: 2.5%"
              desc2="Partner Store Discounts: 5%"
              desc3=""
              desc10="01"
              // descColor="white"
              buttonColor="#0082E1"
              arrowColor="[#01819D]"
              buttonTextColor={"white"}
              btnword="SIGN UP"
              bgColorFrom="#0C99FF"
              bgColorTo="#FFFFFF"
              titleColor="black"
              planId={'657c40018406aeb95f876ca2'}
              oneOffId={'65b3a40cb07113a8b553f54f'}
              // btnword="Get started now"
            />
            <Card
              bgColorFrom="#FA4601"
              bgColorTo="#FFFFFF"
              title="Boomer Tier"
              titleColor="black"
              // titleColor="white"
              title2="3"
              titleColor2="black"
              // price="$ 19.99"
              desc1="$19.99"
              // desc2="Referral Commission: 5%"
              desc2="Referral Commission: 5%"
              desc3="Partner Store Discounts: 5%"
              desc4="Be Eligible to Apply Winlad Referral Cards"
              desc5="Access to Winlad Store Cash Back program"
              desc10="03"
              // descColor="white"
              buttonColor="#CF3A00"
              arrowColor="white"
              buttonTextColor="white"
              btnword="SIGN UP"
              planId={'657c757b8406aeb95f876ca7'}
            />
            <Card
              bgColorFrom="#01C8D8"
              bgColorTo="#FFFFFF"
              title="Platinum Tier"
              titleColor="black"
              // titleColor="[#01819D]"
              title2="10"
              titleColor2="black"
              // price="$ 49.99"
              desc1="$49.99"
              desc2="Referral Commission: 10%"
              desc3="Partner Store Discounts: 10%"
              desc4="Be Eligible to Apply for Winlad PLATINUM Card"
              desc5="Access to Winlad Store Cash Back program"
              desc6="Access to Winlads Public Events"
              desc7="Access to Upcoming Winlad Apps"
              desc10="10"
              // descColor="[#01819D]"
              buttonColor="#007D87"
              arrowColor="white"
              mostPopular={true}
              buttonTextColor="white"
              btnword="SIGN UP"
              planId={'657c766e8406aeb95f876cac'}
            />
            <Card
              bgColorFrom="#FBBB01"
              bgColorTo="#FFFFFF"
              title="Gold Tier"
              titleColor="black"
              // titleColor="white"
              title2="25 ENTRIES"
              titleColor2="black"
              // price="$ 100"
              desc1="$100"
              // desc2="Premium Tier"
              desc2="Referral Commission: 25%"
              desc3="Partner Store Discounts: 10%"
              desc4="Be Eligible to Apply for Winlad GOLD Card"
              desc5="Access to Winlad Store Cash Back program"
              desc6="Access to Winlads Urgency Program"
              desc7="Access to Winlads Public Events"
              desc8="Access to upcoming Winlad Apps & Tools"
              desc10="25"
              // descColor="white"
              buttonColor="#000000"
              arrowColor="[#01819D]"
              buttonTextColor={"white"}
              btnword="SIGN UP"
              planId={'657c775f8406aeb95f876cb1'}
            />
            <div className="hidden md:block">
            <Card
              bgColorFrom="#23282E"
              bgColorTo="#FFFFFF"
              title="Black Tier"
              titleColor="white"
              // titleColor="white"
              title2="150 FREE ENTRIES"
              titleColor2="#FFF"
              // price="$ 500"
              desc1="$500"
              desc2="Referral Commission: 50%"
              desc3="Customised Partner Store discount rates ranging up to 20%"
              desc4="Be Eligible to Apply for Winlad BLACK Card"
              desc5="Access to Winlad Store Cash Back program"
              desc6="Exclusive perks and privileges tailored for Black Tier members"
              desc7="Winlads OG member Eligibility after 6 months ( Which Gives an opportunity to make decisions with Voting Power in Winlads DAO system)"
              desc8="Access to Winlads Urgency Program"
              desc9="Access to Winlads limited and Public Events - Access to Winlads apps and tools"
              desc10="150"
              // descColor="white"
              buttonColor="#475A79"
              arrowColor="[#01819D]"
              buttonTextColor={"white"}
              btnword="SIGN UP"
              classNames={""}
              planId={'657c77b68406aeb95f876cb6'}
            />
            </div>
           

            {/* <div className="w-full xl:hidden md:flex  hidden">
              <FreeEntryCard />
            </div> */}
          </div>
          <div className="md:hidden grid grid-cols-1 pt-2 px-3">
          <Card
              bgColorFrom="#23282E"
              bgColorTo="#FFFFFF"
              title="Black Tier"
              titleColor="white"
              // titleColor="white"
              title2="150 FREE ENTRIES"
              titleColor2="#FFF"
              // price="$ 500"
              desc1="$500"
              desc2="Referral Commission: 50%"
              desc3="Customised Partner Store discount rates ranging up to 20%"
              desc4="Be Eligible to Apply for Winlad BLACK Card"
              desc5="Access to Winlad Store Cash Back program"
              desc6="Exclusive perks and privileges tailored for Black Tier members"
              desc7="Winlads OG member Eligibility after 6 months ( Which Gives an opportunity to make decisions with Voting Power in Winlads DAO system)"
              desc8="Access to Winlads Urgency Program"
              desc9="Access to Winlads limited and Public Events - Access to Winlads apps and tools"
              desc10="150"
              // descColor="white"
              buttonColor="#475A79"
              arrowColor="[#01819D]"
              buttonTextColor={"white"}
              btnword="SIGN UP"
              classNames={""}
              planId={'657c77b68406aeb95f876cb6'}
            />
          </div>
          {/* <div className="px-3 xs:px-32 md:px-0 flex md:hidden justify-center mt-4 xl:flex ">
          <FreeEntryCard />
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default ChoosePlane;
