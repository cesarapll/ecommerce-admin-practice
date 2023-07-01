"use client";

import { useEffect } from "react";

import { useStoreModal } from "@/hooks/use-store-modal";

const SetupPage = () => {
  const { onOpen, isOpen } = useStoreModal();

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <div className="p-4">
      Root page
      {/* <UserButton afterSignOutUrl="/" />

      <Modal title="Test" description="Test Desc" isOpen onClose={() => {}}>
        <h2>Children</h2>
      </Modal> */}
    </div>
  );
};

export default SetupPage;
