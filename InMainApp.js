async function fetchHotels(age, gender, height, weight) {
    try {
     const response = await fetch(`https://microservicea-production.up.railway.app/bmi_fetch`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ age, gender, height, weight}),
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