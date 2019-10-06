import React from 'react';
import ResearchList from '../../component/ResearchList';
import Sidebar from "../../component/Sidebar";

interface IDashProps {

}

export default (props: IDashProps) => {
    return (
        <div>
            <Sidebar />
            <div>Hello Dash</div>
            <ResearchList />
        </div>
    )
}
