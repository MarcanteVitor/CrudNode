const { parse } = require('date-fns');

const parseDate = (data) => {
    const formattedDate = parse(data, 'dd-MM-yyyy', new Date());

    return formattedDate
}

module.exports = { parseDate }