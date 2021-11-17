import './widgetSm.css'
import { Visibility } from "@material-ui/icons";
function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className='widgetSmTitle'>New Member</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/4316425/pexels-photo-4316425.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Master Yasuo</span>
                        <span className="widgetSmUserTitle">Hasagi....</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/4316425/pexels-photo-4316425.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Master Yasuo</span>
                        <span className="widgetSmUserTitle">Hasagi....</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/4316425/pexels-photo-4316425.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Master Yasuo</span>
                        <span className="widgetSmUserTitle">Hasagi....</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/4316425/pexels-photo-4316425.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Master Yasuo</span>
                        <span className="widgetSmUserTitle">Hasagi....</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSm
