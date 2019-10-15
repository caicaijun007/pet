export default {
    dateFormate(time, type = 'Y-m-d H:i:s') {
        if (!time) return '';
        let date = new Date(time);
        let dateTime = `${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        if (type === 'Y-m-d H:i:s') {
            return dateTime;
        } else if (type === 'Y-m-d') {
            return `${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()}`;
        } else if (type === 'H:i:s') {
            return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        } else {
            return dateTime;
        }
    },
}