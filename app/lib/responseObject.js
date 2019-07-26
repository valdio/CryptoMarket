/**
 * Template return object used for simple api response handling
 * @param data Response object that is returned in case of successful response
 * @param errorMessage Message generated in case the network request fails.
 * @returns {{data: *, error: *}}
 */
export function buildResponse(data = undefined, errorMessage = undefined) {
  if (errorMessage) {
    return {data: data, error: errorMessage};
  } else {
    return {data: data, error: undefined};
  }
}
