import * as React from "react";
import Header from "../../containers/Header";
import ComponentUndertaking from "../../containers/ComponentUndertaking";
import './undertaking.css';

const ContractStaffUndertaking = () => {

    return(
        <div>
            <Header />
            <ComponentUndertaking undertakingForm='/contractstaff/undertaking/form'/>
        </div>
    );
};

export default ContractStaffUndertaking;