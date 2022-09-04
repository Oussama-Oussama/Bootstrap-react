import React from "react";

function ProfilePhoto() {
  return (
    <div>
      <img
        src="/images/img.jfif"
        alt="profile"
        style={{
          width: 300,
          height: 300,
          borderRadius: 150,
          boxShadow: "12px 10px 10px 12px rgba(0, 0, 0, 0.6)",
        }}
      />
    </div>
  );
}

export default ProfilePhoto;
