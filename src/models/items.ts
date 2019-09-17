import * as mongoose from 'mongoose';

interface ItemInterface {
    name: String;
    owner: String;
}

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
})

export default mongoose.model<ItemInterface & mongoose.Document>('Item', ItemSchema)