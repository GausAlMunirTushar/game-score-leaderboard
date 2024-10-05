import { NextResponse } from "next/server";

export const config = {
	matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};

export function middleware(req) {
	const token = req.cookies.get("token");

	// const isAuthenticated = token ? true : false;

	const isAuthenticated = true;

	const isLoginRoute = req.nextUrl.pathname === "/login";
	const isRootRoute = req.nextUrl.pathname === "/";

	if (isAuthenticated && isLoginRoute) {
		return NextResponse.redirect(new URL(`/`, req.url));
	}

	if (!isAuthenticated && isLoginRoute) {
		return NextResponse.next();
	}

	if (!isAuthenticated && isRootRoute) {
		return NextResponse.redirect(new URL(`/login`, req.url));
	}

	if (isAuthenticated && isRootRoute) {
		return NextResponse.next();
	}

	return NextResponse.next();
}
