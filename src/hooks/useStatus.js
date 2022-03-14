import useSWR from "swr";
export const useStatus = (id = 1) => {
  const { data, error } = useSWR(
    `/api/tasks/${id}`,
    (url) => fetch(url, {}).then((r) => r.json()),
    {
      revalidateOnReconnect: true,
    }
  );

  return {
    data: data,
    isError: error,
    isLoading: !error && !data,
  };
};

// SORT BY: All inactive, all in progress, then the rest of the entries sorted by Completion Date
