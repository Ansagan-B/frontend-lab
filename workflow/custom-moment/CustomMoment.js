(function () {
    class CustomMoment {

        constructor(date) {
            this.date = date;
        }

        static parse(parseDate, format) {
            const splitted = parseDate.split("-").map(number => parseInt(number));
            let days = "";
            let months = "";
            let years = "";
            switch (format) {
                case "DD-MM-YYYY":
                    [days, months, years] = splitted;
                    break;
                case "MM-DD-YYYY":
                    [months, days, years] = splitted;
                    break;
                case "YYYY-MM-DD":
                    [years, months, days] = splitted;
                    break;
                default:
                    console.log(`Unexpected format! ${format}`);
                    return null;
            }
            const result = new Date(`${years}-${months}-${days}`);
            return new CustomMoment(result);
        }

        format(type) {
            const formatDate = this.date;
            let days = "";
            let months = "";
            let years = "";
            let result;
            switch (type) {
                case 'MM-DD-YYYY':
                    months = '' + (formatDate.getMonth() + 1);
                    days = formatDate.getDay();
                    years = formatDate.getFullYear();
                    result = `${months + 1}-${days}-${years}`;
                    return result;
                case 'DD-MM-YYYY':
                    years = formatDate.getFullYear();
                    months = formatDate.getMonth();
                    days = formatDate.getDate();
                    result = `${days}-${months + 1}-${years}`;
                    return result;
                case 'YYYY-MM-DD':
                    years = formatDate.getFullYear();
                    months = formatDate.getMonth();
                    days = formatDate.getDate();
                    result = `${years}-${months + 1}-${days}`;
                    return result;
            }
        }

        fromNow() {
            const difference = new Date().getTime() - this.date.getTime();
            const numYears = Math.floor(difference / (3600 * 24 * 1000 * 365));
            const numMonths = Math.floor(difference / (3600 * 24 * 1000 * 31));
            const numDays = Math.floor(difference / (3600 * 24 * 1000));
            let result;
            if (numMonths > 12) {
                result = `${numYears} years ago`;
            } else if (numDays > 31) {
                result = `in ${numDays} months`;
            } else {
                result = `in ${numDays} days`;
            }
            return result;
        }

        toDate() {
            const result = new Date(this.date);
            return result;
        }
    }

    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = CustomMoment;
    } else {
        window.CustomMoment = CustomMoment;
    }

})();