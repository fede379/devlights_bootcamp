import { useState, forwardRef, useImperativeHandle } from "react";

const RegisterError = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");

  const toggle = () => setVisible(!visible);

  useImperativeHandle(ref, () => ({
    setError,
    toggle,
  }));

  return visible ? (
    <div className="RegisterFormError">
      <p className="RegisterFormErrorMessage">{error}</p>
      <button className="RegisterFormErrorButton" onClick={toggle}>
        X
      </button>
    </div>
  ) : null;
});

export default RegisterError;
