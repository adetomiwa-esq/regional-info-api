import mongoose from "mongoose";

const regionSchema = mongoose.Schema({
  population: {
    household_count: {
      type: number,
      required: true,
    },
    gender: {
      male: {
        type: number,
        required: true,
      },
      female: {
        type: number,
        required: true,
      },
    },
  },
});

const RegionModel = mongoose.model("Region", regionSchema);
export default RegionModel;
