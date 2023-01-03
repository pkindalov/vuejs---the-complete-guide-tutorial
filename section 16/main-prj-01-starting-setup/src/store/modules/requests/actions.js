export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.userEmail,
      message: payload.message,
    };

    const response = await fetch(
      `https://vue-http-demo-165cc-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );

    if (!response.ok) {
      const error = new Error(response.message || 'Failed to send a request');
      throw error;
    }

    const responseData = await response.json();
    console.log(responseData);
    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;
    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;

    const response = await fetch(
      `https://vue-http-demo-165cc-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json`
    );
    if (!response.ok) {
      const error = new Error(response.message || 'Failed to get requests');
      throw error;
    }

    const responseData = await response.json();
    const requests = [];
    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };

      requests.push(request);
    }
    context.commit('setRequest', requests);
  },
};
