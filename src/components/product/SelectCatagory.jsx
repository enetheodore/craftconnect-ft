import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useQuery } from "@tanstack/react-query";
import { getCatagoryList } from "../../utilities/makeApiRequest";

const SelectCatagory = ({setCatagoryId, catagoryId}) => {
  const [catagories, setCatagories] = React.useState();

  const handleChange = (event) => {
    console.log(event.target.value);
    setCatagoryId(event.target.value)
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["catagory"],
    queryFn: getCatagoryList,
    refetchInterval: 10000,
  });

  React.useEffect(() => {
    // setTotalPages(totalPages);
    console.log(data?.totalItems);
  }, [data]);
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={catagories}
          label="Category"
          onChange={handleChange}
        >
          {data?.catagories.map((catagory) => (
            <MenuItem value={catagory._id}>{catagory.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectCatagory;
