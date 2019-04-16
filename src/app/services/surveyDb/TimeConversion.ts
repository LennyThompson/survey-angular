export class TimeConversion
{
    static DATE_REGEX = /(\d+)-(\d+)-(\d+)\s(\d+):(\d+):(\d+)/;
    static toDate(strJsonDate: string): Date
    {
        let dateMatch = TimeConversion.DATE_REGEX.exec(strJsonDate);
        if(dateMatch !== null)
        {
            return new Date(
                Date.UTC(
                    Number(dateMatch[1]),
                    Number(dateMatch[2]) - 1,
                    Number(dateMatch[3]),
                    Number(dateMatch[4]),
                    Number(dateMatch[5]),
                    Number(dateMatch[6])
                )
            );
        }
        return null;
    }

    static fromDate(dateFrom: Date): string
    {
        return dateFrom.toISOString();
    }
}