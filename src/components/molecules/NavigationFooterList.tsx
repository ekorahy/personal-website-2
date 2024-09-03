import { NavigationFooterListProps } from "@/types/footer";
import NavigationFooterItem from "../atoms/NavigationFooterItem";

export default function NavigationFooterList({
  items,
}: NavigationFooterListProps) {
  return (
    <div className="flex w-max flex-col gap-4">
      {items.map(({ id, name, route }) => (
        <NavigationFooterItem key={id} name={name} route={route} />
      ))}
    </div>
  );
}
