import { faker } from "@faker-js/faker";
import * as dateHelper from "../helpers/dateHelper";

const needsOptions = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Late checkout",
  "Extra pillow",
  "Spa",
];

export function generateClient() {
  return {
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    totalprice: Math.round(Number(faker.commerce.price({ min: 100, max: 500 }))),
    depositpaid: true,
    bookingdates: {
      checkin: dateHelper.getTomorrowDate(),
      checkout: dateHelper.getFourDayAfterDate(),
    },
    additionalneeds: faker.helpers.arrayElement(needsOptions),
  };
}
