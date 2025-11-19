import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import { PDFDownloadLink } from '@react-pdf/renderer';
import InvoiceCertificate from './InvoiceCertificate';

const Invoice = () => {
  const modalRef = useRef(null);
  const [submittedData, setSubmittedData] = useState(null);

  const invoiceForm = useFormik({
    initialValues: {
      fullname: '',
      phone: '',
      emailID: '',
      tech: '',
      amount: '',
      date: '',
    },
    onSubmit: (values) => {
      setSubmittedData(values);
      const modal = new window.bootstrap.Modal(modalRef.current);
      modal.show();
    },
  });

  return (
    <>
      <div className="card p-4" style={{ maxWidth: '400px', margin: 'auto', marginTop: '30px' }}>
        <form onSubmit={invoiceForm.handleSubmit}>
          <div className="mb-3">
            <label className="form-label fs-5">Fullname:</label>
            <input type="text" className="form-control border-dark" {...invoiceForm.getFieldProps('fullname')} />
          </div>
          <div className="mb-3">
            <label className="form-label fs-5">Mobile Number:</label>
            <input type="number" className="form-control border-dark" {...invoiceForm.getFieldProps('phone')} />
          </div>
          <div className="mb-3">
            <label className="form-label fs-5">Email:</label>
            <input type="email" className="form-control border-dark" {...invoiceForm.getFieldProps('emailID')} />
          </div>
          <div className="mb-3">
            <label className="form-label fs-5">Technology:</label>
            <input type="text" className="form-control border-dark" {...invoiceForm.getFieldProps('tech')} />
          </div>
          <div className="mb-3">
            <label className="form-label fs-5">Amount Paid:</label>
            <input type="number" className="form-control border-dark" {...invoiceForm.getFieldProps('amount')} />
          </div>
          <div className="mb-3">
            <label className="form-label fs-5">Date:</label>
            <input type="date" className="form-control border-dark" {...invoiceForm.getFieldProps('date')} />
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>

      <div className="modal fade" tabIndex="-1" ref={modalRef} aria-labelledby="invoiceModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="invoiceModalLabel">Submitted Invoice</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p><strong>Fullname:</strong> {submittedData?.fullname || '-'}</p>
              <p><strong>Mobile Number:</strong> {submittedData?.phone || '-'}</p>
              <p><strong>Email:</strong> {submittedData?.emailID || '-'}</p>
              <p><strong>Technology:</strong> {submittedData?.tech || '-'}</p>
              <p><strong>Amount Paid:</strong> {submittedData?.amount || '-'}</p>
              <p><strong>Date:</strong> {submittedData?.date || '-'}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

              {submittedData && (
                <PDFDownloadLink document={<InvoiceCertificate data={submittedData} />} fileName="invoice.pdf">
                  {({ loading }) =>
                    loading ? (
                      <button className="btn btn-warning" disabled>Loading PDF...</button>
                    ) : (
                      <button className="btn btn-warning" data-bs-dismiss="modal">Download PDF</button>
                    )
                  }
                </PDFDownloadLink>
                
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
