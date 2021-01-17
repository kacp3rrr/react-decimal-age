/**
 * @param {number} date Initial date
 * @return {object} object with years, months, and days
 */
export const convertDate = (date: number) => {
    const converted = {years: 0, months: 0, days: 0}
    const totalDays = Math.abs(date) * 365;
    const years = Math.floor(totalDays / 365);
    const months = Math.floor((totalDays-(years * 365)) / 30);
    const days = Math.floor(totalDays - (years * 365) - (months * 30));
    converted.years = years;
    converted.months = months;
    converted.days = days;
    return converted;
};