import * as dateHelper from "../helpers/dateHelper";
import { nasaTestData } from "../testData/nasaTestData";

export class DataGenerator{
  readonly apiKey = process.env.NASA_API_KEY!;
  readonly currentDate = dateHelper.getTodayDate();
  readonly yesterdayDate = dateHelper.getYesterdayDate();
  readonly fiveDayAgo = dateHelper.getFiveDayAgoDate();
  readonly tomorrowDate = dateHelper.getTomorrowDate();
  readonly dateForMsg = dateHelper.dateForMsg();
  readonly nasaTestData = nasaTestData;
  readonly countNumber = 3;
}