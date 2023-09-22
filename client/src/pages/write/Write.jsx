import TopBar from "../../components/topbar/TopBar";
import "./write.css";

export default function Write() {
    return (
        <>
            <TopBar />
            <div className="write">
                <img
                    className="writeImg"
                    src="https://curlytales.com/wp-content/uploads/2021/12/beach-1170x614.jpg"
                    alt=""
                />
                <form className="writeForm">
                    <div className="writeFormGroup">
                        <label htmlFor="fileInput">
                            <i className="writeIcon fa-solid fa-plus"></i>
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                        />
                        <input
                            type="text"
                            placeholder="Title"
                            className="writeInput"
                            autoFocus={true}
                        />
                    </div>
                    <div className="writeFormGroup">
                        <textarea
                            placeholder="Tell your story..."
                            type="text"
                            className="writeInput writeText"
                        ></textarea>
                    </div>
                    <button className="writeSubmit">Publish</button>
                </form>
            </div>
        </>
    );
}
