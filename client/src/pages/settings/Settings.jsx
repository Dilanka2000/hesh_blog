import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
import TopBar from "../../components/topbar/TopBar"

export default function Settings() {
    return (
        <>
            <TopBar />
            <div className="settings">
                <div className="settingsWrapper">
                    <div className="settingsTitle">
                        <span className="settingsUpdateTitle">
                            Update Your Account
                        </span>
                        <span className="settingsDeleteTitle">
                            Delete Account
                        </span>
                    </div>
                    <form className="settingsForm">
                        <label>Profile Picture</label>
                        <div className="settingsPP">
                            <img
                                src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg"
                                alt=""
                            />
                            <label htmlFor="fileInput">
                                <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                            </label>
                            <input
                                type="file"
                                id="fileInput"
                                style={{ display: "none" }}
                            />
                        </div>
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="A. B. C. Santha Galahitiyawa"
                        />
                        <label>Username</label>
                        <input type="text" placeholder="santha" />
                        <label>Email</label>
                        <input type="email" placeholder="santha123@gmail.com" />
                        <label>Password</label>
                        <input type="password" />

                        <button className="settingsSubmit">Update</button>
                    </form>
                </div>
                <Sidebar />
            </div>
        </>
    );
}
