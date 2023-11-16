export class Transformer {
  constructor() {}

  forAppTable(data) {
    let transformedData = [];
    for (let index in data) {
      let item = data[index];
      transformedData.push({
        columns: {
          id: item._id,
          device_id: item.uplink.DeviceId,
          time: convertTime(item.uplink.Time),
          tempurature: item.uplink.Data.temperature,
          humidity: item.uplink.Data.humidity,
          pressure: item.uplink.Data.pressure,
        },
      });
    }
    return transformedData;
  }
}

function convertTime(t) {
  let dateFormatter = new Intl.DateTimeFormat("de-CH"),
    timeFormatter = new Intl.DateTimeFormat("de-CH", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  let date = new Date(t);
  return `${dateFormatter.format(date)} - ${timeFormatter.format(date)}`;
}
