import { format, subDays, addDays } from "date-fns";

export function getTodayDate(): string {
    return format(new Date(), "yyyy-MM-dd")
}


export function getYesterdayDate(): string {
    return format(subDays(new Date(), 1), "yyyy-MM-dd")
};

export function getFiveDayAgoDate(): string {
    return format(subDays(new Date(), 5), "yyyy-MM-dd")
};


export function getTomorrowDate(): string {
    return format(addDays(new Date(), 1), "yyyy-MM-dd")
};

export function getFourDayAfterDate(): string {
    return format(addDays(new Date(), 4), "yyyy-MM-dd")
};

export function dateForMsg(): string {
    return format(new Date(), "MMM dd, yyyy")
}
