import { Button, HStack, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
interface Props {
  sortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
}
const SortSelector = ({ sortOrder, onSelectSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "released", label: "Released" },
    { value: "added", label: "Added" },
    { value: "created", label: "Created" },
    { value: "updated", label: "Updated" },
    { value: "-rating", label: "Rating" },
    { value: "-metacritic", label: "Popularity" },
  ];
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <HStack>
          <Button variant={"outline"}>
            Order by:{" "}
            {sortOrder
              ? sortOrders.find((o) => o.value === sortOrder)?.label
              : "Relevance"}
            <BsChevronDown />
          </Button>
        </HStack>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((order) => (
              <Menu.Item
                onClick={() => onSelectSortOrder(order.value)}
                key={order.value}
                value={order.value}
              >
                {order.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
