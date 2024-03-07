import { Variants, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
// import { Variants } from "framer-motion";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 16,
    y: 16,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return { mousePosition, cursorVariant, setCursorVariant };
};

export default useMousePosition;

interface cursor {
  cursorVariant?: any;
}

export const Cursor: React.FC<cursor> = ({ cursorVariant }) => {
  const { mousePosition } = useMousePosition();

  const variants: Variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "#000000",
      color: "#ffffff",
      // pointerEvents: "none"
    },
    text: {
      height: 32,
      width: 32,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "#ffffff",
      mixBlendMode: "difference", // Adjust the type here,
    },
    link: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "#ffffff",
      mixBlendMode: "difference", // Adjust the type here,
      cursor: "pointer", // Change cursor color to black on hover
    },
    image: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "#000000", // Use a contrasting background color
      // mixBlendMode: "difference", // Ensure browser compatibility
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#ffffff", // Text color
      fontSize: "12px", // Font size
      cursor: "none",
      // pointerEvents: "auto",
    },
    footer: {
      height: 32,
      width: 32,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "#ffffff",
      mixBlendMode: "difference", // Adjust the type here,
    },
  };

  return (
    // {/* Cursor */}
    <motion.div
      className="cursor flex justify-center items-center"
      variants={variants}
      animate={cursorVariant}
      // initial={cursorVariant}
      // setCursorVariant={setCursorVariant}
    >
      {cursorVariant === "image" && <h1 className="font-bold">VIEW</h1>}
    </motion.div>
  );
};
