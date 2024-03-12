import { FC } from "react";
import { List } from "antd";

interface IListElementProps<T> {
  listDirection: "horizontal" | "vertical";
  size: "default" | "large" | "small";
  pagination?: (page: number) => void;
  pageSize?: number;
  dataSource: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

const ListElement: FC<IListElementProps<T>> = ({
  dataSource,
  renderItem,
  listDirection,
  size,
}) => {
  return (
    <div>
      <List
        itemLayout={listDirection}
        size={size}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        style={{ width: "100%" }}
        dataSource={dataSource}
        renderItem={renderItem}
      />
    </div>
  );
};

export default ListElement;
