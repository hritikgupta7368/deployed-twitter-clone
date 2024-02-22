"use client"
import React, { createContext, useContext, useState } from 'react';
const ModalContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('premium');
  const [showNavbar , setShowNavbar] = useState(false);

 
  const handleModal = (type) => {
   
    setModalType(type);
    setIsModalOpen(prevState => !prevState);
  };
  const handleNavbarSide =  () => {
    setShowNavbar( prevState => !prevState)
  }
  return (
    <ModalContext.Provider value={{ isModalOpen,handleModal,modalType,handleNavbarSide,showNavbar}}>
      {children}
    </ModalContext.Provider>
  );
};


export const useModal = () => useContext(ModalContext);
