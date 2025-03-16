import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define las rutas protegidas
const isProtectedRoute = createRouteMatcher(["/", "/api(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  try {
    // Verifica si la ruta es protegida y si el usuario no está autenticado
    if (isProtectedRoute(req)) {
      await auth.protect(); // Esto protegerá la ruta y redirigirá si no está autenticado
    }
    // Si el usuario está autenticado, permite que la solicitud continúe
    return new Response(null, { status: 200 });
  } catch (error) {
    // Manejo de errores
    console.error("Error en el middleware:", error);
    return new Response("Unauthorized", { status: 401 });
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
