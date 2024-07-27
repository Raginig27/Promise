const event = {
    resource: '/v3/search',
    path: '/v3/search',
    httpMethod: 'GET',
    headers: {
      'CloudFront-Forwarded-Proto': 'https',
      'CloudFront-Is-Desktop-Viewer': 'true',
      'CloudFront-Is-Mobile-Viewer': 'false',
      'CloudFront-Is-SmartTV-Viewer': 'false',
      'CloudFront-Is-Tablet-Viewer': 'false',
      'CloudFront-Viewer-ASN': '16509',
      'CloudFront-Viewer-Country': 'US',
      Host: '44vjjam4z5.execute-api.us-east-1.amazonaws.com',
      'User-Agent': 'Amazon CloudFront',
      Via: '1.1 390338d0f936d5f922e509635ad42b7a.cloudfront.net (CloudFront), 1.1 8268c85934c036cd715280e1605c2636.cloudfront.net (CloudFront)',
      'X-Amz-Cf-Id': 'uXIGqdz-zR20JoyHA2UZw1kZo4qugkx6uD7RPeOh0EjBrsKTHfLoIw==',
      'X-Amzn-Trace-Id': 'Root=1-667a6441-270838ec4573c8751c9f8abf',
      'X-Forwarded-For': '69.16.220.9, 64.252.74.181, 15.158.61.207',
      'X-Forwarded-Port': '443',
      'X-Forwarded-Proto': 'https'
    }
  };
  
  // Function to extract the first IP address from the 'X-Forwarded-For' header
  function getFirstXForwardedFor(event) {
    if (event.headers && event.headers['X-Forwarded-For']) {
      // Split the header value by commas and take the first element
      return event.headers['X-Forwarded-For'].split(',')[0].trim();
    }
    return null;
  }
  
  // Extract and log the first 'X-Forwarded-For' value
  const firstXForwardedFor = getFirstXForwardedFor(event);
  console.log(firstXForwardedFor); // Output: '69.16.220.9'
  