import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/login.css"

const Register = () => {
  const signupNameRef = useRef();
  const signupPasswordRef = useRef();
  const signupEmailRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form__i mb-5" onSubmit={submitHandler}>
                <div className="mb-4 form__group">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="form-control"
                    required
                    ref={signupNameRef}
                  />
                </div>
                <div className="mb-4 form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    required
                    ref={signupEmailRef}
                  />
                </div>
                <div className="mb-4 form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    required
                    ref={signupPasswordRef}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Sign Up
                </button>
              </form>
              <Link to="/login">Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
