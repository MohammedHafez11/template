'use client';

import React, { useEffect, useState } from "react";
import { useGetAllQuery, useGetByIdQuery, useDeleteMutation, useAddMutation } from "../../../redux-toolkit/services/BankService";
import CompanyLayout from "@/layout/CompanyLayout";
import CompanyAboutUs from "@/components/Company/AboutUs/CompanyAboutUs";
import CompanyFeatures from "@/components/Company/AboutUs/CompanyFeatures";
import FriendBookTeam from "@/components/Company/AboutUs/FriendBookTeam";
import Blogs from "@/components/Company/Home/Blogs";
import { toast } from 'react-toastify';

const CompanyAbout = () => {
  const { data, refetch } = useGetAllQuery({});
  const [selectedBankId, setSelectedBankId] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newBank, setNewBank] = useState({
    address: '',
    mobile: '',
    countryMobileId: '',
    email: '',
    names: [],
    branchId: '',
    notes: '',
    balance: 5,
    code: 4,
    balanceFirstDuration: 1,
  });

  
  const { data: bankData, error: bankError, isLoading: bankLoading } = useGetByIdQuery(
    selectedBankId || "",
    { skip: !selectedBankId }
  );

  const [deleteBank, { isLoading: isDeleting, error: deleteError }] = useDeleteMutation();
  const [addBank, { isLoading: isAdding, error: addError }] = useAddMutation();

  useEffect(() => {
    document.body.classList.add("bg-white");
    return () => {
      document.body.classList.remove("bg-white");
    };
  }, []);

  useEffect(() => {
    if (selectedBankId) {
      setShowModal(true);
    }
  }, [selectedBankId]);

  useEffect(() => {
    if (!showModal) {
      setSelectedBankId(null);
    }
  }, [showModal]);

  const handleShow = (id: string) => {
    setSelectedBankId(id);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleDelete = async () => {
    if (selectedBankId) {
      try {
        await deleteBank(selectedBankId).unwrap();
        toast.success('Bank successfully deleted');
        setShowModal(false);
        refetch();
      } catch (error) {
        toast.error('Failed to delete bank');
        console.error("Failed to delete bank:", deleteError);
      }
    }
  };

  const handleAddBank = async () => {
    console.log("Current newBank state:", newBank); // Verify current state
    try {
      console.log("New bank data being sent:", newBank);
      await addBank(newBank).unwrap();
      toast.success('Bank successfully added');
      setShowAddModal(false);
      refetch();
    } catch (error) {
      console.error("Failed to add bank:", error);
      toast.error('Failed to add bank');
    }
  };
  const listData = data?.data?.listData;
  if (!listData || !Array.isArray(listData)) {
    return null;
  }

  return (
    <CompanyLayout title="About Us" activeNav="about">
      <CompanyAboutUs />
      <CompanyFeatures />
      <FriendBookTeam />

      <div className="container mt-4">
        <h2>Banks List</h2>
        <button
          className="btn btn-success mb-3"
          onClick={() => setShowAddModal(true)}
        >
          Add Bank
        </button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Address</th>
              <th>Mobile</th>
              <th>Country Mobile ID</th>
              <th>Balance Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listData.map((bank: any) => (
              <tr key={bank.id}>
                <td>{bank.id}</td>
                <td>{bank.address}</td>
                <td>{bank.mobile}</td>
                <td>{bank.countryMobileId}</td>
                <td>{bank.balanceFirstDuration}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleShow(bank.id)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showModal && (
          <>
            <div className="modal fade show" tabIndex={-1} role="dialog" style={{ display: 'block', zIndex: 1050 }}>
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Bank Details</h5>
                  </div>
                  <div className="modal-body">
                    {bankLoading ? (
                      <p>Loading bank details...</p>
                    ) : bankError ? (
                      <p>Error loading bank details: {bankError.message || 'Unknown error'}</p>
                    ) : bankData ? (
                      <div>
                        <p><strong>ID:</strong> {bankData.data.id}</p>
                        <p><strong>Address:</strong> {bankData.data.address}</p>
                        <p><strong>Mobile:</strong> {bankData.data.mobile}</p>
                        <p><strong>Country Mobile ID:</strong> {bankData.data.countryMobileId}</p>
                        <p><strong>Balance Duration:</strong> {bankData.data.balanceFirstDuration}</p>
                      </div>
                    ) : (
                      <p>No bank details available</p>
                    )}
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleClose}>
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={handleDelete}
                      disabled={isDeleting}
                    >
                      {isDeleting ? 'Deleting...' : 'Delete'}
                    </button>
                    {deleteError && <p className="text-danger">Error deleting bank: {deleteError.message}</p>}
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-backdrop fade show" style={{ zIndex: 1040 }}></div>
          </>
        )}

        {showAddModal && (
          <>
            <div className="modal fade show" tabIndex={-1} role="dialog" style={{ display: 'block', zIndex: 1050 }}>
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Add Bank</h5>

                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <label>Address</label>
                      <input
                        type="text"
                        className="form-control"
                        value={newBank.address}
                        onChange={(e) => setNewBank({ ...newBank, address: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Mobile</label>
                      <input
                        type="text"
                        className="form-control"
                        value={newBank.mobile}
                        onChange={(e) => setNewBank({ ...newBank, mobile: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Country Mobile ID</label>
                      <input
                        type="text"
                        className="form-control"
                        value={newBank.countryMobileId}
                        onChange={(e) => setNewBank({ ...newBank, countryMobileId: e.target.value })}
                      />
                    </div>

                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setShowAddModal(false)}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleAddBank}
                      disabled={isAdding}
                    >
                      {isAdding ? 'Adding...' : 'Add Bank'}
                    </button>
                    {addError && <p className="text-danger">Error adding bank: {addError.message}</p>}
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-backdrop fade show" style={{ zIndex: 1040 }}></div>
          </>
        )}
      </div>

      <Blogs />
    </CompanyLayout>
  );
};

export default CompanyAbout;