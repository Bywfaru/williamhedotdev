import { NextMiddleware, NextResponse } from "next/server";
import MiddlewareController from "./util/MiddlewareController";

const middleware: NextMiddleware = (req) => {
  const { nextUrl } = req;
  const { pathname } = nextUrl;

  if (pathname === "/admin") return MiddlewareController.handleAdminRoute(req);

  return NextResponse.next();
};

export default middleware;
