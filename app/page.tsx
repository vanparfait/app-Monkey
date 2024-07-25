// app/page.tsx
import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout
      title="Home Page"
      description="This is the home page description"
    >
      <div>
        <h1>Welcome to My Home Page</h1>
      </div>
    </RootLayout>
  );
}
