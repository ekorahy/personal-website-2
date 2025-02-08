export default function PaginationDots({
  totalSlides,
  cardsPerSlide,
  currentIndex,
  onClick,
}: PaginationDotsProps) {
  return (
    <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
      {Array.from({ length: Math.ceil(totalSlides / cardsPerSlide) }).map(
        (_, index) => (
          <button
            key={index}
            onClick={() => onClick(index)}
            className={`h-3 w-3 rounded-full ${index === Math.floor(currentIndex / cardsPerSlide) ? "bg-amber-400" : "bg-zinc-900 dark:bg-zinc-100"}`}
          ></button>
        ),
      )}
    </div>
  );
}
