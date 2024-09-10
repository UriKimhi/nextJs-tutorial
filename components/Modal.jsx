"use client";
import Link from "next/link";

const Modal = ({ label, img, id, idDrink }) => {
  return (
    <>
      <button className="btn" onClick={() => document.getElementById(id).showModal()}>
        {label}
      </button>
      <dialog id={id} className="modal">
        <div className="modal-box">
          <img src={img} alt="" />
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className="modal-action">
            <form method="dialog" className=" flex flex-row justify-center items-center gap-8 max-w-50 w-full">
              <button className="btn">Close</button>
              <Link href={`drinks/${idDrink}`} className="btn btn-ghost text-xl">
                more details
              </Link>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
