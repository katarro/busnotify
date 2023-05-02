import { useState } from "react";
import axios from "axios";

function useBusStopData() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  async function getBusStopData(paradero) {
    try {
      const response = await axios.get(
        "https://api.xor.cl/red/bus-stop/PA443"
        //`https://api.xor.cl/red/bus-stop/${paradero}`
      );
      const services = response.data.services;
      setData(services);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  return { data, loading, getBusStopData };
}
export default useBusStopData;
