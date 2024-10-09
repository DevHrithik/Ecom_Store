"use client";

import { Modal } from "@/components/ui/modal";

export default function SetupPage() {
  return (
    <>
      <Modal
        title="Hello"
        description="This is a test"
        isOpen
        onClose={() => {}}
      >
        Children
      </Modal>
    </>
  );
}
