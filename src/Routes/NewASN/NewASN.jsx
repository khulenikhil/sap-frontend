import React, { useState } from "react";
import "./NewASN.css";
import readXlsxFile from "read-excel-file";
import Table from "../../Components/Table/Table";
import { Button, Typography } from "@mui/material";
console.log("REEXECUTE");
const getData = (file) => {
  readXlsxFile(file).then((data) => {
    let columns = data[0];
    console.log(`columns: ${columns}`);
    data = data.slice(1);
    console.log(data);
    let rows = data.map((entry) => {
      let obj = {};
      for (let field in columns) {
        for (let value in entry) {
          obj[columns[field]] = entry[value];
        }
      }
      return obj;
    });
    console.log("THE JAVASCRIPT ARRAY FROM THE EXCEL FILE");
    console.log(rows);
    return { columns: columns, data: rows };
  });
};

function NewASN() {
  const [asnTable, setAsnTable] = useState({ data: [], columns: [] });

  const onFileUploadHandler = (event) => {
    const newAsnTable = getData(event.target.files[0]);
    setAsnTable(newAsnTable);
  };

  const openFileInput = () => {
    document.getElementById("excelFile").click();
  };

  return (
    <div>
      <input
        type="file"
        name="excelFile"
        id="excelFile"
        multiple={false}
        style={{ display: "none" }}
        onChange={onFileUploadHandler}
      />

      <Button
        variant="contained"
        className="file-upload-button"
        onClick={openFileInput}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontFamily: `"Inter",sans-serif`,
            color: "white",
          }}
        >
          Upload File
        </Typography>
      </Button>
      {asnTable.data.length !== 0 ? (
        <Table rows={asnTable.rows} data={asnTable.data} />
      ) : (
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontFamily: `"Inter",sans-serif`,
          }}
        >
          NO FILE SELECTED
        </Typography>
      )}
    </div>
  );
}

export default NewASN;
