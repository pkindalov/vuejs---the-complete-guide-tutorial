export default {
  async registerCoach(contex, data) {
    const userId = contex.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.description,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const response = await fetch(
      `https://vue-http-demo-165cc-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );

    // const responseData = await response.json();
    if (!response.ok) {
      //error handling here later
    }

    contex.commit('registerCoach', {
      ...coachData,
      id: userId,
    });
  },
  async loadCoaches(contex, payload) {

    if (!payload.forceRefresh && !contex.getters.shouldUpdate) return;
    const response = await fetch(
      'https://vue-http-demo-165cc-default-rtdb.europe-west1.firebasedatabase.app/coaches.json'
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch data.');
      throw error;
    }

    const coaches = [];
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };

      coaches.push(coach);
    }
    contex.commit('setCoaches', coaches);
    contex.commit('setFetchTimestamp');
  },
};
