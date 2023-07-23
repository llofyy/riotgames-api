import { ApiError } from "../utils/api-error";
import { RiotEndpoints } from "../config/riot-endpoints";
import axios, { AxiosError } from "axios";
import { ISummonerResponse } from "./interfaces";
import { IApiErrorResponse } from "../utils/interface";

export class SummonerClient {
  private apiKey: string;
  private region: string;
  constructor(apiKey: string, region: string) {
    this.apiKey = apiKey;
    this.region = region;
  }

  async getByName(
    name: string
  ): Promise<ISummonerResponse | IApiErrorResponse> {
    try {
      const { data } = await axios.get(
        `${RiotEndpoints(this.region).summoner.byName}/${name}?api_key=${
          this.apiKey
        }`
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
        `${
          RiotEndpoints(this.region).summoner.byAccountId
        }/${accountId}?api_key=${this.apiKey}`
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
        `${RiotEndpoints(this.region).summoner.byPUUID}/${puuid}?api_key=${
          this.apiKey
        }`
      );

      return data as ISummonerResponse;
    } catch (error) {
      return ApiError(error as AxiosError) as IApiErrorResponse;
    }
  }

  async getById(id: string): Promise<ISummonerResponse | IApiErrorResponse> {
    try {
      const { data } = await axios.get(
        `${RiotEndpoints(this.region).summoner.byId}/${id}?api_key=${
          this.apiKey
        }`
      );

      return data as ISummonerResponse;
    } catch (error) {
      return ApiError(error as AxiosError) as IApiErrorResponse;
    }
  }
}
