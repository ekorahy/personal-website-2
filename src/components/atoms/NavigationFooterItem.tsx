"use client";

import { useState } from "react";
import { NavigationFooterItemProps } from "@/types/footer";
import Link from "next/link";
import CustomAlert from "../molecules/CustomAlert";

export default function NavigationFooterItem({
  name,
  route,
}: NavigationFooterItemProps) {
  const [showDialog, setShowDialog] = useState(false);

  const handleButtonClick = () => {
    setShowDialog(!showDialog);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <>
      {route === "dev" ? (
        <>
          <button
            onClick={handleButtonClick}
            className="text-left text-zinc-50 hover:text-amber-400 dark:text-zinc-950 hover:dark:text-amber-400"
          >
            {name}
          </button>
          <CustomAlert
            message="🛠️ Stay tuned! This feature is still in development, but it's coming soon. Just hang tight!"
            isOpen={showDialog}
            onClose={handleCloseDialog}
          />
        </>
      ) : (
        <Link
          className="text-zinc-50 hover:text-amber-400 dark:text-zinc-950 hover:dark:text-amber-400"
          href={route}
        >
          {name}
        </Link>
      )}
    </>
  );
}
