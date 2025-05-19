- Communication Contract -


_**Data request from Microservice A**_

async function fetchBMI(age, gender, height, weight) {
  try {
    // Option 1: URL for remotelydeployed microservice
    const response = await fetch(`https://microservicea-production.up.railway.app/bmi_fetch`, {
    // Option2: URL for local deployment
    const response = await fetch(`http://localhost:3030/bmi_fetch`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ age, gender, height, weight }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw {
        status: response.status,
        statusText: response.statusText,
        errorData,
      };
    }

    return await response.json();
  } catch (err) {
    throw err;
  }
}

