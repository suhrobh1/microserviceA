- Communication Contract -


## Data request from Microservice A

  
1. To request data, make an HTTP POST request to:
http://localhost:3030/bmi_fetch   (local deployment) or https://microservicea-production.up.railway.app/bmi_fetch (for remotely deployed microservice)

 
2. Include JSON Body Params: 
**Key      Type      	   Description**
age   	 Number	   The age of the person
gender	 String	   Either "male" or "female"
height	 Number	   Height in inches
weight	 Number	   Weight in pounds

3. Example of request: 
(``
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
``)

_**Recieve data from Microservice A**_

1. Responce will be a number, calculated bmi.
   
2. Responce handling:
    const result = await fetchBMI(Number(age), gender, Number(height), Number(weight));
    console.log('BMI Result:', result);



## UML sequence diagram:  

* I. User inputs person's data into app: age, gender, height, and weight.
* II. The app makes a request to the microservice A and provides person's data.
* III. Microservice calculates the BMI.
* IV. Microservice sends responce with BMI number. Lifecycle terminated.
* V. The app provides BMI info to the User. Lifecycle terminated. 

![image](https://github.com/user-attachments/assets/68391881-c5a0-464d-89e0-6c22b489c9b1)


_**Mitigation Plan**_

For which teammate did you implement “Microservice A”? **_ Jedidiah Backus_**
What is the current status of the microservice? Hopefully, it’s done!
If the microservice isn’t done, which parts aren’t done and when will they be done?
How is your teammate going to access your microservice? Should they get your code from GitHub (if so, provide a link to your public or private repo)? Should they run your code locally? Is your microservice hosted somewhere? Etc.
If your teammate cannot access/call YOUR microservice, what should they do? Can you be available to help them? What’s your availability?
If your teammate cannot access/call your microservice, by when do they need to tell you? Provide a specific date to ensure they have a clear deadline.
Is there anything else your teammate needs to know? Anything you’re worried about? Any assumptions you’re making? Any other mitigations / backup plans you want to mention or want to discuss with your teammate?




   
