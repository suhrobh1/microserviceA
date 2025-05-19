import aiohttp
import asyncio

async def fetch_bmi(age, gender, height, weight):
    url = "https://microservicea-production.up.railway.app/bmi_fetch"
    payload = {
        "age": age,
        "gender": gender,
        "height": height,
        "weight": weight
    }
    headers = {
        "Content-Type": "application/json"
    }

    async with aiohttp.ClientSession() as session:
        try:
            async with session.post(url, json=payload, headers=headers) as response:
                if response.status != 200:
                    error_data = await response.json()
                    raise Exception({
                        "status": response.status,
                        "statusText": response.reason,
                        "errorData": error_data
                    })
                return await response.json()
        except Exception as err:
            raise err
