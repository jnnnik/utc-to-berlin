const firstYear = 2018;

const HOURS = [0, 3600000, 7200000];

const CHANGEOVER_DATES = [
  [1521939600000, 1540688400000],
  [1553994000000, 1572138000000],
  [1585443600000, 1603587600000],
  [1616893200000, 1635642000000],
  [1648342800000, 1667091600000],
  [1679792400000, 1698541200000],
  [1711839600000, 1729980000000]
];

function utcToBerlin(d) {
  const yearOffset = d.getUTCFullYear() - firstYear;
  const inputTimestamp = d.getTime();
  let mod = 1;
  if(CHANGEOVER_DATES[yearOffset] === undefined) {
    throw new Error(`Unspecified year`);
  }
  if(inputTimestamp >= CHANGEOVER_DATES[yearOffset][0]) {
    if(inputTimestamp < CHANGEOVER_DATES[yearOffset][1]) {
      mod=2;
    }
  }
  d.setTime(inputTimestamp + HOURS[mod]);
  return d;
}

module.exports = {utcToBerlin};
