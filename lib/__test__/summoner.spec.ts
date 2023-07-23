import { RiotClient } from "..";
import "dotenv/config";
import {
  errorSummonerNotFound,
  summonerMock,
  errorSummonerBadRequest,
} from "./mock";

describe("Summoner", () => {
  let riotClient: RiotClient;
  beforeAll(
    () =>
      (riotClient = new RiotClient({
        apiKey: process.env.API_KEY || "",
        region: "br1",
      }))
  );
  describe("GET BY NAME", () => {
    it("should be return data of summoner", async () => {
      const summoner = await riotClient.getSummonerByName(summonerMock.name);

      expect(summoner).toEqual(summonerMock);
    });

    it("should be return error when summoner not exists", async () => {
      const summoner = await riotClient.getSummonerByName("aiuhsuiahisuhas");

      expect(summoner).toEqual(errorSummonerNotFound);
    });
  });

  describe("GET BY ACCOUNT ID", () => {
    it("should be return data of summoner", async () => {
      const summoner = await riotClient.getSummonerByAccountId(
        summonerMock.accountId
      );

      expect(summoner).toEqual(summonerMock);
    });

    it("should be return error when summoner not exists", async () => {
      const summoner = await riotClient.getSummonerByAccountId(
        "aiuhsuiahisuhas"
      );

      expect(summoner).toEqual(errorSummonerBadRequest);
    });
  });

  describe("GET BY PUUID", () => {
    it("should be return data of summoner", async () => {
      const summoner = await riotClient.getSummonerByPUUID(summonerMock.puuid);

      expect(summoner).toEqual(summonerMock);
    });

    it("should be return error when summoner not exists", async () => {
      const summoner = await riotClient.getSummonerByPUUID("aiuhsuiahisuhas");

      expect(summoner).toEqual(errorSummonerBadRequest);
    });
  });

  describe("GET BY ID", () => {
    it("should be return data of summoner", async () => {
      const summoner = await riotClient.getSummonerById(summonerMock.id);

      expect(summoner).toEqual(summonerMock);
    });

    it("should be return error when summoner not exists", async () => {
      const summoner = await riotClient.getSummonerById("aiuhsuiahisuhas");

      expect(summoner).toEqual(errorSummonerBadRequest);
    });
  });
});
