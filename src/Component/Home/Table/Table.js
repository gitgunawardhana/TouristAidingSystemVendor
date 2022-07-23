import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import "./Table.css"

const columns = [
    {
        id: 'reservationId',
        label: 'Reservation ID ',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'accommodationName',
        label: 'Accommodation Name',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'packageName',
        label: 'Package Name',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'stayingDate',
        label: 'Staying Date',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'startDate',
        label: 'Start Date',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'endDate',
        label: 'End Date',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'numberOfGuests',
        label: 'Number of Guests',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'paymentMethod',
        label: 'Payment Method',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'totalPrice',
        label: 'Total Price',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'moreAction',
        label: 'More Action',
        minWidth: 150,
        align: 'center'
    },
];

function createData(reservationId, accommodationName, packageName, stayingDate, startDate, endDate, numberOfGuests, paymentMethod,totalPrice, moreAction) {
    return {
        reservationId,
        accommodationName,
        packageName,
        stayingDate,
        startDate,
        endDate,
        numberOfGuests,
        paymentMethod,
        totalPrice,
        moreAction

    };
}

const rows = [
    createData(192, "Diluni", "Double", "2022-10-006", "2022-10-16", "2022-11-01", "3", "Online", "2400.00","more action"),
    createData(193, "Sanidu", "Single", "2022-10-006", "2022-10-006", "2022-11-01", "1", "Pay at property","55000.00","more action"),
    createData(194, "Ishan", "Double", "2022-10-006", "2022-10-006", "2022-11-01", "2", "Pay at property","12900.00","more action"),
    createData(195, "Sachini", "Single", "2022-10-006", "2022-10-006", "2022-11-01", "3", "Online","34000.00","more action"),
    createData(196, "Thilini", "Single", "2022-10-006", "2022-10-006", "2022-11-01", "4", "Pay at property","12400.00","more action"),
    createData(197, "Yasmi", "Double", "2022-10-006", "2022-10-006", "2022-11-01", "5", "Online","12300.00","more action"),
    createData(198, "Yureni", "Single", "2022-10-006", "2022-10-006", "2022-11-01", "6", "Online","15600.00","more action"),
    createData(199, "Ishara", "Double", "2022-10-006", "2022-10-006", "2022-11-01", "3", "Online","22900.00","more action"),
    createData(200, "Subhashi", "Single", "2022-10-006", "2022-10-006", "2022-11-01", "1", "Pay at property","16900.00","more action"),
];

export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{width: '100%', overflow: 'hidden'}}>
            <TableContainer sx={{maxHeight: 440}}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{minWidth: column.minWidth}}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}