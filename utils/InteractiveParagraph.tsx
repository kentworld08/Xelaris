"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  MotionValue,
} from "framer-motion";

interface Point {
  x: number;
  y: number;
}

const getDistance = (point1: Point, point2: Point): number => {
  const dx = point1.x - point2.x;
  const dy = point1.y - point2.y;
  return Math.sqrt(dx * dx + dy * dy);
};

interface AnimatedWordProps {
  word: string;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  baseColor?: string;
  highlightColor?: string;
  isSpace?: boolean; // New prop to indicate if the segment is just whitespace
}

const AnimatedWord: React.FC<AnimatedWordProps> = ({
  word,
  mouseX,
  mouseY,
  baseColor = "#888",
  highlightColor = "#fff",
  isSpace = false, // Default to false
}) => {
  const wordRef = useRef<HTMLSpanElement>(null);
  const wordPositionX = useMotionValue(0);
  const wordPositionY = useMotionValue(0);

  const distance = useMotionValue(0);

  // If it's a space, its color should always be the base color and not react to mouse
  const textColor = useTransform(
    distance,
    [0, 100], // Input range: distance from mouse (0 = mouse on word, 100 = 100px away)
    [highlightColor, baseColor]
  );

  // Measure word position after component mounts/updates.
  // This needs to be responsive to layout changes (e.g., window resize) for accurate positioning.
  useEffect(() => {
    const updateWordPosition = () => {
      if (wordRef.current) {
        const { left, top, width, height } =
          wordRef.current.getBoundingClientRect();
        // Calculate center relative to the viewport, matching mouseX/mouseY
        wordPositionX.set(left + width / 2);
        wordPositionY.set(top + height / 2);
      }
    };

    updateWordPosition(); // Initial position calculation

    // Re-calculate position on window resize AND SCROLL
    window.addEventListener("resize", updateWordPosition);
    window.addEventListener("scroll", updateWordPosition);

    return () => {
      window.removeEventListener("resize", updateWordPosition);
      window.removeEventListener("scroll", updateWordPosition);
    };
  }, [wordRef, wordPositionX, wordPositionY]);

  // Update distance whenever mouseX or mouseY changes, or if word's measured position changes
  useEffect(() => {
    const updateDistance = () => {
      // Only calculate distance if it's not a space. Spaces don't highlight.
      if (!isSpace) {
        distance.set(
          getDistance(
            { x: mouseX.get(), y: mouseY.get() }, // Current mouse position (viewport-relative)
            { x: wordPositionX.get(), y: wordPositionY.get() } // Word center position (viewport-relative)
          )
        );
      } else {
        // For spaces, ensure distance is effectively infinite so they don't highlight
        distance.set(Infinity);
      }
    };

    // Subscribe to changes in mouseX, mouseY, wordPositionX, wordPositionY
    const unsubscribeMouseX = mouseX.onChange(updateDistance);
    const unsubscribeMouseY = mouseY.onChange(updateDistance);
    const unsubscribeWordX = wordPositionX.onChange(updateDistance);
    const unsubscribeWordY = wordPositionY.onChange(updateDistance);

    return () => {
      unsubscribeMouseX();
      unsubscribeMouseY();
      unsubscribeWordX();
      unsubscribeWordY();
    };
  }, [mouseX, mouseY, wordPositionX, wordPositionY, distance, isSpace]);

  return (
    <motion.span
      ref={wordRef}
      style={{ color: isSpace ? baseColor : textColor }}
      className="inline-block whitespace-pre"
      transition={{ type: "spring", stiffness: 400, damping: 50 }}
    >
      {word}
    </motion.span>
  );
};

interface InteractiveParagraphProps {
  text: string;
}

const InteractiveParagraph: React.FC<InteractiveParagraphProps> = ({
  text,
}) => {
  const [segments, setSegments] = useState<
    { content: string; isSpace: boolean }[]
  >([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const wordsAndSpaces = text.split(/(\s+)/).filter((s) => s.length > 0);

    const processedSegments = wordsAndSpaces.map((segment) => ({
      content: segment,
      isSpace: /\s+/.test(segment),
    }));
    setSegments(processedSegments);
  }, [text]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {segments.map((segment, index) => (
        <AnimatedWord
          key={index}
          word={segment.content}
          mouseX={mouseX}
          mouseY={mouseY}
          baseColor="#fffefab2"
          highlightColor="#eee"
          isSpace={segment.isSpace}
        />
      ))}
    </>
  );
};

export default InteractiveParagraph;
