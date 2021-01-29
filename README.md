# react-decimal-age

![](https://github.com/kacp3rrr/react-decimal-age/blob/master/assets/cover.png)

Find your age to a precise and live-updating decimal

# How It Works

When you submit the date, it is then sent to [DecimalAge.tsx](src/DecimalAge.tsx), where the date is then parsed into a unix timestamp. Then, every 50 ms, that parsed date is subtracted from the current date in unix timestamp, and then converted into a year decimal. Additionally, the parsed date is then run through [convert.ts](src/util/convert.ts) to be parsed into years, months and days

![](https://github.com/kacp3rrr/react-decimal-age/blob/master/assets/how1.png)
