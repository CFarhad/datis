import { useState } from "react";
import { QueryCache, useMutation, useQuery } from "@tanstack/react-query";
import { notifications } from "@mantine/notifications";
import ApiCaller from "../libs/axiosEndpoint";
import axios, { AxiosError } from "axios";

export function useData(item, params, ...other) {
  return useQuery({
    queryKey: item,
    queryFn: async () => {
      let { data } = await ApiCaller.get(item[0]);
      return data;
    },
    staleTime: 0,
    refetchInterval: 0,
    cacheTime: 0,
    meta: { err: 123 },
    retry: 2,
    retryOnMount: false,
    refetchOnWindowFocus: false,
    ...other,
  });
}

export function useSend({item, params,axiosOption}) {
  return useMutation({
    mutationKey: item,
    mutationFn: async (bodyData) => {
      let { data } = await ApiCaller.post(item[0], bodyData,axiosOption);
      return data;
    },
  });
}

export const useFileUploadMutation = (url) => {
  const [progress, setProgress] = useState(0);

  const mutation = useMutation({
    mutationKey: url,
    mutationFn: async (bodyData) => {
      let { data } = await ApiCaller.post(url, bodyData, {
        onUploadProgress: (ev) =>{
          setProgress(Math.round((ev.loaded / ev.total) * 100));
        },
        headers: {
          "Content-type": "multipart/form-data",
          'Access-Control-Allow-Origin': '*',
        },
      });
      return data;
    }
  })

  return { ...mutation, progress };
};

export const queryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: false, // 30seconds
      cacheTime: false, //30 seconds
      refetchOnMount: "always",
      refetchOnWindowFocus: "always",
      refetchOnReconnect: "always",
      refetchInterval: false, //30 seconds
      refetchIntervalInBackground: false,
      suspense: false,
    },
    mutations: {
      retry: 2,
    },
  },
};
