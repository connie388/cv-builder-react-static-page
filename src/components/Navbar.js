import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Navbar.css";

function Navbar({
  sectionOneRef,
  sectionTwoRef,
  sectionThreeRef,
  scrollDown,
  setGenResume,
  generalInfo,
  edRecord,
  expRecord,
  setGeneralInfo,
  setEdRecord,
  setExpRecord,
}) {
  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  // When the user scrolls the page, execute myFunction
  window.onscroll = function () {
    addSticky();
  };

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function addSticky() {
    // Get the navbar
    var navbar = document.getElementById("myTopnav");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  const exportData = () => {
    const generalStr = JSON.stringify(generalInfo);
    const educationStr = JSON.stringify(edRecord);
    const experienceStr = JSON.stringify(expRecord);
    const userInfo =
      '{"general":' +
      generalStr +
      ',"education":' +
      educationStr +
      ',"experience":' +
      experienceStr +
      "}";

    const blob = new Blob([userInfo], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "user-info.json";
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="topnav" id="myTopnav">
      <button
        type="button"
        className="link-button active"
        onClick={() => {
          setGenResume("home");
          scrollDown(sectionOneRef);
        }}
      >
        Home
      </button>

      <button
        type="button"
        className="link-button"
        href="#"
        onClick={() => {
          setGenResume("home");
          scrollDown(sectionTwoRef);
        }}
      >
        Education
      </button>
      <button
        type="button"
        className="link-button"
        onClick={() => {
          setGenResume("home");
          scrollDown(sectionThreeRef);
        }}
      >
        Experience
      </button>
      <button
        type="button"
        className="link-button"
        onClick={() => {
          setGenResume("resume");
        }}
      >
        Preview
      </button>
      <button
        type="button"
        className="link-button"
        onClick={() => {
          window.print();
        }}
      >
        Print
      </button>
      <button
        type="button"
        className="link-button"
        onClick={() => {
          setGenResume("import");
        }}
      >
        Import
      </button>
      <button
        type="button"
        className="link-button"
        onClick={() => {
          exportData();
        }}
      >
        Export
      </button>

      <button type="button" className="link-button icon" onClick={myFunction}>
        <i className="fa fa-bars"></i>
      </button>
      <ToastContainer />
    </div>
  );
}

export default Navbar;
