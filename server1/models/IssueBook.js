const mongoose = require("mongoose");

const issueBookSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },

    issueDate: {
      type: Date,
      default: Date.now,
    },

    returnDate: {
      type: Date,
    },

    status: {
      type: String,
      enum: ["Issued", "Returned"],
      default: "Issued",
    },
    dueDate: {
  type: Date,
},

  },
   {
    timestamps: true,
  }
 
);

module.exports = mongoose.model(
  "IssueBook",
  issueBookSchema
);