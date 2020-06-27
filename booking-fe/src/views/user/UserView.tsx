import React , { useContext, useState } from "react";
import { observer } from "mobx-react-lite"
import "mobx-react-lite/batchingForReactDom"

import {
    CButton,
    CCol,
    CCardBody,
    CCard,
    CCardFooter,
    CCardHeader,
    CRow,
    CInput,
    CFormGroup,
    CLabel,
    CSelect,
    CInputFile, CInputGroup, CInputGroupPrepend, CInputGroupText, CInputGroupAppend
} from "@coreui/react"
import { useDispatch } from "react-redux"
import CIcon from "@coreui/icons-react";

import UserStore from "../../stores/UserStore"
import {useTypedSelector} from "../../store";
import {CREATE_BOOKING} from "../../constants";

const UserView = () => {
    const dispatch = useDispatch()
    let addedBooking = useTypedSelector((state) => state.addedBooking)

    const userStore = useContext(UserStore)
    const {
        inputUserName,
        inputAddress,
        handleChangeInputUsername,
        handleChangeAddress,
        selectAvatar
    } = userStore

    const submitBooking = () => {
        addedBooking = { ...addedBooking, userName: inputUserName, email: inputAddress }
        dispatch({type: CREATE_BOOKING, addedBooking })
        console.log("Show booking in view user", addedBooking)
    }
    return (
        <div className="container-fluid">
            <CCard>
                <CCardHeader color="success">
                    <CIcon name="cil-user-follow"/> Add new user
                </CCardHeader>
                <CCardBody>
                    <CRow>
                        <CCol sm={4}>
                            <CFormGroup>
                                <CInputGroup>
                                    <CInputGroupAppend>
                                        <CInputGroupText><CIcon name="cil-user" /></CInputGroupText>
                                    </CInputGroupAppend>
                                    <CInput
                                        label="Username"
                                        placeholder="Please enter your username"
                                        onChange={handleChangeInputUsername}
                                    />
                                </CInputGroup>
                            </CFormGroup>
                        </CCol>
                        <CCol sm={4}>
                            <CFormGroup>
                                <CInputGroup>
                                    <CInputGroupAppend>
                                        <CInputGroupText><CIcon name="cil-lock-locked" /></CInputGroupText>
                                    </CInputGroupAppend>
                                    <CInput
                                        label="Password"
                                        type="password"
                                        placeholder="Please enter your password"
                                        onChange={handleChangeAddress}
                                    />
                                </CInputGroup>
                            </CFormGroup>
                        </CCol>
                        <CCol sm={4}>
                            <CFormGroup>
                                <CInputGroup>
                                    <CInputGroupAppend>
                                        <CInputGroupText><CIcon name="cil-lock-locked"/></CInputGroupText>
                                    </CInputGroupAppend>
                                    <CInput
                                        label="re-input password"
                                        placeholder="Please confirm password"
                                    />
                                </CInputGroup>
                            </CFormGroup>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol sm={4}>
                            <CFormGroup>
                                <CInputGroup>
                                    <CInputGroupAppend>
                                        <CInputGroupText><CIcon name="cil-keyboard"/></CInputGroupText>
                                    </CInputGroupAppend>
                                    <CInput
                                        label="First name"
                                        placeholder="Please enter your first name"
                                    />
                                </CInputGroup>
                            </CFormGroup>
                        </CCol>
                        <CCol sm={4}>
                            <CFormGroup>
                                <CInputGroup>
                                    <CInputGroupAppend>
                                        <CInputGroupText><CIcon name="cil-keyboard"/></CInputGroupText>
                                    </CInputGroupAppend>
                                    <CInput
                                        label="Middle name"
                                        placeholder="Please enter your middle name"
                                    />
                                </CInputGroup>
                            </CFormGroup>
                        </CCol>
                        <CCol sm={4}>
                            <CFormGroup>
                                <CInputGroup>
                                    <CInputGroupAppend>
                                        <CInputGroupText><CIcon name="cil-keyboard"/></CInputGroupText>
                                    </CInputGroupAppend>
                                    <CInput
                                        label="Last name"
                                        placeholder="Please enter your last name"
                                    />
                                </CInputGroup>
                            </CFormGroup>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol sm={4}>
                            <CFormGroup>
                                <CInputGroup>
                                    <CInputGroupAppend>
                                        <CInputGroupText><CIcon name="cil-keyboard"/></CInputGroupText>
                                    </CInputGroupAppend>
                                    <CInput
                                        label="Address"
                                        placeholder="Please enter your address"
                                    />
                                </CInputGroup>
                            </CFormGroup>
                        </CCol>
                        <CCol sm={4}>
                            <CFormGroup>
                                <CInputGroup>
                                    <CInputGroupAppend>
                                        <CInputGroupText><CIcon name="cil-menu"/></CInputGroupText>
                                    </CInputGroupAppend>
                                    <CSelect
                                        placeholder="Please select your city"
                                    >
                                        <option value="0">Please select your city</option>
                                        <option value="1">Option #1</option>
                                        <option value="2">Option #2</option>
                                        <option value="3">Option #3</option>
                                    </CSelect>
                                </CInputGroup>
                            </CFormGroup>
                        </CCol>
                        <CCol sm={4}>
                            <CFormGroup>
                                <CInputGroup>
                                    <CInputGroupAppend>
                                        <CInputGroupText><CIcon name="cil-menu"/></CInputGroupText>
                                    </CInputGroupAppend>
                                    <CSelect
                                        placeholder="Please select your state"
                                    />
                                </CInputGroup>
                            </CFormGroup>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol sm={6}>
                            <CFormGroup>
                                <CInputGroup>
                                    <CInputGroupAppend>
                                        <CInputGroupText><CIcon name="cil-menu"/></CInputGroupText>
                                    </CInputGroupAppend>
                                    <CSelect
                                        placeholder="Please select your country"
                                    />
                                </CInputGroup>
                            </CFormGroup>
                        </CCol>
                        <CCol sm={6}>
                            <CFormGroup>
                                <CInputGroup>
                                    <CInputGroupAppend>
                                        <CInputGroupText><CIcon name="cil-keyboard"/></CInputGroupText>
                                    </CInputGroupAppend>
                                    <CInput
                                        label="Zip"
                                        placeholder="Please enter your zip"
                                    />
                                </CInputGroup>
                            </CFormGroup>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol sm={6}>
                            <CFormGroup>
                                    <CInputFile
                                        placeholder="Please choose avatar"
                                        src="https://avatarfiles.alphacoders.com/764/76491.jpg"
                                        onChange={selectAvatar}
                                    />
                            </CFormGroup>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol sm={3}>
                            <CFormGroup>
                                <CInputGroup>
                                    <CInputGroupAppend>
                                        <CInputGroupText><CIcon name="cil-phone"/></CInputGroupText>
                                    </CInputGroupAppend>
                                    <CInput
                                        label="Phone"
                                        placeholder="Please enter your phone"
                                    />
                                </CInputGroup>
                            </CFormGroup>
                        </CCol>
                        <CCol sm={3}>
                            <CFormGroup>
                                <CInputGroup>
                                    <CInputGroupAppend>
                                        <CInputGroupText><CIcon name="cil-envelope-closed"/></CInputGroupText>
                                    </CInputGroupAppend>
                                    <CInput
                                        label="Email"
                                        placeholder="Please enter your email"
                                    />
                                </CInputGroup>
                            </CFormGroup>
                        </CCol>
                        <CCol sm={3}>
                            <CFormGroup>
                                <CInputGroup>
                                    <CInputGroupAppend>
                                        <CInputGroupText><CIcon name="cil-keyboard"/></CInputGroupText>
                                    </CInputGroupAppend>
                                    <CInput
                                        label="Age"
                                        placeholder="Please enter your age"
                                    />
                                </CInputGroup>
                            </CFormGroup>
                        </CCol>
                        <CCol sm={3}>
                            <CFormGroup>
                                <CInputGroup>
                                    <CInputGroupAppend>
                                        <CInputGroupText><CIcon name="cil-calendar"/></CInputGroupText>
                                    </CInputGroupAppend>
                                    <CInput
                                        label="Age"
                                        type="date"
                                        id="dob"
                                        name="dob"
                                        placeholder="Please enter your age"
                                    />
                                </CInputGroup>
                            </CFormGroup>
                        </CCol>
                    </CRow>
                </CCardBody>
                <CCardFooter>
                    <CRow className="float-sm-right">
                        <CCol>
                            <CButton onClick={submitBooking} color="primary" className="mr-1"><CIcon name="cil-save" /> Submit</CButton>
                            <CButton onClick={submitBooking} color="danger"><CIcon name="cil-exit-to-app"/> Exit</CButton>
                        </CCol>
                    </CRow>
                </CCardFooter>
            </CCard>
        </div>
    )
}

export default observer(UserView)
