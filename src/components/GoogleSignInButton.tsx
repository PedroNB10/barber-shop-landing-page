"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function GoogleSignInButton() {
  const handleClick = () => {
    signIn("google");
  };
  return (
    <button
      onClick={handleClick}
      className="bg-vermelho-escuro px-4 py-2 rounded-md text-bege flex items-center gap-2 mx-auto"
      // onClick={handleSignInClick}
    >
      <FontAwesomeIcon icon={faGoogle} className="h-5" />
      Login com Google
    </button>
  );
}

export default GoogleSignInButton;
