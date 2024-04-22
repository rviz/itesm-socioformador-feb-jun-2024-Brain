// Use "use client" directive (Next.js 13+)
"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";

// If the useUser hook or Auth0 package does not provide types, you will need to define them or install @types/nextjs-auth0 if available.
interface User {
  name: string;
  picture: string;
  email: string;
}

export default function Page() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <Avatar>
          <AvatarImage src={user.picture} alt={user.name} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <Card>
          <CardHeader>
            <CardTitle>Hello, {user.name}</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    )
  );
}
