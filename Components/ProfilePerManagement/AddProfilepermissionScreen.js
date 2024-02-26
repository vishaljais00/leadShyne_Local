import React, { useState } from 'react'
import Link from "next/link";

export default function AddProfilepermissionScreen() {


  return (
     <div className='main_Box'>
      <div className="bread_head">
        <h3 className="content_head">ADD PROFILE </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/ProfilePermissionManagement">Profile Management</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Add Profile
            </li>
          </ol>
        </nav>
      </div>

      <div className="main_content">
        <div className="Add_user_screen">
          <div className="add_screen_head">
            <span className="text_bold">Enter Details</span>
          </div>
          <div className="add_user_form">
            <div className="row">
              <div className="col-xl-3 col-md-3 col-sm-12 col-12">
                <div className="input_box">
                  <label htmlFor="task_name">Profile Name </label>
                  <input
                    type="text"
                    placeholder="Enter Profile Name "
                    name="task_name"
                    id="task_name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="text-end">
                <div className="submit_btn">

                  <button className="btn btn-primary">Save & Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
