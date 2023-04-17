import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { API_KEY } from "@env";

interface IPayload {
  query: string;
  page: string;
  num_pages: string;
}

export interface IJob {
  job_id: string;
  job_title: string;
  job_country: string;
  employer_logo: string;
  employer_name: string;
}

interface IResponse {
  status: string;
  request_id: string;
  parameters: IPayload;
  data: Array<IJob>;
}

const useFetch = (endpoint: string, payload: IPayload) => {
  const [data, setData] = useState<Array<IJob>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...payload },
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response: AxiosResponse<IResponse> = await axios.request(options);
      setData(response.data.data);
      setLoading(false);
    } catch (error: any) {
      setError(error);
      alert("There is an error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [API_KEY]);

  const refetch = () => {
    setLoading(true);
    fetchData();
  };

  return { data, loading, error, refetch };
};

export default useFetch;
