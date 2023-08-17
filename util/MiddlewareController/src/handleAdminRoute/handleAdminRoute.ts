import { NextRequest, NextResponse } from "next/server";

type HandleAdminRoute = (req: NextRequest) => NextResponse;

const handleAdminRoute: HandleAdminRoute = (req) => {
  req.nextUrl.pathname = "/admin/index.html";

  return NextResponse.rewrite(req.nextUrl);
};

export default handleAdminRoute;
