export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-screen h-screen bg-black">
      <div className="flex justify-center">
        {children}
      </div>
    </section>
  );
}
