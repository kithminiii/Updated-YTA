module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      first: String,
      last: String,
      im: String,
      birth: String,
      email: String,
      confirm: String,
      location: String,
      pno: String,
      department: String,
      linemanager: String,
      eStatus: String,
      //published: Boolean,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const People = mongoose.model("people", schema);
  return People;
};
