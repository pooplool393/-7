const Employee = {
    name: { type: String },
    userId: { type: Number },
    startWork: { type: Date },
    endWork: { type: Date },
    createdAt: { type: Date, default: Date.now },
  }

  module.exports = Employee