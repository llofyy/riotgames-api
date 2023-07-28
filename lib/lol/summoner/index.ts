import { IRiotClient } from "../../interfaces";
import { SummonerClient } from "./summoner-class";

export class Summoner {
  private summonerClient: SummonerClient;

  constructor({ apiKey, region = "na1" }: IRiotClient) {
    this.summonerClient = new SummonerClient(apiKey, region);
  }

  async getByName(name: string) {
    return await this.summonerClient.getByName(name);
  }

  async getByAccountId(accountId: string) {
    return await this.summonerClient.getByAccountId(accountId);
  }

  async getByPUUID(puuid: string) {
    return await this.summonerClient.getByPUUID(puuid);
  }

  async getById(id: string) {
    return await this.summonerClient.getById(id);
  }
}
