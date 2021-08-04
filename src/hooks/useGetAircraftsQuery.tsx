import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import { useAppContext } from "../context/AppContext";

export const useGetAircraftsQuery = () => {
  const [appContext, setAppContext] = useAppContext();

  const { data, isLoading, isSuccess, isError, error } = useQuery<
    any,
    AxiosError
  >(
    ["Aircraft"],
    async (): Promise<any> =>
      await axios.get(
        "https://infinite-dawn-93085.herokuapp.com/aircrafts/GABCD"
      ),
    {
      onError: (error: Error) => console.error(`Error '${error.message}'`),
      onSuccess: () =>
        setAppContext({
          ...appContext,
          submitted: false,
          usersPerPageChanged: false,
        }),
    }
  );

  return { aircraft: data, isSuccess, isLoading, isError, error };
};
