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
  healthFacilities: {
    primaryHealthFacilities: [
      {
        name: {
          type: String,
          required: true,
        },
        address: {
          type: String,
          required: true,
        },
      },
    ],

    stateHospitals: [
      {
        name: {
          type: String,
          required: true,
        },
        address: {
          type: String,
          required: true,
        },
      },
    ],
  },
  geography: {
    total_land_area: {
      type: String,
      required: true,
    },
    major_traditional_quarters: {
      type: String,
      required: true,
    },
  },
  politicalStructure: {
    politicalWards: {
      type: String,
      required: true,
    },
    administrative_subdivisions: {
      type: String,
      required: true,
    },
  },
  educationInfrastructure: {
    publicPrimary: {
      total: {
        type: Number,
        required: true,
      },
      schools: [
        {
          name: {
            type: String,
            required: true,
          },
          address: {
            type: String,
          },
        },
      ],
    },

    privatePrimary: {
      total: {
        type: Number,
        required: true,
      },
      schools: [
        {
          name: {
            type: String,
            required: true,
          },
          address: {
            type: String,
          },
        },
      ],
    },

    publicSecondary: {
      total: {
        type: Number,
        required: true,
      },
      schools: [
        {
          name: {
            type: String,
            required: true,
          },
          address: {
            type: String,
          },
        },
      ],
    },

    HigherInstitutions: {
      total: {
        type: Number,
        required: true,
      },
      schools: [
        {
          name: {
            type: String,
            required: true,
          },
          address: {
            type: String,
          },
        },
      ],
    },

    collegesOfHealth: {
      total: {
        type: Number,
        required: true,
      },
      schools: [
        {
          name: {
            type: String,
            required: true,
          },
          address: {
            type: String,
          },
        },
      ],
    },
  },
});

const RegionModel = mongoose.model("Region", regionSchema);
export default RegionModel;
