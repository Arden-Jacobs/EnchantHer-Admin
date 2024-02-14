"use client";

import { StoreModal } from "@/components/modals/store-modal";

import { useEffect, useState } from "react";

export const ModalProvider = () => {
  // the trick below is to prevent hydration errors
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  // the trick below is to prevent hydration errors

  return (
    <>
      <StoreModal />
    </>
  );
};
