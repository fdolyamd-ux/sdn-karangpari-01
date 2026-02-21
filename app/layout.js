export const metadata = {
  title: "SDN Karangpari 01",
  description: "Website Resmi SD Negeri Karangpari 01 Kecamatan Bantarkawung Kabupaten Brebes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body style={{margin:0}}>
        {children}
      </body>
    </html>
  );
}
