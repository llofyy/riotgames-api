import { ApiError } from "../utils/api-error";
import { RiotEndpoints } from "../config/riot-endpoints";
import axios, { AxiosError } from "axios";
import { ISummonerResponse } from "./interfaces";
import { IApiErrorResponse } from "../utils/interface";

export class SummonerClient {
  private apiKey: string;
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async getByName(
    name: string
  ): Promise<ISummonerResponse | IApiErrorResponse> {
    try {
      const { data } = await axios.get(
        `${RiotEndpoints.summoner.byName}/${name}?api_key=${this.apiKey}`
      );

      return data;
    } catch (error) {
      return ApiError(error as AxiosError) as IApiErrorResponse;
    }
  }

  async getByAccountId(
    accountId: string
  ): Promise<ISummonerResponse | IApiErrorResponse> {
    try {
      const { data } = await axios.get(
        `${RiotEndpoints.summoner.byAccountId}/${accountId}?api_key=${this.apiKey}`
      );

      return data as ISummonerResponse;
    } catch (error) {
      return ApiError(error as AxiosError) as IApiErrorResponse;
    }
  }

  async getByPUUID(
    puuid: string
  ): Promise<ISummonerResponse | IApiErrorResponse> {
    try {
      const { data } = await axios.get(
        `${RiotEndpoints.summoner.byPUUID}/${puuid}?api_key=${this.apiKey}`
      );

      return data as ISummonerResponse;
    } catch (error) {
      return ApiError(error as AxiosError) as IApiErrorResponse;
    }
  }

  async getById(id: string): Promise<ISummonerResponse | IApiErrorResponse> {
    try {
      const { data } = await axios.get(
        `${RiotEndpoints.summoner.byId}/${id}?api_key=${this.apiKey}`
      );

      return data as ISummonerResponse;
    } catch (error) {
      return ApiError(error as AxiosError) as IApiErrorResponse;
    }
  }
}
