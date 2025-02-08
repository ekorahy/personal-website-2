import { MdArrowForwardIos } from "react-icons/md";

export default function CarouselControls({
  onPrev,
  onNext,
}: CarouselControlsProps) {
  return (
    <>
      <button
        onClick={onPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-amber-400 p-4 text-zinc-950 hover:bg-amber-500"
      >
        <MdArrowForwardIos className="rotate-180 text-xl" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-amber-400 p-4 text-zinc-950 hover:bg-amber-500"
      >
        <MdArrowForwardIos className="text-xl" />
      </button>
    </>
  );
}
