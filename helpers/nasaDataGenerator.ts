import * as dateHelper from "../helpers/dateHelper";
import { nasaTestData } from "../testData/nasaTestData";

export class DataGenerator{
  readonly apiKey = process.env.NASA_API_KEY!;
  readonly currentDate = dateHelper.getDateFromToday(0);
  readonly yesterdayDate = dateHelper.getDateFromToday(-1);
  readonly fiveDayAgo = dateHelper.getDateFromToday(-5);
  readonly tomorrowDate = dateHelper.getDateFromToday(1);
  readonly dateForMsg = dateHelper.dateForMsg();
  readonly nasaTestData = nasaTestData;
  readonly countNumber = 3;
}