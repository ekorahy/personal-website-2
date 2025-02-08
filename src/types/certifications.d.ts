interface PaginationDotsProps {
  totalSlides: number;
  cardsPerSlide: number;
  currentIndex: number;
  onClick: (index: number) => void;
}

interface CarouselControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

interface CertificationCardProps {
  certification: {
    name: string;
    image: string;
    company: string;
    link: string;
  };
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}