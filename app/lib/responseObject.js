export function buildResponse(data = undefined, errorMessage = undefined) {
  if (errorMessage) {
    return {data: data, error: errorMessage};
  } else {
    return {data: data, error: undefined};
  }
}
