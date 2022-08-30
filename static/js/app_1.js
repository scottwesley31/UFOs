// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Function that will build a table from the data.js file
function buildTable(data) {
        // clear any data to start with blank table, clear out any existing data
        tbody.html("");

    // Iterate through the data.js file array, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");
        // Loop through each dataRow argument, loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            // Append each value of the object to a cell in the table
            let cell = row.append("td");
            // Attach value to the cell
            cell.text(val);
            }
        );
    });
}

// Function to handle user click input and table filtering
function handleClick() {
    // Search for datetime HTML tags and store the value in date variable
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    // Create a default filter (the original table)
    let filteredData = tableData;
    // Add date filter functionality
    // Check to see if a date was entered and filter the
    // data using that date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Build the table using this filteredData
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will just be the original table
    buildTable(filteredData);
}

// Have D3 listen for "click" event
d3.selectAll("#filter-btn").on("click", handleClick);

// Display the original table when the webpage loads
buildTable(tableData);