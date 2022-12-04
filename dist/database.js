"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startConnection = void 0;
const mongoose_1 = require("mongoose");
// export async function startConnection(){
//    await connect('mongodb://localhost/photo-gallery-db', {
//         // useNewUrlParser: true,
//         //   useFindAndModify: false
//     });
//     console.log('Database is connected')
// }
async function startConnection() {
    await (0, mongoose_1.connect)('mongodb+srv://isaacal:Bart1234@cluster0.d6g0oem.mongodb.net/?retryWrites=true&w=majority', {
    // useNewUrlParser: true,
    //   useFindAndModify: false
    });
    console.log('Database is connected');
}
exports.startConnection = startConnection;
