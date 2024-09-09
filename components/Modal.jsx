"use client";

const Modal = ({ label, img, id }) => {
  return (
    <>
      <button className="btn" onClick={()=>document.getElementById(id).showModal()}>
        {label}
      </button>
      <dialog id={id} className="modal">
        <div className="modal-box">
          <img src={img} alt="" />
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
