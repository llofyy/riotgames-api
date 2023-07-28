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
        region: "na1",
      }))
  );
  describe("GET BY NAME", () => {
    it("should be return data of summoner", async () => {
      const summoner = await riotClient
        .lol()
        .summoner()
        .getByName(summonerMock.name);

      expect(summoner).toEqual(summonerMock);
    });

    it("should be return error when summoner not exists", async () => {
      const summoner = await riotClient
        .lol()
        .summoner()
        .getByName("aiuhsuiahisuhas");

      expect(summoner).toEqual(errorSummonerNotFound);
    });
  });

  describe("GET BY ACCOUNT ID", () => {
    it("should be return data of summoner", async () => {
      const summoner = await riotClient
        .lol()
        .summoner()
        .getByAccountId(summonerMock.accountId);

      expect(summoner).toEqual(summonerMock);
    });

    it("should be return error when summoner not exists", async () => {
      const summoner = await riotClient
        .lol()
        .summoner()
        .getByAccountId("aiuhsuiahisuhas");

      expect(summoner).toEqual(errorSummonerBadRequest);
    });
  });

  describe("GET BY PUUID", () => {
    it("should be return data of summoner", async () => {
      const summoner = await riotClient
        .lol()
        .summoner()
        .getByPUUID(summonerMock.puuid);

      expect(summoner).toEqual(summonerMock);
    });

    it("should be return error when summoner not exists", async () => {
      const summoner = await riotClient
        .lol()
        .summoner()
        .getByPUUID("aiuhsuiahisuhas");

      expect(summoner).toEqual(errorSummonerBadRequest);
    });
  });

  describe("GET BY ID", () => {
    it("should be return data of summoner", async () => {
      const summoner = await riotClient
        .lol()
        .summoner()
        .getById(summonerMock.id);

      expect(summoner).toEqual(summonerMock);
    });

    it("should be return error when summoner not exists", async () => {
      const summoner = await riotClient
        .lol()
        .summoner()
        .getById("aiuhsuiahisuhas");

      expect(summoner).toEqual(errorSummonerBadRequest);
    });
  });
});
