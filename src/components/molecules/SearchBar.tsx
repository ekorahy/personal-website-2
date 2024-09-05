import { SearchBarProps } from "@/types/blog";
import { CiSearch } from "react-icons/ci";
import { MdClear } from "react-icons/md";

export default function SearchBar({
  keyword,
  keywordChange,
  removeKeyword,
}: SearchBarProps) {
  return (
    <form className="relative mb-4 block w-full border border-zinc-950 focus:outline-none dark:border-zinc-50">
      <CiSearch className="pointer-events-none absolute left-3 top-1/2 h-6 w-6 -translate-y-1/2 transform" />
      <input
        className="search-input h-12 w-full border-0 p-2 px-12 focus:outline-none"
        type="text"
        value={keyword}
        placeholder="Search blog ..."
        onChange={(event) => keywordChange(event.target.value)}
      />
      <button
        type="button"
        title="Clear keyword"
        className={`${keyword === "" ? "hidden" : "absolute"} right-3 top-1/2 h-6 w-6 -translate-y-1/2 transform text-xl text-red-600 hover:text-red-700`}
        onClick={() => removeKeyword()}
      >
        <MdClear />
      </button>
    </form>
  );
}
