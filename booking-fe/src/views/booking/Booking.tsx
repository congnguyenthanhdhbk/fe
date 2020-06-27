import React, { Component } from "react";

import { CButton, CTabPane, CTabs, CNav, CNavItem, CNavLink, CTabContent } from '@coreui/react';

export default class Booking extends Component<any, any> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                <CTabs activeTab="home">
                    <CNav variant="tabs">
                        <CNavItem>
                            <CNavLink data-tab="create">
                                Create
                            </CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink data-tab="update">
                                Update
                            </CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink data-tab="view">
                                View
                            </CNavLink>
                        </CNavItem>
                    </CNav>
                    <CTabContent>
                        <CTabPane data-tab="create">
                            123
                        </CTabPane>
                        <CTabPane data-tab="update">
                            123
                        </CTabPane>
                        <CTabPane data-tab="view">
                            123
                        </CTabPane>
                    </CTabContent>
                </CTabs>
            </div>
        );
    }
}
