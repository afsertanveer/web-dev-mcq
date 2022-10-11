import { useState } from "react";
import Toast from "react-bootstrap/Toast";

function ShowToast({output}) {
      const [showA, setShowA] = useState(true);

      const toggleShowA = () => setShowA(!showA);
  return (
    <Toast show={showA} onClose={toggleShowA} delay={3000} autohide>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Toast</strong>
        <small>Question verdict</small>
      </Toast.Header>
      {output === "Correct Answer" ? (
        <h2 className="text-success fw-bolder text-center ">{output}</h2>
      ) : (
        <h2 className="text-danger fw-bolder text-center">{output}</h2>
      )}
    </Toast>
  );
}

export default ShowToast;
