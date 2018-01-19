const firstYear = 2018;

const HOURS = [0, 3600000, 7200000];

const CHANGEOVER_DATES = [
  [1521939600000, 1540688400000],
  [1553994000000, 1572138000000],
  [1585443600000, 1603587600000],
  [1616893200000, 1635642000000],
  [1648342800000, 1667091600000],
  [1679792400000, 1698541200000]
];

function utcStringToBerlinDate(dateString) {
  const dateMatch = dateString.match(/\d+/g)
  const inputTimestamp = Date.UTC(dateMatch[0], +(dateMatch[1]) - 1, dateMatch[2], dateMatch[3], dateMatch[4], dateMatch[5]);
  const yearOffset = +(dateMatch[0]) - firstYear;
  let mod = 1;
  if(CHANGEOVER_DATES[yearOffset] === undefined) {
    throw new Error(`Unspecified year`);
  }
  if(inputTimestamp >= CHANGEOVER_DATES[yearOffset][0]) {
    if(inputTimestamp < CHANGEOVER_DATES[yearOffset][1]) {
      mod=2;
    }
  }
  const date = new Date();
  date.setTime(inputTimestamp + HOURS[mod]);
  return date;
}

module.exports = {utcStringToBerlinDate};
