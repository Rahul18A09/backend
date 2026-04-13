
const ImageKit = require("@imagekit/nodejs");


const imageKit = new ImageKit({
    privateKey: "private_4MZEWV3emoK7Rp6hMIkZg5RlZ8A="
})


async  function uploadFile(buffer) {

 const result = await imageKit.files.upload({
    file: buffer.toString("base64"),
    fileName: "image.jpg"
 })

 return result;
}

module.exports = uploadFile;