import { connectDB } from "../../../config";
import { Property } from "../../../models";

// Get /api/properties
export const GET = async (request) => {
  try {
    await connectDB();
    const properties = await Property.find({});
    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", {
      status: 500,
    });
  }
};
