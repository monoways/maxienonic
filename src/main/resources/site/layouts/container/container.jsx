import React from "react";
import Regions from '@enonic/react-components/Regions';


export default (props) => (
    <div class='testContainerLayout'>
        <Regions {...props} />
    </div>
    // <div class="row layout" style="margin: auto;width:80%;">
    //     <div data-th-each="region, iterStat : ${regions}" data-th-remove="tag">
    //         <div data-th-attr="data-portal-region=${region.name}" data-th-class="${region.columnClass}" style=" display: flex;
    //         align-items: center;
    //         justify-content: center;">
    //             <div data-th-each="component : ${region.components}" data-th-remove="tag">
    //                 <div data-portal-component="${component.path}" data-th-remove="tag" />
    //             </div>
    //         </div>
    //     </div>
    // </div>
);