import { feedbacks } from "@/constant/feedbacks";
import Feedback from "../atoms/Feedback";

export default function Feedbacks() {
  return (
    <section>
      <h3 className="mb-4 text-center font-bold lg:text-lg">
        What did they say?
      </h3>
      <div className="flex flex-wrap items-center justify-center bg-amber-400 p-4 lg:p-8">
        {feedbacks.map(({ id, image }, idx) => (
          <Feedback key={id} image={image} index={idx} />
        ))}
      </div>
    </section>
  );
}
