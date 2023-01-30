import { Table, TableProps } from "antd";
import { CATEGORY_OPTIONS, DATE_FORMAT, TYPE_OPTIONS } from "../constants";
import { Spending } from "../types/spending";

export type SpendingTableProps = {
  spendings: Spending[];
};

const columns: TableProps<Spending>["columns"] = [
  {
    title: "Categoria",
    dataIndex: "category",
    key: "category",
    render(category) {
      return CATEGORY_OPTIONS.find(({ value }) => value === category)?.label;
    },
  },
  {
    title: "Tipo",
    dataIndex: "type",
    key: "type",
    render(type) {
      return TYPE_OPTIONS.find(({ value }) => value === type)?.label;
    },
  },
  { title: "Descrição", dataIndex: "description", key: "description" },
  {
    title: "Data",
    dataIndex: "date",
    key: "date",
    render(date: Spending["date"]) {
      return date.format(DATE_FORMAT);
    },
  },
  {
    title: "Valor",
    dataIndex: "value",
    key: "value",
    render(value: Spending["value"]) {
      return `R$ ${value.toFixed(2)}`.replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
];

export function SpendingTable(props: SpendingTableProps) {
  return <Table<Spending> columns={columns} dataSource={props.spendings} />;
}
