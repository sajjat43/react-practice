import React from "react";
import { DataGrid } from "@mui/x-data-grid";

type TableProps = React.ComponentProps<typeof DataGrid>;

const Table = ({ rows, columns, ...props }: TableProps) => {
  return <DataGrid autoHeight pagination {...props} rows={rows} columns={columns} disableRowSelectionOnClick pageSizeOptions={[10, 25, 50]} />;
};

export default Table;