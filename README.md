- Communication Contract -


_**Data request from Microservice A**_

  
1. To request data, make an HTTP POST request to:
http://localhost:3030/bmi_fetch   (local deployment) or https://microservicea-production.up.railway.app/bmi_fetch (for remotely deployed microservice)

 
2. Include JSON Body Params: 
**Key      Type      	   Description**
age   	 Number	   The age of the person
gender	 String	   Either "male" or "female"
height	 Number	   Height in inches
weight	 Number	   Weight in pounds

3. Example of request: 

async function fetchBMI(age, gender, height, weight) {
  try {
     //const response = await fetch(`https://microservicea-production.up.railway.app/bmi_fetch`, {
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


_**Recieve data from Microservice A**_

1. Responce will be a number, calculated bmi.
   
2. Responce handling:
    const result = await fetchBMI(Number(age), gender, Number(height), Number(weight));
    console.log('BMI Result:', result);



__**UML sequence diagram: **__

I. User inputs person's data into app: age, gender, height, and weight.
II. The app makes a request to the microservice A and provides person's data.
III. Microservice calculates the BMI.
IV. Microservice sends responce with BMI number. Lifecycle terminated.
V. The app provides BMI info to the User. Lifecycle terminated. 

![image](https://github.com/user-attachments/assets/68391881-c5a0-464d-89e0-6c22b489c9b1)




   
