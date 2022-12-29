export default {
  registerCoach(contex, data) {
    const coachData = {
      //   id: new Date().toISOString(),
      //   id: 'c3',
      id: contex.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.description,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    contex.commit('registerCoach', coachData);
  },
};
