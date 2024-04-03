import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUpEvents } from "../data/UpcomingEventsSlice";
import { FETCH_KEY } from "../constants";

const useGetNestUpEvents = (type, pageNumber) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url:
        "https://gg-backend-assignment.azurewebsites.net/api/Events?code=" +
        FETCH_KEY,
      params: { page: pageNumber, type: type },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((response) => {
        const events = [...response.data.events];
        if (response.status === 200) {
          events.map((event) => dispatch(addUpEvents(event)));
        }
        setHasMore(response.data.events.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, pageNumber]);
  return { loading, error, hasMore };
};
export default useGetNestUpEvents;
