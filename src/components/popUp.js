import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faUmbrella,
  faBed,
  faHospital,
  faCalendarDays,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  Step,
  StepLabel,
  Stepper,
  Typography,
  Container,
} from "@material-ui/core";
import male from "../Images/male.png";
import "./popUp.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: 700,
    overflow: "auto",
    height: 700,
  },
};

function getSteps() {
  return [
    {
      id: 1,
      step: "Admission Request",
      date: "Dec 06 2021",
      time: "08:36 AM",
      user: "Ratha AP",
    },
    {
      id: 2,
      step: "Sent for IGL Approval",
      date: "Dec 06 2021",
      time: "09:00 AM",
      user: "Jim Chin",
    },
    {
      id: 3,
      step: "Received IGL Aproval",
      date: "Dec 06 2021",
      time: "11:23 AM",
      user: "Jim Chin",
    },
    {
      id: 4,
      step: "Requested Bed Confirmation",
      date: "Dec 06 2021",
      time: "11:38 AM",
      user: "Jim Chin",
    },
    { id: 5, step: "Admitted" },
    { id: 6, step: "Accepted" },
  ];
}
function Popup() {
  const [modalOpen, setModalOpen] = useState(false);
  const steps = getSteps();

  return (
    <div className="app">
      <button className="model-button" onClick={setModalOpen}>
        Open Modal
      </button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
      >
        <div>
          <div className="name-container">
            <div className="name-sub">
              <img className="male" src={male} alt="male" />
              <div>
                <p>ETHAN WONG</p>
                <p>Male, 60Years (Senior Citizen)</p>
              </div>
            </div>
            <div>
              <p>Resident</p>
              <p className="malaysia">Malaysia</p>
            </div>
          </div>
          <div className="cards-container">
            <div className="each-card">
              <div className="icon-cont">
                <p className="id-text">Patient ID</p>
                <FontAwesomeIcon className="icon" icon={faIdCard} />
              </div>
              <p className="id-para">5321344</p>
            </div>
            <div className="each-card">
              <div className="icon-cont">
                <p className="id-text">Visit ID</p>
                <FontAwesomeIcon className="icon" icon={faCalendarDays} />
              </div>
              <p className="id-para">2735678</p>
            </div>
            <div className="each-card">
              <div className="icon-cont">
                <p className="id-text">Ward</p>
                <FontAwesomeIcon className="icon" icon={faHospital} />
              </div>
              <p className="id-para">Ward 2A</p>
            </div>
            <div className="each-card">
              <div className="icon-cont">
                <p className="id-text">Bed</p>
                <FontAwesomeIcon className="icon" icon={faBed} />
              </div>
              <p className="id-para">Single Bed</p>
            </div>
            <div className="each-card">
              <div className="icon-cont">
                <p className="id-text">Payor</p>
                <FontAwesomeIcon className="icon" icon={faUmbrella} />
              </div>
              <p className="id-para">AIA BHD (INDIVIDUAL)</p>
            </div>
          </div>
          <div className="bottom-container">
            <div className="aj-container">
              <p className="aj-text">Admission Journey</p>
              <p className="time">
                Elapsed Time <span className="span-time">02:45</span>
              </p>
            </div>
            <Container maxWidth="sm">
              <Stepper activeStep={4} orientation="vertical">
                {steps.map((label, index) => (
                  <Step key={label}>
                    <StepLabel>
                      <Typography variant="h6">
                        <span className="step">{label.step}</span>
                        <span className="date-time">
                          {label.date} {label.time}
                        </span>
                        <br />
                        <FontAwesomeIcon className="user-icon" icon={faUser} />
                        <span className="user">{label.user}</span>
                      </Typography>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Container>
          </div>
        </div>

        <button className="model-button" onClick={() => setModalOpen(false)}>
          Close Modal
        </button>
      </Modal>
    </div>
  );
}

export default Popup;
