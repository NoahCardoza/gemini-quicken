import UploadIcon from "../assets/upload.svg?react";
import Papa from "papaparse";


function downloadTextAsCSV(filename, text) {
  const blob = new Blob([text], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(function () {
    URL.revokeObjectURL(url);
  }, 100);
}


function mmddyy(date) {
  const mm = date.getMonth() + 1; // getMonth() is zero-based
  const dd = date.getDate();

  return [
    (mm > 9 ? "" : "0") + mm,
    (dd > 9 ? "" : "0") + dd,
    date.getFullYear(),
  ].join("/");
}

function transformCSV(data) {
  return data.map(function (row) {
    // Reference Number	Transaction Post Date	Description of Transaction	Transaction Type	Amount
    const timestamp = new Date(row["Transaction Post Date"]);
    const txRef = row["Reference Number"];
    const txDesc = row["Description of Transaction"];
    const txType = row["Transaction Type"];
    const txAmount = -parseFloat(row["Amount"]); // they use negative numbers for debits

    return {
      Date: mmddyy(timestamp),
      Description: txDesc,
      "Original Description": txDesc,
      Amount: txAmount,
      "Transaction Type": txAmount > 0 ? "credit" : "debit",
      Category: (txType === 'payment_transaction'
        ? 'Transfer:Credit Card Payment'
        : 'Uncategorized'
      ),
      Reference: txRef,
      Tags: "",
      Memo: "",
    };
  });
}

function convert(files) {
  if (!files) return;

  console.log(files);
    
  Array.from(files).forEach((file) => {
    const prefix = file.name.split(".");
    const extension = prefix.pop();

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        downloadTextAsCSV(
          [...prefix, "quicken", extension].join("."),
          Papa.unparse(transformCSV(results.data), {
            header: true,
            columns: [
              "Date",
              "Description",
              "Original Description",
              "Amount",
              "Transaction Type",
              "Category",
              "Reference",
              "Tags",
              "Memo",
            ],
          })
        );
      },
    });
  })
}

function IndexPage() {
  return (
    <div className="flex items-center w-full h-full flex-col p-5">
      <div className="mb-8 text-xl">
        Convert your Gemini Credit Card CSV export to a Quicken ready CSV!
      </div>
      <div className="px-6 sm:px-0 sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-4/12">
        <div className="relative group w-full h-64 flex justify-center items-center">
          <div
            className="absolute inset-0 w-full h-full rounded-xl bg-gray-700 bg-opacity-80 shadow-2xl backdrop-blur-xl group-hover:bg-opacity-70 group-hover:scale-110 transition duration-300" />
          <input
            accept=".csv"
            className="relative z-10 opacity-0 h-full w-full cursor-pointer"
            type="file"
            multiple
            name="input"
            id="dragOver"
            onChange={(e) => convert(e.target.files)}
          />
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full m-auo flex items-center justify-center">
            <div className="space-y-6 text-center">
              <UploadIcon className="m-auto fill-blue-300" width="32" height="32" />
              <p className="text-gray-100 text-lg">
                Drag and drop a file or <label
                  htmlFor="dragOver"
                  title="Upload a file"
                  className="relative z-20 cursor-pointer block link"
                  >Upload a file</label>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
