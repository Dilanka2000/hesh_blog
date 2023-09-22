import "./reset.css";
import recoveryImage from "../../../assets/background/forgot-password.svg";
import { useAuthStore } from "../../../store/store";
import { useEffect, useState } from "react";
import { generateOTP, verifyOTP } from "../../../helper/helper";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PageNotFound from "../../PageNotFound";

export default function Recovery() {

    const { username } = useAuthStore(state => state.auth);
    const [OTP, setOTP] = useState();
    const [errorOTP, setErrorOTP] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (username) {
            generateOTP(username).then((OTP) => {
                console.log(OTP);
                if (OTP) {
                    setErrorOTP("");
                    return toast.success("OTP has been send to your email!");
                };
                return toast.error("Generating OTP Error!");
            })
        }
    }, [username]);

    async function onSubmit(e) {
        e.preventDefault();

        let verifyPromise = await verifyOTP({ username, code: OTP });
        if (verifyPromise.status === 201) {
            toast.success("OTP Verify Siccessfully!");
            return navigate('/reset');
        }

        setErrorOTP(verifyPromise);
    }

    // Handler of resend OTP
    function resendOTP() {
        let resendPromise = generateOTP(username);
        toast.promise(resendPromise, {
            loading: "Sending...",
            success: <b>OTP has been send to your email!</b>,
            error: <b>Culd not Send OTP</b>
        });
    }

    if (!username) return <PageNotFound />;

    return (
        <div className="recovery">

            <Toaster position="top-center" reverseOrder={false}></Toaster>

            <img src={recoveryImage} alt="Recovery 4to" />
            <div className="recoveryContainer">
                <span className="recoveryTitle">Rcovery</span>
                <p className="recoveryDesc">Enter OTP to recover your password.</p>
                <form className="recoveryForm" onSubmit={onSubmit}>
                    <label>Enter OTP sent to your emaili address</label>
                    <input type="text" placeholder="Enter OTP Number" onChange={(e) => setOTP(e.target.value)} />
                    {errorOTP && (<p className="error">{errorOTP}</p>)}

                    <button className="recoveryButton" type="submit">Send</button>
                </form>
                <div className="recoveryResend">
                    <div>Resend OTP?</div>
                    <button onClick={resendOTP} className="resendButton">Resend</button>
                </div>
            </div>
        </div>
    );
}
