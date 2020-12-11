const mongoose = require('mongoose');


const picture = mongoose.Schema(
    {img: 
        {data: Buffer, contentType: String}
    }
);

const Picture = mongoose.model('Picture', picture);

module.exports = { Picture };