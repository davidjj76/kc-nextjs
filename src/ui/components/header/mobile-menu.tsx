"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { Dialog as HeadlessDialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const valueContext = createContext(false);

const handlersContext = createContext<{
  open: () => void;
  close: () => void;
}>({ open: () => {}, close: () => {} });

export function Provider({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);

  const handlers = useMemo(
    () => ({
      open: () => setVisible(true),
      close: () => setVisible(false),
    }),
    [],
  );

  return (
    <handlersContext.Provider value={handlers}>
      <valueContext.Provider value={visible}>{children}</valueContext.Provider>
    </handlersContext.Provider>
  );
}

export function OpenButton() {
  const { open } = useContext(handlersContext);
  return (
    <button
      type="button"
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
      onClick={open}
    >
      <span className="sr-only">Open menu</span>
      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}

export function CloseButton() {
  const { close } = useContext(handlersContext);
  return (
    <button
      type="button"
      className="-m-2.5 rounded-md p-2.5 text-gray-100"
      onClick={close}
    >
      <span className="sr-only">Close menu</span>
      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}

export function Dialog({ children }: { children: React.ReactNode }) {
  const { close } = useContext(handlersContext);
  const visible = useContext(valueContext);

  return (
    <HeadlessDialog
      as="div"
      className="sm:hidden"
      open={visible}
      onClose={close}
    >
      <div className="fixed inset-0 z-10" />
      <HeadlessDialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6">
        {children}
      </HeadlessDialog.Panel>
    </HeadlessDialog>
  );
}
