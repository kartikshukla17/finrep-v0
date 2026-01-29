export default function TinaAdminPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">TinaCMS Admin</h1>
      <p className="mb-4">
        To access the TinaCMS admin interface, run the development server with:
      </p>
      <code className="block bg-gray-100 p-4 rounded mb-4">
        npx tinacms dev -c &quot;next dev&quot;
      </code>
      <p>
        Then visit{" "}
        <a href="/admin/index.html" className="text-blue-600 underline">
          /admin/index.html
        </a>{" "}
        to access the visual editor.
      </p>
    </div>
  );
}
