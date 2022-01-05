class GitHub {
  constructor() {
    this.client_id = "c2576757a073c2c0bc9b";
    this.client_secret = "38560a3c42755e2284b8dc8c2a30de761f4a7fea";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}
