import mongoose from "mongoose";

const regionSchema = mongoose.Schema({
  population: {
    household_count: {
      type: Number,
      required: true,
    },
    gender: {
      male: {
        type: Number,
        required: true,
      },
      female: {
        type: Number,
        required: true,
      },
    },
    age_groups: {
      children: {
        type: Number,
        required: true,
      },
      youth: {
        type: Number,
        required: true,
      },
      elderly: {
        type: Number,
        required: true,
      },
    },
  },
  public_facilities: {
    schools: [
      {
        name: {
          type: String,
        },
        ownership: {
          type: String, //can be government owned or private
        },
      },
    ],
  },
});

const RegionModel = mongoose.model("Region", regionSchema);
export default RegionModel;
