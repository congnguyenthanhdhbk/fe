import React  from "react";
import {
    CFormText,
    CFormGroup,
    CLabel,
    CInput,
    CForm,
    CCol,
    CRow,
    CCard,
    CCardBody,
    CCardHeader,
    CButton,
} from "@coreui/react";
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../../../store";
import { CREATE_BOOKING } from "../../../constants";

const CreateBooking = () => {
    const dispatch = useDispatch()
    let addedBooking = useTypedSelector((state) => state.addedBooking)

    const submitBooking = () => {
        addedBooking = { ...addedBooking}
        console.log("Add booking", addedBooking)
        dispatch({ type: CREATE_BOOKING, addedBooking})
    }

    const handleChangeEmail = (email: any) => {
        addedBooking = {...addedBooking, email: email.target.value}
        console.log("Create booking email", addedBooking)
    }

    return (
        <CCard>
            <CCardHeader>
                Create Booking
            </CCardHeader>
            <CCardBody>
                <CRow>
                    <CCol sm="12" md="6">
                        <CForm action="" method="post">
                            <CFormGroup>
                                <CLabel htmlFor="nf-email">Email</CLabel>
                                <CInput
                                    type="email"
                                    id="nf-email"
                                    name="nf-email"
                                    placeholder="Enter Email.."
                                    autoComplete="email"
                                    onChange={() => handleChangeEmail}
                                />
                                <CFormText className="help-block">Please enter your email</CFormText>
                            </CFormGroup>
                            <CFormGroup>
                                <CLabel htmlFor="nf-password">Password</CLabel>
                                <CInput
                                    type="password"
                                    id="nf-password"
                                    name="nf-password"
                                    placeholder="Enter Password.."
                                    autoComplete="current-password"
                                />
                                <CFormText className="help-block">Please enter your password</CFormText>
                            </CFormGroup>
                        </CForm>
                    </CCol>
                </CRow>
            </CCardBody>
            <CCardHeader>
                <CButton color="success" onClick={submitBooking} > Create Booking</CButton>
            </CCardHeader>
        </CCard>
    );
}

export default CreateBooking
