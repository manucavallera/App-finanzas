import { NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define las rutas protegidas
const isProtectedRoute = createRouteMatcher(["/"]);

export default clerkMiddleware(async (auth, req) => {
  // Verifica si la ruta es protegida y si el usuario no está autenticado
  if (isProtectedRoute(req)) {
    await auth.protect(); // Esto protegerá la ruta y redirigirá si no está autenticado
  }

  return NextResponse.next(); // Continúa con la siguiente respuesta
});

export const config = {
  matcher: [
    // Omite los internos de Next.js y todos los archivos estáticos
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Siempre ejecuta para rutas API
    "/(api|trpc)(.*)",
  ],
};
