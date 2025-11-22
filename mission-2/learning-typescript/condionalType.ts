type UserRole = {
  admin: "ADMIN";
  viewer: "VIEWER";
};

type IsAccessed<T> = T extends keyof UserRole ? true : false;

type AdminAccessed = IsAccessed<"admin">;
