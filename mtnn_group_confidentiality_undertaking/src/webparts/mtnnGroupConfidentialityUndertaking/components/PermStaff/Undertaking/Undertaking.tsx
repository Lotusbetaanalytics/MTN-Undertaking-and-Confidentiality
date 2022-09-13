import * as React from "react";
import UserSideBar from '../../containers/UserSideBar';
import ComponentUndertaking from "../../containers/ComponentUndertaking";

const PermStaffUndertaking = () => {

    return(
        <div className="wrapper">
            <UserSideBar undertaking="active"/>
            
            <div>
                <p className="header-color"></p>
                <ComponentUndertaking undertakingForm='/permanentstaff/undertaking/form'/>
            </div>
            
        </div>
    );
};

export default PermStaffUndertaking;