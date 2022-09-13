import * as React from "react";
import AdminSideBar from '../../containers/AdminSideBar';
import ComponentUndertaking from "../../containers/ComponentUndertaking";

const AdminUndertaking = () => {

    return(
        <div className="wrapper">
            <AdminSideBar adminUndertaking="active"/>
            
            <div>
                <p className="header-color"></p>
                <ComponentUndertaking undertakingForm='/admin/undertaking/form'/>
            </div>
            
        </div>
    );
};

export default AdminUndertaking;