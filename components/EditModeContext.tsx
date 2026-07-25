"use client";

import { createContext, useContext, useEffect, useState } from "react";

const EditModeContext = createContext<{
  editMode: boolean;
  toggleEditMode: () => void;
}>({
  editMode: false,
  toggleEditMode: () => {},
});

export function EditModeProvider({ children }: { children: React.ReactNode }) {
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("edit-mode") === "1") setEditMode(true);
  }, []);

  const toggleEditMode = () => {
    setEditMode((prev) => {
      const next = !prev;
      sessionStorage.setItem("edit-mode", next ? "1" : "0");
      return next;
    });
  };

  return (
    <EditModeContext.Provider value={{ editMode, toggleEditMode }}>
      {children}
    </EditModeContext.Provider>
  );
}

export function useEditMode() {
  return useContext(EditModeContext);
}
