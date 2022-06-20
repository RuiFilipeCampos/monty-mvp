import { NextApiRequest, NextApiResponse } from "next/types";

import httpProxyMiddleware from 'next-http-proxy-middleware';

const SERVER_BASE_URL = process.env.DEV 
                          ? "http://localhost:8000" 
                          : "http://server:8000"

export default (req: NextApiRequest, res: NextApiResponse) => httpProxyMiddleware(req, res, {
  // You can use the `http-proxy` option
  target: SERVER_BASE_URL,
});

export const config = {
  api: {
    responseLimit: '50mb',
  },
}