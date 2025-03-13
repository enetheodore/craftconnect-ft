import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import ReactPaginate from "react-paginate";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useLocation, useNavigate, useParams } from "react-router-dom";

// const columns = [
//     { id: 'number', label: 'Number', minWidth: 170,align: 'left', },

//   { id: 'name', label: 'Status', minWidth: 170 ,align: 'left',},
//   { id: 'code', label: 'Created At', minWidth: 170 },
//   {
//     id: 'population',
//     label: 'Fare',
//     minWidth: 170,
//     align: 'left',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'size',
//     label: 'Commssion',
//     minWidth: 170,
//     align: 'left',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'product',
//     label: 'Product',
//     minWidth: 170,
//     align: 'left',
//     // format: (value) => value.toFixed(2),
//   },
// ];

function createData(number, name, code, population, size, product) {
  //   const density = population / size;
  return { number, name, code, population, size, product };
}

// const rows = [
//   createData(1,'Completed', 'Augest 1', 500, 24,"Abebe"),
//   createData(2,'Failed', 'Augest 2', 400, 45,"Abebe"),
//   createData(3,'Completed', 'Augest 3', 600, 34,"Abebe"),
//   createData(4,'Canceled', 'Augest 4', 300, 56,"Abebe"),
//   createData(5,'Completed', 'Augest 5', 300, 67,"Abebe"),
//   createData(6,'Canceled', 'Augest 6', 200, 23,"Abebe"),
//   createData(7,'Completed', 'Augest 7', 700, 45 ,"Abebe"),
//   createData(8,'Canceled', 'Augest 8', 400, 45 ,"Abebe"),
//   createData(9,'Completed', 'MX', 400, 34,"Abebe" ),
//   createData(10,'Canceled', 'JP', 600, 45 ,"Abebe"),
//   createData(11,'Completed', 'FR', 500, 45 ),
//   createData(12,'Canceled', 'GB', 300, 56 ,"Abebe"),
//   createData(13,'Completed', 'RU', 456, 45 ,"Abebe"),
//   createData(14,'Canceled', 'NG', 200, 12 ,"Abebe"),
//   createData(15,'Completed', 'BR', 450, 34,"Abebe" ),
// ];

export function TabelComp2({
  rows,
  columns,
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
  totalPages,
  path,
}) {
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const location = useLocation();
  const { pageNo } = useParams();
  const navigate = useNavigate();
  console.log(pageNo);
  console.log(path);
  React.useEffect(() => {
    setPage(parseInt(1));
  }, [pageNo]);
  const handleChangePage = (event) => {
    console.log("pagination", page, rowsPerPage, event.selected);
    setPage(event.selected + 1);

    // navigate(`/${path}/${event.selected + 1}`);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  return (
    <Box>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, height: 40 }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={parseInt(totalPages)}
          rowsPerPage={parseInt(rowsPerPage)}
          page={page -1}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />

        {/* <ReactPaginate
          breakLabel="..."
          nextLabel={<SkipNextIcon />}
        
          onPageChange={handleChangePage}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          previousLabel={<SkipPreviousIcon />}
          renderOnZeroPageCount={null}
          containerClassName="flex justify-center list-none p-0 m-5"
          pageClassName="mx-2"
          pageLinkClassName="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
          previousClassName="mx-2"
          previousLinkClassName="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
          nextClassName="mx-2"
          nextLinkClassName="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
          breakClassName="mx-2"
          breakLinkClassName="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
          activeClassName="bg-orange-300 text-white"
          disabledClassName="text-gray-400 cursor-not-allowed"
          forcePage={page-1}
        /> */}
      </Box>

      {/* <TablePagination
      //  count={-1}
        rowsPerPageOptions={[1, 2, 3]}
        component="div"
        count={totalPages}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        showFirstButton={true}
        showLastButton={true}

      /> */}
    </Box>
  );
}
