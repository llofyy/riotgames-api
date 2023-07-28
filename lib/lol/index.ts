import { IRiotClient } from "../interfaces";
import { Summoner } from "./summoner";

export class Lol {
  private apiKey;
  private region;
  constructor({ apiKey, region }: IRiotClient) {
    this.apiKey = apiKey;
    this.region = region;
  }

  summoner() {
    return new Summoner({ apiKey: this.apiKey, region: this.region });
  }
}
