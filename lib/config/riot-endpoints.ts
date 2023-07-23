export function RiotEndpoints(region: string) {
  return {
    summoner: {
      byName: `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name`,
      byAccountId: `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-account`,
      byPUUID: `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid`,
      byId: `https://${region}.api.riotgames.com/lol/summoner/v4/summoners`,
    },
  };
}
