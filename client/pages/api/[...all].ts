import { NextApiRequest, NextApiResponse } from "next/types";

import httpProxyMiddleware from 'next-http-proxy-middleware';



export default (request: NextApiRequest, response: NextApiResponse) => {
  httpProxyMiddleware(
    request,
    response,
    { target: process.env.SERVER_BASE_URL, }
  ); // httpProxyMiddleware
} /* lambda */

export const config = {
  api: {
    responseLimit: '50mb',
  },
}
