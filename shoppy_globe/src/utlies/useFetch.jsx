import { useEffect, useState } from "react";

// Custom hook to fetch data from a given endpoint
const UseFetch = (endpoint) => {
  // State to store fetched data
  const [responseData, setResponseData] = useState(null);

  // State to handle any error that occurs during fetch
  const [fetchError, setFetchError] = useState(null);

  // State to manage loading status
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This flag prevents setting state after component unmount
    let ignore = false;

    // Async function to fetch data
    const fetchData = async () => {
      setIsLoading(true); // Start loading

      try {
        const res = await fetch(endpoint); // Fetch from API

        // Throw error manually if response is not OK
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const json = await res.json(); // Parse JSON response

        // Update data state only if component is still mounted
        if (!ignore) setResponseData(json);
      } catch (err) {
        // Update error state with message
        if (!ignore) setFetchError(err.message || "Something went wrong");
      } finally {
        // Stop loading spinner/indicator
        if (!ignore) setIsLoading(false);
      }
    };

    // Call the fetch function
    fetchData();

    // Cleanup function to set ignore flag if component unmounts
    return () => {
      ignore = true;
    };
  }, [endpoint]); // Re-run when endpoint changes

  // Return all three states for use in components
  return { data: responseData, error: fetchError, loading: isLoading };
};

export default UseFetch;
