const { Schema, model } = require("mongoose");

const MovieSchema = new Schema(
  {
    title: { type: String },
    director: { type: String},
    stars: {type: [ String ] },
    image: {type: String},
    description: {type: String},
    showTimes: {type: [String]}
    // getYear retorna o ano atual menos 1900, por isso precisamos somar 1900 no resultado
  },
  {
    toJSON: {
      transform: (doc, returnDoc) => {
        delete returnDoc.__v;
        return returnDoc;
      },
    },
  }
);

const MovieModel = model("Movie", MovieSchema);

module.exports = MovieModel;
