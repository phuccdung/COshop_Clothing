import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import './user.css'

function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">User Information</h1>
                <Link to="/newUser">
                <button className="userAddButton">New User</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img 
                            src="https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                            alt="" 
                            className="userShowImg" 
                        />
                        <div className="userShowTopTitle">
                            <div className="userShowUsername">Master Yasuo</div>
                            <div className="userShowUserTitle">Hasagi...</div>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Detail</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon"/>
                            <span className="userShowInfoTitle">yasuo123</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon"/>
                            <span className="userShowInfoTitle">08.09.2000</span>
                        </div>
                        <span className="userShowTitle">Contact Detail</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon"/>
                            <span className="userShowInfoTitle">+123456789</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon"/>
                            <span className="userShowInfoTitle">yasuo123@icloud.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon"/>
                            <span className="userShowInfoTitle">Viet Nam</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input 
                                    type="text"
                                    placeholder='yasuo123'
                                    className='userUpdateInput'
                                 />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full name</label>
                                <input 
                                    type="text"
                                    placeholder='Master Yasuo'
                                    className='userUpdateInput'
                                 />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input 
                                    type="text"
                                    placeholder='yasuo123@icloud.com'
                                    className='userUpdateInput'
                                 />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input 
                                    type="text"
                                    placeholder='+123456789'
                                    className='userUpdateInput'
                                 />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input 
                                    type="text"
                                    placeholder='Viet Nam'
                                    className='userUpdateInput'
                                 />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                     alt="" 
                                     className="userUpdateImg" />
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon"/>
                                    </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>    
        </div>   
    )
}

export default User
