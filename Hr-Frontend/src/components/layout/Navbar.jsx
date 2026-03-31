const Navbar = () => {
  return (
    <div className="bg-white shadow p-4 flex justify-between">

      <input
        type="text"
        placeholder="Search..."
        className="border p-2 rounded"
      />

      <div>User</div>

    </div>
  );
};

export default Navbar;