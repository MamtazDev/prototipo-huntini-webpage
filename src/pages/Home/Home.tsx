import Advertise from "../../components/Advertise/Advertise"
import Banner from "../../components/Banner/Banner"
import IntegratedTechnology from "../../components/IntegratedTechnology/IntegratedTechnology"
import LuxuryProperties from "../../components/LuxuryProperties/LuxuryProperties"
import Property from "../../components/Property/Property"
// import RecentOpportunities from "../../components/RecentOpportunities/RecentOpportunities"

const Home = () => {
  return (
    <>
      <Banner />
      <LuxuryProperties />
      <IntegratedTechnology />
      <Property />
      {/* <RecentOpportunities /> */}
      <Advertise/>
    </>
  )
}

export default Home