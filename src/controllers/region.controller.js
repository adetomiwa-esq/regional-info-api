import Region from "../models/region.model.js";

export const createRegion = async (req, res) => {
  try {
    const region = await Region.create(req.body);

    res.status(201).json({
      message: "Region created successfully",
      region,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong! Failed to create Region",
    });
  }
};

export const getRegions = async (req, res) => {
  try {
    const regions = await Region.find();

    if (!regions || !regions.length) {
      return res.status(400).json({
        message: "Regions Not Found",
      });
    }

    res.status(200).json({
      message: "Regions fetch successful",
      regions,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong! Failed to fetch Regions",
    });
  }
};

export const getSingleRegion = async (req, res) => {
  try {
    const region = await Region.findById(req.params.id);

    if (!region) {
      return res.status(404).json({
        message: "Region Not Found",
      });
    }

    res.status(200).json({
      message: "Region Fetch Successful",
      region,
    });
  } catch (error) {
    res.status(500).json({
      message: `Something went wrong! Failed to fetch region with id- ${req.params.id}`,
    });
  }
};
