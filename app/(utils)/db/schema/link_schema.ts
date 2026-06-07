import { Schema } from "mongoose";
import mongoose from "mongoose";
import { ILink } from "../model/ilink";

/*
 * Schema for mongoDb of Link
 */
const LinkSchema: Schema = new Schema({
    category: {
        type: String,
        required: true
    },
    sub: {
        type: String,
        default: null
    },
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    is_ext: {
        type: Boolean,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

const LinkModel = mongoose.models.Link || mongoose.model<ILink>('Link', LinkSchema)
export default LinkModel