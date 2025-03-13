import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getCatagoryList } from "../../utilities/makeApiRequest";
import { Box } from "@mui/material";
import InputComp from "../ui/InputComp";
import { TabelComp2 } from "../ui/TabelComp2";
const columns = [
    { id: "number", label: "Number", minWidth: 20, align: "left" },
    { id: "name", label: "Catagory Name", minWidth: 120, align: "left" },
    { id: "description", label: "Description", minWidth: 120, align: "left" },
    { id: "date", label: "Date created", minWidth: 120, align: "left" },
  ];
const ListOfCatagory = () => {

  const [catagories, setCatagories] = React.useState();
  const [currentProduct, setCurrentProduct] = React.useState();

  const [openEditProduct, setOpenEditProduct] = useState(false);

  const [firstName, setFirstName] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [totalPages, setTotalPages] = React.useState(0);
  const [totalCatagories, setTotalCatagories] = React.useState(0);
  const [isActive, setIsActive] = useState(true);

  const [isCompanyProduct, setIsCompanyProduct] = useState(true);
  const { data, error, isLoading } = useQuery({
    queryKey: ["catagory"],
    queryFn: getCatagoryList,
    refetchInterval: 10000,
  });

  useEffect(() => {
    // setTotalPages(totalPages);
    console.log(data?.totalItems)
    if (data) {
      const editedCatagory = data.catagories.map((catagory, index) => ({
        ...catagory,
        number: page + index + 1,
        name: (
          <div onClick={() => handleClick(catagory.objectId)}>
            {catagory.name}
          </div>
        ),
        description: (
          <div onClick={() => handleEditClick()}>{catagory.description}</div>
        ),
        date: (
          <div onClick={() => handleClick(catagory.objectId)}>
            {catagory.createdAt}
          </div>
        ),
       
      }));
      setCatagories(editedCatagory);
      setTotalCatagories(data?.totalItems);
      setTotalPages(data?.totalPages);
    }
  }, [data]);
  return <>
{
    catagories &&(
        <Box>
          <Box sx={{ display: { lg: "flex" }, gap: "20px" }}>
            <InputComp
              type="text"
              name="phone"
              label="Phone Number"
            //   value={phone}
            //   onChange={(name, value) => setPhone(value)}
              placeholder="Enter Phone Number"
              sx={{ paddingBottom: "10px" }}
            />
            <InputComp
              type="text"
              name="firstName"
              label="First Name"
            //   value={firstName}
            //   onChange={(name, value) => setCatagories(value)}
              placeholder="Enter Password"
              sx={{ paddingBottom: "10px" }}
            />
          </Box>
          <TabelComp2
            rows={catagories}
            columns={columns}
            page={page}
            setPage={setPage}
            rowsPerPage={rowsPerPage}
            totalPages={totalCatagories}
            path=""
          />
    
        </Box>
    )
}
  </>;
};

export default ListOfCatagory;
