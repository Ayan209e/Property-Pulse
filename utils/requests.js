const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch all properties
export async function fetchProperties() {
  try {
    // Handle the case where the API domain is not set
    if (!apiDomain) {
      return [];
    }
    const res = await fetch(`${apiDomain}/properties`);
    if (!res.ok) {
      throw new Error("Failed to fetch properties");
    }
    return await res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

// Fetch a single property
export async function fetchProperty(id) {
  try {
    // Handle the case where the API domain is not set
    if (!apiDomain) {
      return null;
    }
    const res = await fetch(`${apiDomain}/properties/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch property");
    }
    return await res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}
