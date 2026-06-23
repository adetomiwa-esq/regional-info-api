import mongoose from "mongoose";

const regionSchema = mongoose.Schema({
  name: {
    //name of region
    type: String,
    required: true,
  },
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
          required: true,
        },
        ownership: {
          type: String, //can be government owned or private
          required: true,
        },
      },
    ],
    hospitals: [
      {
        name: {
          type: String,
          required: true,
        },
        ownership: {
          type: String, //can be government owned or private
          required: true,
        },
        address: {
          type: String,
          required: true,
        },
      },
    ],
  },
});

const RegionModel = mongoose.model("Region", regionSchema);
export default RegionModel;
