import React, { useState } from "react";

const CustomModal = () => {
  const [textValue, setTextValue] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleButtonClick = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setTextValue(""); // Clear the input field when closing the modal
  };

  const handleOutsideClick = (event) => {
    if (event.target.id === "modal-overlay") {
      closeDialog();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-full bg-gradient-to-r from-purple-700 to-blue-500 overflow-hidden">
      <div className="flex items-center">
        <input
          type="text"
          value={textValue}
          onChange={handleTextChange}
          placeholder="Enter some text"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-96"
        />
        <button
          onClick={handleButtonClick}
          disabled={!textValue}
          className={`ml-4 px-4 py-2 text-black font-semibold rounded-lg transition ${
            textValue
              ? "bg-white hover:bg-gray-200"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Send
        </button>
      </div>

      {isDialogOpen && (
        <div
          id="modal-overlay"
          onClick={handleOutsideClick}
          className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-25 z-50 transition-opacity duration-300"
          style={{
            visibility: isDialogOpen ? "visible" : "hidden",
            opacity: isDialogOpen ? "1" : "0",
            pointerEvents: isDialogOpen ? "auto" : "none",
          }}
        >
          <div className="relative bg-white p-8 rounded-lg w-full max-w-sm transform transition-transform duration-300">
            <header className="font-bold text-xl">Message</header>
            <h1 className="text-lg mb-4">{textValue}</h1>
            <button
              onClick={closeDialog}
              className="absolute top-0 right-0 w-16 h-16 text-center text-gray-400 hover:text-black"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomModal;
