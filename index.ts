import { IRiotClient } from "./lib/interfaces";
import { SummonerClient } from "./lib/summoner";

export class RiotClient {
  private summonerClient: SummonerClient;

  constructor({ apiKey }: IRiotClient) {
    this.summonerClient = new SummonerClient(apiKey);
  }

  async getSummonerByName(name: string) {
    return await this.summonerClient.getByName(name);
  }

  async getSummonerByAccountId(accountId: string) {
    return await this.summonerClient.getByAccountId(accountId);
  }

  async getSummonerByPUUID(puuid: string) {
    return await this.summonerClient.getByPUUID(puuid);
  }

  async getSummonerById(id: string) {
    return await this.summonerClient.getById(id);
  }
}
