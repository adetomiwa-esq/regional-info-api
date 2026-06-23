import mongoose from "mongoose";
import dotenv from "dotenv";
import Region from "../models/region.model.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

await Region.create({
  population: {
    household_count: 2450,
    gender: {
      male: 5870,
      female: 6230,
    },
    age_groups: {
      children: 4200,
      youth: 5300,
      elderly: 2600,
    },
  },
  public_facilities: {
    schools: [
      {
        name: "Odo-Ori Community Primary School",
        ownership: "Government",
        address: "School Road, Odo-Ori, Iwo, Osun State",
      },
      {
        name: "Baptist Primary School Odo-Ori",
        ownership: "Government",
        address: "Baptist Church Street, Odo-Ori, Iwo, Osun State",
      },
      {
        name: "Divine Wisdom Nursery and Primary School",
        ownership: "Private",
        address: "Odo-Ori Market Road, Iwo, Osun State",
      },
      {
        name: "Success Model College",
        ownership: "Private",
        address: "Success Avenue, Odo-Ori Junction, Iwo, Osun State",
      },
      {
        name: "Odo-Ori Grammar School",
        ownership: "Government",
        address: "Grammar School Road, Odo-Ori, Iwo, Osun State",
      },
    ],
    hospitals: [
      {
        name: "Odo-Ori Primary Health Centre",
        ownership: "Government",
        address: "Health Centre Road, Odo-Ori, Iwo, Osun State",
      },
      {
        name: "Mercy Care Clinic",
        ownership: "Private",
        address: "Along Odo-Ori Market Road, Iwo, Osun State",
      },
      {
        name: "Divine Healing Medical Centre",
        ownership: "Private",
        address: "Odo-Ori Junction, Iwo, Osun State",
      },
    ],
  },
});

console.log("Creating region successful");
process.exit();
