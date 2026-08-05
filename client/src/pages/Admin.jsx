import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/leads");
      setLeads(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
const navigate = useNavigate();

const logout = () => {
  localStorage.removeItem("token");
  alert("Logged out successfully!");
  navigate("/login");
};
  const deleteLead = async (id) => {
    if (!window.confirm("Delete this lead?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/leads/${id}`);
      fetchLeads();
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  const updateStatus = async (id) => {
    try {
      await axios.patch(
        `http://localhost:5000/api/leads/${id}/status`
      );

      fetchLeads();
    } catch (err) {
      console.error(err);
      alert("Status update failed");
    }
  };

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-3xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
        <div className="flex justify-end mb-6">
  <button
    onClick={logout}
    className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-semibold"
  >
    Logout
  </button>
</div>

      <h1 className="text-5xl font-bold text-center mb-8">
        Lead Dashboard
      </h1>

      {/* Dashboard Cards */}

      <div className="grid md:grid-cols-3 gap-5 mb-8">

        <div className="bg-blue-600 rounded-lg p-6 text-center">
          <h2>Total Leads</h2>
          <p className="text-4xl font-bold">
            {leads.length}
          </p>
        </div>

        <div className="bg-green-600 rounded-lg p-6 text-center">
          <h2>New Leads</h2>
          <p className="text-4xl font-bold">
            {leads.filter((lead) => lead.status === "New").length}
          </p>
        </div>

        <div className="bg-purple-600 rounded-lg p-6 text-center">
          <h2>Closed Leads</h2>
          <p className="text-4xl font-bold">
            {leads.filter((lead) => lead.status === "Closed").length}
          </p>
        </div>

      </div>

      {/* Search */}

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by Name or Email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 rounded-lg text-black"
        />
      </div>

      <table className="w-full border border-gray-700">

        <thead>
          <tr className="bg-blue-600">
            <th className="p-3">Name</th>
            <th>Email</th>
            <th>Budget</th>
            <th>Message</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {filteredLeads.length === 0 ? (

            <tr>
              <td colSpan="6" className="text-center p-6">
                No Leads Found
              </td>
            </tr>

          ) : (

            filteredLeads.map((lead) => (

              <tr
                key={lead._id}
                className="border border-gray-700 text-center hover:bg-gray-800"
              >
                <td className="p-3">{lead.name}</td>

                <td>{lead.email}</td>

                <td>{lead.budget}</td>

                <td>{lead.message}</td>

                <td>

                  <button
                    onClick={() => updateStatus(lead._id)}
                    className={`px-4 py-2 rounded text-white ${
                      lead.status === "New"
                        ? "bg-blue-500"
                        : lead.status === "Contacted"
                        ? "bg-yellow-500"
                        : "bg-green-600"
                    }`}
                  >
                    {lead.status}
                  </button>

                </td>

                <td>

                  <button
                    onClick={() => deleteLead(lead._id)}
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}

export default Admin;