import { useState } from "react";
import TitleComponent from "../SubComponents/TitleComponent";

function SignIn() {
    const [userInData, setUserInData] = useState({
        email: null,
        password: null
    });
    const [errorsMsgIn, setErrorsMsgIn] = useState({
        emailError: null,
        passwordError: null
    });

    const handleData = (e) => {
        if (e.target.name == 'email') {
            setUserInData({
                ...userInData,
                email: e.target.value
            });
            setErrorsMsgIn({
                ...errorsMsgIn,
                emailError: e.target.value.length == 0 ? "This Field Is Required" :
                    !e.target.value.match(/^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/) && "Invalid Email Address"
            });
        }
        else {
            setUserInData({
                ...userInData,
                password: e.target.value
            });
            setErrorsMsgIn({
                ...errorsMsgIn,
                passwordError: e.target.value.length == 0 ? "This Field Is Required" :
                    !e.target.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/) && "Weak Password"
            });
        }
    }

    const submitForm = (e) => {
        e.preventDefault();
    }

    return (
        <section className="border rounded p-5 mb-5 w-50 mx-auto" style={{ marginTop: "150px" }}>
            <TitleComponent title="Login" textColor="primary" margin="mb-5" />
            <form onSubmit={(e) => submitForm(e)}>
                <div className="mb-3 text-start">
                    <label htmlFor="inputEmail" className="form-label fw-bold fs-5">Email Address</label>
                    <input id="inputEmail" required type="email"
                        className={`form-control ${errorsMsgIn.emailError == null ? "form-control" : errorsMsgIn.emailError ? "is-invalid" : "is-valid"}`}
                        value={userInData.email}
                        name="email"
                        onChange={(e) => handleData(e)} />
                    <p className="form-text text-danger">{errorsMsgIn.emailError}</p>
                </div>
                <div className="text-start">
                    <label htmlFor="inputPassword" className="form-label fw-bold fs-5">Password</label>
                    <input id="inputPassword" required type="password"
                        className={`form-control ${errorsMsgIn.passwordError == null ? "form-control" : errorsMsgIn.passwordError ? "is-invalid" : "is-valid"}`}
                        value={userInData.password}
                        name="password"
                        onChange={(e) => handleData(e)} />
                    <p className="form-text text-danger">{errorsMsgIn.passwordError}</p>
                </div>
                <button type="submit" className="btn btn-primary mt-5 w-25">Login</button>
            </form>
        </section>
    );
}

export default SignIn;