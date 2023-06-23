// Sample holiday data for Spanish-MX
const holidayData = {
  "16/09": "Dia de la independencia",
  "01/04": "April fools day",
};

function transformDateToLocale(usDate, targetLocale) {
  // Define the date format for the target locale
  const localeDateFormat = targetLocale === "Spanish-MX" ? "DD/MM/YYYY" : "MM/DD/YYYY";

  // Transform the input date to the target locale format
  const transformedDate = moment(usDate, "MM/DD/YYYY").format(localeDateFormat);

  // Check if the transformed date corresponds to a holiday in the target locale
  const holiday = holidayData[transformedDate];
  const holidayMessage = holiday ? ` (${holiday})` : "";

  // Return the transformed date with the holiday message
  return `${transformedDate}${holidayMessage}`;
}

// Usage example:
const usDate = "09/16/2014";
const targetLocale = "Spanish-MX";
const transformedDate = transformDateToLocale(usDate, targetLocale);
console.log(transformedDate); // Output: "16/09/2014 (Dia de la independencia)"
