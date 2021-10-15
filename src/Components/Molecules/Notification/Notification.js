import Title from "Components/Atoms/Title/Title";
import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Notification = () => {
  const [show, setshow] = useState(false);
  const notif = (time) => {
    setshow(true);
    setTimeout(() => {
      setshow(false);
    }, time);
  };

  const notificationView = (content) => (
    <div
      className={`height-100px width-400px display-flex justifyContent-center alignItems-center position-absolute bgr-green top-70px right-0px color-white position-relative  ${
        show ? "showNotif" : "hideNotif"
      }  `}
    >
      <AiOutlineCloseCircle
        onClick={() => setshow(false)}
        className=" color-white cursor-pointer position-absolute fontSize-30px top-10px color-black   right-10px "
      />
      {/*    <p>{props.notifContent}</p> */}
      <Title text={content} size={30} weight={800} />
    </div>
  );
  return [notificationView, notif];
};

export default Notification;
