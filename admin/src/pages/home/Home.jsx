
import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo"
import "./Home.css"
import {userData} from "../../data"
import WidgetLg from "../../components/widgetLg/WidgetLg"
import WidgetSm from "../../components/widgetSm/WidgetSm"
function Home() {
    return (
        <div className='home'>
            <FeaturedInfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        
        <div className="homeWidgets">
            <WidgetLg/>
            <WidgetSm/>
        </div>
        </div>
    )
}

export default Home
