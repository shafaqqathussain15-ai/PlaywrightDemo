import {test , expect} from "@playwright/test"


test("API Test Post", async ({request})=>{

    const authData = {
        username: 'admin',
        password: 'password123'
    }

    const response = await request.post("https://restful-booker.herokuapp.com/auth",{headers: {"Content-Type": "application/json"},
        data:authData
    });

    const jsonResponse =  await response.json();
    const authToken = jsonResponse.token;
    console.log(`Token is: ${authToken}`);
    console.log(jsonResponse);

   })


const newData = {
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}
const newBookingResponse = await request.post("https://restful-booker.herokuapp.com/booking",{headers: {"Content-Type": "application/json"},
        data:newData
    })

    const newBookingData = await newBookingResponse.json();

    console.log(newBookingData);

    const bookingId = newBookingData.bookingid;

    console.log(`Booking ID is: ${bookingId}`);


    await request.put(`https://restful-booker.herokuapp.com/booking/${bookingId}`, {headers: {"Content-Type": "application/json", "Accept": "application/json", "Cookie": `token=${authToken}`},
        data: {
            "firstname" : "Qazi",
            "lastname" : "Hussain",
            "totalprice" : 2221,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Breakfast"
        }
    });
