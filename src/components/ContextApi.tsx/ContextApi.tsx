import React, { createContext, useContext, useReducer } from "react";
import useMousePosition from "../../utils/useMousePosition";

interface MyContextType {
  cursorVariant?: String;
  handleMouseLeave?: () => void;
  handleMouseOverText?: () => void;
  handleMouseOverImage?: () => void;
  handleMouseOverBg?: () => void;
  handleMouseOverLink?: () => void;
}

const initialState: MyContextType = {
  cursorVariant: "string",
  handleMouseLeave: () => {},
  handleMouseOverText: () => {},
  handleMouseOverImage: () => {},
  handleMouseOverBg: () => {},
  handleMouseOverLink: () => {},
};

const ContextApi = createContext<MyContextType | null>(null);

const ContextProvider: React.FC<any> = ({ children }) => {
  const [state] = useReducer((state) => state, initialState);

  const { setCursorVariant, cursorVariant } = useMousePosition();

  const handleMouseLeave = () => setCursorVariant("default");
  const handleMouseOverText = () => setCursorVariant("text");
  const handleMouseOverImage = () => setCursorVariant("image");
  const handleMouseOverBg = () => setCursorVariant("footer");
  const handleMouseOverLink = () => setCursorVariant("link");

  return (
    <div>
      <ContextApi.Provider
        value={{
          ...state,
          cursorVariant,
          handleMouseLeave,
          handleMouseOverText,
          handleMouseOverImage,
          handleMouseOverBg,
          handleMouseOverLink,
        }}
      >
        {children}
      </ContextApi.Provider>
    </div>
  );
};

const useAppContext = () => {
  return useContext(ContextApi);
};

export { ContextProvider, initialState, useAppContext };
