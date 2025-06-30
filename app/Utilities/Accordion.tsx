"use client";

import React, { useState } from "react";

// A single Accordion Item
interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const MyAccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 px-4 md:px-0 text-left font-medium text-light hover:text-yellow69   transition-colors duration-200 "
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        {/* Simple chevron icon that rotates based on state */}
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="#faff69"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {/* Accordion Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 md:px-0 text-light-yellow-70 font-sans font-light text-[16px]">
          {children}
        </div>
      </div>
    </div>
  );
};

// The main Accordion component that manages the state of multiple items
interface MyAccordionProps {
  items: { title: string; content: React.ReactNode }[];
  defaultOpenIndex?: number; // For single open accordion
  allowMultipleOpen?: boolean; // For multiple open accordion
}

export const MyCustomAccordion: React.FC<MyAccordionProps> = ({
  items,
  defaultOpenIndex,
  allowMultipleOpen = false,
}) => {
  // State for single open accordion
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(
    defaultOpenIndex ?? null
  );

  // State for multiple open accordion
  const [openItems, setOpenItems] = useState<Set<number>>(
    new Set(
      allowMultipleOpen && defaultOpenIndex !== undefined
        ? [defaultOpenIndex]
        : []
    )
  );

  const handleToggle = (index: number) => {
    if (allowMultipleOpen) {
      setOpenItems((prevOpenItems) => {
        const newSet = new Set(prevOpenItems);
        if (newSet.has(index)) {
          newSet.delete(index);
        } else {
          newSet.add(index);
        }
        return newSet;
      });
    } else {
      // Single open behavior
      setOpenItemIndex((prevIndex) => (prevIndex === index ? null : index));
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-lg shadow-md overflow-hidden">
      {items.map((item, index) => (
        <MyAccordionItem
          key={index}
          title={item.title}
          isOpen={
            allowMultipleOpen ? openItems.has(index) : openItemIndex === index
          }
          onToggle={() => handleToggle(index)}
        >
          {item.content}
        </MyAccordionItem>
      ))}
    </div>
  );
};
