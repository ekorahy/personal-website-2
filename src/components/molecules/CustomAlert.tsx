import { CustomAlertProps } from "@/types/footer";
import { SlClose } from "react-icons/sl";
import { GoAlert } from "react-icons/go";

export default function CustomAlert({
  message,
  isOpen,
  onClose,
}: CustomAlertProps) {
  return (
    <>
      {isOpen && (
        <dialog
          open
          className="fixed bottom-0 z-10 w-full overflow-hidden bg-amber-400 p-6 lg:p-8"
        >
          <div className="relative mx-auto max-w-7xl">
            <p className="font-bold lg:text-lg">{message}</p>
            <button
              onClick={onClose}
              className="relative mt-4 flex items-center gap-2 bg-white px-4 py-2 text-zinc-950 hover:bg-red-600 hover:text-white dark:bg-zinc-950 dark:text-white hover:dark:bg-red-600 hover:dark:text-zinc-950 lg:px-8"
            >
              <SlClose /> Close
            </button>
            <GoAlert className="absolute -right-20 -top-10 text-[20vh] opacity-20 lg:-top-20 lg:text-[30vh]" />
          </div>
        </dialog>
      )}
    </>
  );
}
