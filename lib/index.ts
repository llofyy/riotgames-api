import { IRiotClient } from "./interfaces";
import { Lol } from "./lol";
import { SummonerClient } from "./lol/summoner/summoner-class";

export class RiotClient {
  private apiKey;
  private region;
  constructor({ apiKey, region = "na1" }: IRiotClient) {
    this.apiKey = apiKey;
    this.region = region;
  }

  lol() {
    return new Lol({ apiKey: this.apiKey, region: this.region });
  }
}
