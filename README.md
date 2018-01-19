# utc-to-berlin
*single purpose library to transform UTC dates to the Europe/Berlin timezone*
## What this *does* do
`utc-to-berlin` exposes a function `utcToBerlin(date:Date)`. Throw in a JavaScript `Date` object and it will be **modifed** to represent the same time in Europe/Berlin, with respect to Daylight Savings Time.
## What this does *not* do
This library is pre-filled with switchover dates from 2018 through 2023 so it won't work with dates in 2017 or 2024 or... well, you get the idea.
`utcToBerlin` also does not return a Date object that conforms to what you might be used to from working with Date objects (implying one can actually get used to working with Date objects to begin with); it is **imperative** that you exclusively use UTC-Methods when retreiving values from it. This might seem counter-intuitive, but keep in mind that the only (sane and working) way to retreive values from a JavaScript Date object that aren't immediately assumed to respect local timezones is using the UTC methods.
## Again, keep in mind:
This is a single purpose library. It is not pretty, but it works. It only works if you use *UTC-methods in order to retreive values from the resulting Date object.
## License
See LICENSE.txt
## Version History
### 0.1.0
- Initial release
