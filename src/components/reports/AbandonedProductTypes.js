import React from 'react'

export default function AbandonedProductTypes() {
    return (
        <React.Fragment>
            <table>
                <thead>
                    <tr>
                        <td><strong>Product Type</strong></td>
                        <td><strong>Incomplete Orders</strong></td>
                    </tr>
                </thead>
                <tbody>
                    {/* REPLACE INSIDE WITH DYNAMIC DATA */}
                        <tr>
                            <td>Electronics</td>
                            <td>22</td>
                        </tr>
                    {/* REPLACE INSIDE WITH DYNAMIC DATA */}
                </tbody>
            </table>
        </React.Fragment>
    )
}
