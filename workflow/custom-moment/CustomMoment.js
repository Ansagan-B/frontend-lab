class CustomMoment {

    constructor(date) {
        this.date = date;
    }

    static _parse(date, format) {
        let result;
        let splited = date.split("-");
        let days = "";
        let months = "";
        let years = "";
        if (format === "DD-MM-YYYY") {
            days = parseInt(splited[0]);
            months = parseInt(splited[1]);
            years = parseInt(splited[2]);
            result = new Date(`${years}-${months}-${days}`);
        } else if (format === "MM-DD-YYYY") {
            months = parseInt(splited[0]);
            days = parseInt(splited[1]);
            years = parseInt(splited[2]);
            result = new Date(`${years}-${months}-${days}`);
        } else if (format === "YYYY-MM-DD") {
            years = parseInt(splited[0]);
            months = parseInt(splited[1]);
            days = parseInt(splited[2]);
            result = new Date(`${years}-${months}-${days}`);
        } else {
            console.log(`Unexpected format! ${format}`);
            return null;
        }
        return result;
    }

    parse(date, format) {
        this.date = CustomMoment._parse(date, format);
    }

    format(type) {
        const formatDate = this.date;
        let days = "";
        let months = "";
        let years = "";
        let result;
        if (type === 'MM-DD-YYYY') {
            months = '' + (formatDate.getMonth() + 1);
            days = formatDate.getDay();
            years = formatDate.getFullYear();
            result = `${months + 1}-${days}-${years}`;
            return result
        } else if (type === 'DD-MM-YYYY') {
            years = formatDate.getFullYear();
            months = formatDate.getMonth();
            days = formatDate.getDate();
            result = `${days}-${months + 1}-${years}`;
            return result;
        } else if (type === 'YYYY-MM-DD') {
            years = formatDate.getFullYear();
            months = formatDate.getMonth();
            days = formatDate.getDate();
            result = `${years}-${months + 1}-${days}`;
            console.log(result)
            return result
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
        console.log(result)
        return result
    }

    toDate() {
        let result = new Date(this.date);
        console.log(result)
        return result
    }
}

// if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
//     module.exports = CustomMoment;
// } else {
//     window.CustomMoment = CustomMoment;
// }


