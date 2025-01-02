const getEncodedUrlId = (values: (number | string)[]) =>
  encodeURI(values.join("-"));

export default getEncodedUrlId;
