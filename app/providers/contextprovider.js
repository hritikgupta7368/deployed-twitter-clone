"use client"
import React, { createContext, useContext, useState } from 'react';
const ModalContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('premium');

 
  const handleModal = (type) => {
    console.log(type)
    setModalType(type);
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen,handleModal,modalType}}>
      {children}
    </ModalContext.Provider>
  );
};


export const useModal = () => useContext(ModalContext);
