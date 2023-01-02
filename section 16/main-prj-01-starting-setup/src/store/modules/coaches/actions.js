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
};
