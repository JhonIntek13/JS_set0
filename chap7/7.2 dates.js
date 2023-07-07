// Sample holiday data for Spanish-MX
const holidayData = {
  "16/09": "Dia de la independencia",
  "01/04": "April fools day",
};

function transformDateToLocale(usDate, targetLocale) {
  // Define the date format 
  const localeDateFormat = targetLocale === "Spanish-MX" ? "DD/MM/YYYY" : "MM/DD/YYYY";

  // Use regular expressions to extract it
  const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  const matches = usDate.match(regex);

  if (!matches) {
    throw new Error("Invalid date format");
  }

  // Rearrange the date components based on the target locale format
  const transformedDate = `${matches[2]}/${matches[1]}/${matches[3]}`;

  // Check if the transformed date corresponds to a holiday 
  const holiday = holidayData[`${matches[2]}/${matches[1]}`];
  const holidayMessage = holiday ? ` (${holiday})` : "";

  return `${transformedDate}${holidayMessage}`;
}

const usDate = "09/16/2014";
const targetLocale = "Spanish-MX";
const transformedDate = transformDateToLocale(usDate, targetLocale);
console.log(transformedDate); 
