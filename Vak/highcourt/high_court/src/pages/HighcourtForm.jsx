import React from 'react'
import { useFormik } from 'formik';
function HighcourtForm() {
const vakalathForm = useFormik({
    initialValues: {
      CouncilName: "",
      BarCouncilEnrollmentNumber: "",
      CouncilAddress: "",
      CaseType: "",
      Date: "",
      CourtName: "",
      PetitionersAdress: "",
      RespondentsAddress: "",
      MainPrayer: "",
      InterimPrayer: "",
      Petitionername1: "",
      Age: "",
      Respondentname1:"",
      Age:""
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <form className="d-flex flex-wrap justify-content-between gap-1">
        <div className="w-25 mb-3">
          <label className="fs-5" for="council">
            Council Name{" "}
          </label>
          <input
            className="form-control"
            placeholder="Enter Council Name"
            name="CouncilName"
          />
        </div>
        <div className="w-25 mb-3">
        <label className="fs-5">Bar Council Enrollment Number</label>
        <input
            className="form-control"
            placeholder="Enter Bar Council Enrollment Number"
            name="BarCouncilEnrollmentNumber"
        />
        </div>
        <div className="w-25 mb-3">
          <label className="fs-5">Council Address</label>
          <input
            className="form-control"
            placeholder="Enter Council Address"
            name="CouncilAddress"
          />
        </div>
        <div className="w-25 mb-3">
          <label className="fs-5">Case Type</label>
          <select name="CaseType" className="form-select form-select-lg mb-3">
            <option selected disabled>
              Select Case Type
            </option>
          </select>
        </div>
          <div className="w-25 mb-3">
          <label className="fs-5">Date</label>
          <input
            className="form-control"
            type="date"
            placeholder="Select Date"
            name="Date"
          />
        </div>
        <div className="w-25 mb-3">
          <label className="fs-5">Place</label>
          <input
            className="form-control"
            placeholder="Enter Your Place"
            name="Place"
          />
        </div>
      
        <div className="w-25 mb-3">
          <label className="fs-5">Suit For</label>
          <input
            className="form-control"
            placeholder="Enter Suit For"
            name="SuitFor"
          />
        </div>
        <div className="w-25 mb-3">
          <label className="fs-5">Verification</label>
          <input
            className="form-control"
            placeholder="Enter Verfication"
            name="Verification"
          />
        </div>
          <div className="w-25 mb-3">
          <label className="fs-5">Plaintiff's Name</label>
          <input
            className="form-control"
            placeholder="Plaintiff's Name"
            name="PlaintiffsName"
          />
        </div>
           <div className="w-25 mb-3">
          <label className="fs-5">Plaintiff's Address</label>
          <input
            className="form-control"
            placeholder="Plaintiff's Address"
            name="PlaintiffsAddress"
          />
        </div>
        <div className="w-25 mb-3">
          <label className="fs-5">Detendent's Name</label>
          <input
            className="form-control"
            placeholder="Detendant's Name"
            name="DetendantsName"
          />
        </div>
        <div className="w-25 mb-3">
          <label className="fs-5">Detendent's Address</label>
          <input
            className="form-control"
            placeholder="Detendant's Address"
            name="DetendantsAddress"
          />
        </div>
      </form>
    </div>
  );
}

export default HighcourtForm