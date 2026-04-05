export async function handler() {

  try {

    const response = await fetch(
      "https://backend-torentify.onrender.com/api/jobs/getJobs"
    );

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Cache-Control":
          "public, max-age=0, s-maxage=43200, stale-while-revalidate=86400",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data),
    };

  } catch (error) {

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "API failed",
      }),
    };

  }

}