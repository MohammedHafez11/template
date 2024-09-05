import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "reactstrap";

export default function UserProfileMenu() {
  const { data: session, status } = useSession();
  
  const loading = status === "loading";

  return (
    <ul className="friend-list">
      {loading ? (
        <li>Loading...</li>
      ) : session ? (
        <div>
          <li>
            <strong>{session.user.name}</strong>
          </li>
          <Button
            onClick={() => signOut({ callbackUrl: "/", redirect: true })}
            style={{ "background": "var(--theme-gradient-button)", border: "none", borderRadius: "5px", padding: "10px 20px", fontSize: "12px", fontWeight: "600", display: "block", margin: "auto", marginTop: "10px" }}
          >
            Logout
          </Button>
        </div>
      ) : (
        <Button
        style={{ "background": "var(--theme-gradient-button)", border: "none", borderRadius: "5px", padding: "10px 20px", fontSize: "12px", fontWeight: "600", display: "block", margin: "auto", marginTop: "10px" }}
          onClick={() => {
            signIn("id-server", {
              callbackUrl: "/",
            });
          }}
        >
          Login
        </Button>
      )}
    </ul>
  );
}