import mongoose from "mongoose";
import dotenv from "dotenv";
import Region from "../models/region.model.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

await Region.create({
  population: {
    household_count: 12450,
    gender: {
      male: 34200,
      female: 31800,
    },
    age_groups: {
      children: 18500,
      youth: 29400,
      elderly: 6100,
    },
  },
  healthFacilities: {
    primaryHealthFacilities: [
      {
        name: "Garki Primary Health Centre",
        address: "14 Garki Road, Abuja",
      },
      {
        name: "Wuse Community Health Clinic",
        address: "Plot 7, Wuse Zone 3, Abuja",
      },
      {
        name: "Karu Primary Health Centre",
        address: "23 Karu Site Road, Nasarawa",
      },
    ],
    stateHospitals: [
      {
        name: "Maitama District Hospital",
        address: "Off Aguiyi Ironsi Street, Maitama, Abuja",
      },
      {
        name: "Asokoro General Hospital",
        address: "1 Hospital Drive, Asokoro, Abuja",
      },
    ],
  },
  geography: {
    total_land_area: "1,769 km²",
    major_traditional_quarters: "Garki, Wuse, Asokoro, Maitama, Gwarinpa",
  },
  politicalStructure: {
    politicalWards: "12 Wards",
    administrative_subdivisions: "6 Area Councils",
  },
  educationInfrastructure: {
    publicPrimary: {
      total: 3,
      schools: [
        {
          name: "Garki Public Primary School",
          address: "12 Elm Street, Garki, Abuja",
        },
        {
          name: "Unity Public Primary School",
          address: "45 Broad Avenue, Wuse, Abuja",
        },
        {
          name: "Sunrise Public Primary School",
          address: "7 School Lane, Karu, Nasarawa",
        },
      ],
    },
    privatePrimary: {
      total: 3,
      schools: [
        {
          name: "Bright Minds Private Primary School",
          address: "22 Oak Close, Maitama, Abuja",
        },
        {
          name: "Little Stars Private Academy",
          address: "89 Palm Drive, Gwarinpa, Abuja",
        },
        {
          name: "Pearls of Wisdom Primary School",
          address: "3 Maple Court, Asokoro, Abuja",
        },
      ],
    },
    publicSecondary: {
      total: 3,
      schools: [
        {
          name: "Federal Government College Abuja",
          address: "1 FGC Road, Asokoro, Abuja",
        },
        {
          name: "Government Secondary School Garki",
          address: "54 Garki Bypass, Abuja",
        },
        {
          name: "Command Secondary School Abuja",
          address: "Military Cantonment, Mogadishu Barracks, Abuja",
        },
      ],
    },
    HigherInstitutions: {
      total: 3,
      schools: [
        {
          name: "University of Abuja",
          address: "Airport Road, Gwagwalada, Abuja",
        },
        {
          name: "Nigerian Defence Academy",
          address: "Mando Road, Kaduna",
        },
        {
          name: "Nile University of Nigeria",
          address: "Plot 681, Cadastral Zone C-00, Jabi, Abuja",
        },
      ],
    },
    collegesOfHealth: {
      total: 2,
      schools: [
        {
          name: "College of Health Sciences, University of Abuja",
          address: "Airport Road, Gwagwalada, Abuja",
        },
        {
          name: "FCT College of Health Technology",
          address: "Zuba, Abuja Municipal Area Council, Abuja",
        },
      ],
    },
  },
});

console.log("Creating region successful");
process.exit();
