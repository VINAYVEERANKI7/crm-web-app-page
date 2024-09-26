import React from "react";
import Modal from "react-bootstrap/Modal";
import "./help-support.css";

const SuccessMessagemodal = ({
  successMessageShow,
  handleSuccessMessageClose,
}) => {
  return (
    <>
      <Modal
        centered
        size="lg"
        show={successMessageShow}
        onHide={handleSuccessMessageClose}
        contentClassName="rounded-4"
        dialogClassName="success-modal-container"
        backdrop={"static"}
        keyboard={false}
      >
        <Modal.Body>
          <div className="d-flex justify-content-center mt-3 py-md-4 py-2">
            <span className={`fs_24 fs_md_18 fw_500 text-center primary_color`}>
              Your feedback has been submitted successfully!
            </span>
          </div>

          <div className="d-flex justify-content-center mb-4 my-2">
            <button
              onClick={handleSuccessMessageClose}
              className="primary_bg text-white px-5 py-2 rounded-4 fs_22 fs_md_16 fw_500"
            >
              Okay
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SuccessMessagemodal;
